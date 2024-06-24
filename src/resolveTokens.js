
module.exports.resolveTokens = (tokens, resolvers) => {
    let output = '';
    context = {};
    for (const token of tokens) {
        if (resolvers[token.type]) {
            output += resolvers[token.type](context, token.value);
        }
        else {
            throw new Error('No resolver found for token type:', token.type);
        }
    }
    return output;
}