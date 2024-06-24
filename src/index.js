const { loadRules } = require('./loadRules');
const Tokenizr = require('tokenizr');
const { resolveTokens } = require('./resolveTokens');
let DEBUG = true;

let css_element = document.createElement('style');
css_element.id = 'code2markdown-css';
window.onload = () => {
    document.head.appendChild(css_element);
}

export let lexer = new Tokenizr();
const resolvers = loadRules(lexer, css_element);
if (DEBUG) console.log('Resolvers:', resolvers);


export function convert(txt_data) {
    lexer.input(txt_data);
    lexer.debug(DEBUG);
    const tokens = lexer.tokens();
    if (DEBUG) console.log('tokens:', tokens);
    let output = resolveTokens(tokens, resolvers);
    // let output = txt_data;
    return output
}