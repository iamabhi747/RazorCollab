module.exports = exports = {};

exports.type="token";
exports.order = 110;

exports.rule = /(\*{1,3})(.+?)\1/;

exports.resolver=function boldItalic(context,groups)
{
    let countAsterisk=groups[0].length;
    if(countAsterisk==2)
        {
            return `<strong>${groups[1]}</strong>`;
        }
    else if(countAsterisk==1)
        {
            return `<em>${groups[1]}</em>`;   
        }
    else if(countAsterisk==3)
        {
            return `<em><strong>${groups[1]}</strong></em>`;  
        }

}