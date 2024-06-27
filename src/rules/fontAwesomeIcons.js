module.exports = exports = {};
module.order=100;
exports.type = "icon";


exports.rule = /\[fa-([^\]]+)\]/;

exports.resolver = function createIcon(context, groups) {
    let iconName = groups[0];
    return `<i class="fa fa-${iconName}"></i>`;
};
