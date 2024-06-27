module.exports=exports={};

exports.type="token";

exports.rule=/\n(>+)\s*(.*)\r?\n/;

exports.resolver=function blockQuotes(context,groups)
{
    let quoteNum=groups[0].length;
    let startbq_num='<blockquote>'.repeat(quoteNum);
    let endbq_num='</blockquote>'.repeat(quoteNum);

    return `${startbq_num}${groups[1]}${endbq_num}`;
}