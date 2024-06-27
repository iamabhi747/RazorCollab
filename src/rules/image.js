module.exports = exports = {};

exports.type = "token";

exports.rule = /!\[(.*?)\]\((.*?)\)/;

exports.resolver = function createImage(context, groups) {
    let altText = groups[0];
    let url = groups[1];

    return `<img src="${url}" alt="${altText}" />`;
};