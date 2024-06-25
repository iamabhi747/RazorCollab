module.exports = exports ={};

exports.type={token};

exports.rule= /\n?\r?/;

exports.resolver= function LineBreak(context,groups)
{
    return `<br>`;
}


