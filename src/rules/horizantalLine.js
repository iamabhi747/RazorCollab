module.exports = exports = {};

exports.type = "token"; // token, ast, ignore
exports.order = 80;

exports.rule = /\r?\n-+\r?\n/;

exports.css = `
.c2m hr {
    border: 0;
    border-top: 2px solid #EBECED;
    margin: 15px 0;
}
`;

exports.resolver = function horizantalLine (context, groups) {
    return `<hr>`;
}