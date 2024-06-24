const { loadRules } = require('./loadRules');
const Tokenizr = require('tokenizr');
const { resolveTokens } = require('./resolveTokens');
let DEBUG = true;

export let lexer = new Tokenizr();
const resolvers = loadRules(lexer);
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