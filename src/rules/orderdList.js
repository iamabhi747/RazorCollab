module.exports = exports = {};

exports.type = "token"; // token, ast, ignore
exports.order = 95;

exports.rule = /((?:\r?\n1\. .*?)(?:\r?\n *1\. .*?)+)\r?\n/;

exports.css = `
.c2m ol {
    margin: 0 -10px;
    type: 1;
}
`;


function resolveIndent(indentation_tree, indentation) {
    const tree_index = indentation_tree.findIndex((value) => value === indentation);
    let output = '';
    if (tree_index == -1) {
        if (indentation_tree[indentation_tree.length - 1] < indentation) {
            indentation_tree.push(indentation);
            return '<ol>';
        }
        else {
            return resolveIndent(indentation_tree, indentation-1);
        }
    }
    else
    {
        let prv_length = indentation_tree.length
        indentation_tree.splice(tree_index + 1, indentation_tree.length - tree_index - 1);
        return '</ol>'.repeat(prv_length - tree_index - 1);
    }
}

exports.resolver = function orderdList (context, groups) {
    output = '<ol>';
    let indentation_tree = [];
    groups[0].trim().split('\n').forEach((item, index) => {
        const indentation = item.match(/^( *)1\./)[1].length;
        const listItem = item.replace(/^( *)1\./, '').trim();
        if (indentation_tree.length == 0) indentation_tree.push(indentation);

        console.log(listItem, indentation_tree, indentation);

        output += resolveIndent(indentation_tree, indentation);
        output += `<li>${listItem}</li>`;
    });
    output += '</ol>'.repeat(indentation_tree.length);
    return output;
    // return groups.toString();
}