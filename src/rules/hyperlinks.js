module.exports = exports = {};
module.order=100;
exports.type = "token";

exports.rule = /\[([^\]]+)\]\(([^)]+)\)/;

exports.resolver = function createLink(context, groups) {
    let linkText = groups[0];
    let url = groups[1];

    return `<a href="${url}">${linkText}</a>`;
};
