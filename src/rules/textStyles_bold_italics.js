module.exports = exports = {};

exports.type="token";

exports.rule=/(\*{1,3})(.+?)\1/;

exports.resolver=function boldItalic(context,groups)
{
    let countAsterisk=groups[1].length;
    if(countAsterisk==2)
        {
            return `<strong>${groups[2]}</strong>`;
        }
    else if(countAsterisk==1)
        {
            return `<em>${groups[2]}</em>`;   
        }
    else if(countAsterisk==3)
        {
            return `<em><strong>${groups[2]}</strong></em>`;  
        }

}