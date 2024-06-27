module.exports = exports = {};

exports.type = "image";

exports.rule = ``;

exports.resolver = function createImage(context, groups) {
    let altText = groups[1];
    let url = groups[2];

    return `<img src="${url}" alt="${altText}" />`;
};