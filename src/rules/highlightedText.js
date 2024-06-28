module.exports = exports = {};

exports.type = "token"; // token, ast, ignore
// exports.order = 100;

exports.rule = /==(.*)==/;

exports.css = `
.c2m mark {
    background-color: #f8d049;
    color: #000;
    padding: 0 5px;
}
`;

exports.resolver = function highlightedText (context, groups) {
    return `<mark>${groups[0]}</mark>`;
}