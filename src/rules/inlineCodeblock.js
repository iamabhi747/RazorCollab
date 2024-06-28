module.exports = exports = {};

exports.type = "token"; // token, ast, ignore
// exports.order = 100;

exports.rule = /`(((?:.*?)\r?\n?)*?)`/;

exports.css = `
.c2m code {
    background-color: #747475;
    padding: 1px 5px;
    border-radius: 3px;
}
`;

exports.resolver = function inlineCodeblock (context, groups) {
    return `<code>${groups[0].replace('\n', ' ').replace('\r', '')}</code>`;
}