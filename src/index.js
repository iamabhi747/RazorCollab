const { loadRules } = require('./loadRules');
const Tokenizr = require('tokenizr');
const { resolveTokens } = require('./resolveTokens');
let DEBUG = true;

let css_element = document.createElement('style');
css_element.id = 'code2markdown-css';
window.onload = () => {
    document.head.appendChild(css_element);

    let css = `
    .c2m {
        background-color: #27272A;
        color: #EBECED;
        margin: 0;
        padding: 10px 15px;
        font-family: Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Helvetica,Roboto,Arial,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;
    }
    `;

    css_element.innerHTML += css;
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