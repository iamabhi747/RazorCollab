module.exports = exports = {};

exports.type = "token"; // token, ast, ignore

exports.rule = /(#+)(.+)\r?\n?/;

exports.resolver = function heading (context, groups) {
    let heading_number = Math.min(groups[0].length, 4);
    return `<h${heading_number}>${groups[1]}</h${heading_number}>`
}