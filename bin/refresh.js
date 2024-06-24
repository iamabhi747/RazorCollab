#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function collectCurrentRules() {
    let rules = [];
    let token_types = [];
    const files = fs.readdirSync(path.join(__dirname, '../src/rules'));
    for (const file of files) {
        if (file.endsWith('.js')) {
            const rule = require(path.join(__dirname, '../src/rules', file));
            rule.file = file;
            if (rule.order == undefined) rule.order = 10000;

            if (rule.type && ['token', 'ignore'].includes(rule.type)) {
                
                if (rule.type === 'token') {
                    // check if rule exists & its regex
                    // check if resolver exists & its a named function
                    if (rule.rule && rule.rule instanceof RegExp && rule.resolver && typeof rule.resolver === 'function' && rule.resolver.name) {
                        if (token_types.includes(rule.resolver.name)) {
                            console.error('Rule:', '(duplicate token)', rule.resolver.name, ', source:', rule.file);
                            continue;
                        }
                        token_types.push(rule.resolver.name);
                        rules.push(rule);
                        console.log('Rule:', rule.resolver.name, ', source:', rule.file);
                    }
                }
                else if (rule.type === 'ignore') {
                    // check if rule exists & its regex
                    if (rule.rule && rule.rule instanceof RegExp) {
                        rules.push(rule);
                        console.log('Rule:', 'ignore', ', source:', rule.file);
                    }
                }

            }
        }
    }
    rules = rules.sort((a, b) => a.order - b.order);
    const rule_files = rules.map(rule => rule.file);
    return rule_files;
}

function collectOldRules() {
    if (!fs.existsSync('./build/rules-lock.json')) {
        return [];
    }
    return JSON.parse(fs.readFileSync('./build/rules-lock.json'));
}

const current_rule_files = collectCurrentRules();
const old_rule_files = collectOldRules();
const new_rule_files_count     = current_rule_files.filter(rule => !old_rule_files.includes(rule)).length;
const deleted_rule_files_count = old_rule_files.filter(rule => !current_rule_files.includes(rule)).length;

console.log('\n* total rules', current_rule_files.length, `(${new_rule_files_count} new, ${deleted_rule_files_count} deleted)`);
fs.writeFileSync('./build/rules-lock.json', JSON.stringify(current_rule_files, null, 2));