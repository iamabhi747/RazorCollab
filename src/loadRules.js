
function count_capture_groups(regex) {
    return (new RegExp(regex.toString() + '|')).exec('').length - 1;
}

module.exports.loadRules = (lexer, css_element) => {
    let resolvers = {};
    const files = require('../build/rules-lock.json');
    for (const file of files) {
        const rule = require('../src/rules/' + file);
        if (rule.type === 'token') {
            lexer.rule(rule.rule, (ctx, match) => {
                const capture_groups = count_capture_groups(rule.rule);
                const captures = [];
                for (let i = 1; i <= capture_groups; i++) {
                    captures.push(match[i]);
                }
                ctx.accept(rule.resolver.name, captures);
            });
            resolvers[rule.resolver.name] = rule.resolver;

            if (rule.css) {
                css_element.innerHTML += rule.css;
            }
        }
        else if (rule.type === 'ignore') {
            lexer.rule(rule.rule, (ctx, match) => {
                ctx.ignore();
            });
        }
    }

    // load default resolvers
    const defaultResolvers = require('../src/defaultResolvers');
    return {...defaultResolvers, ...resolvers};
}