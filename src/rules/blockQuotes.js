module.exports=exports={};

exports.type="token";

exports.rule=/^(>+)\s*(.*)\r?\n?/;

exports.resolver=function blockQuotes(context,groups)
{
    let quoteNum=groups[0].length;
    let startbq_num='<blockQuotes>'.repeat(quoteNum);
    let endbq_num='<blockQuotes>'.repeat(quoteNum);

    return `${startbq_num}${group[1]}${endbq_num}`;
}