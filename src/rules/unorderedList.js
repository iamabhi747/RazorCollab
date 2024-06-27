module.exports = exports = {};

exports.type = "token"; // token, ast, ignore
exports.order = 95;

exports.rule = /((?:\r?\n- .*?)(?:\r?\n *- .*?)+)\r?\n/;

exports.css = `
.c2m ul {
    margin: 0 -10px;
}
`;


function resolveIndent(indentation_tree, indentation) {
    const tree_index = indentation_tree.findIndex((value) => value === indentation);
    let output = '';
    if (tree_index == -1) {
        if (indentation_tree[indentation_tree.length - 1] < indentation) {
            indentation_tree.push(indentation);
            return '<ul>';
        }
        else {
            return resolveIndent(indentation_tree, indentation-1);
        }
    }
    else
    {
        let prv_length = indentation_tree.length
        indentation_tree.splice(tree_index + 1, indentation_tree.length - tree_index - 1);
        return '</ul>'.repeat(prv_length - tree_index - 1);
    }
}

exports.resolver = function unorderdList (context, groups) {
    output = '<ul>';
    let indentation_tree = [];
    groups[0].trim().split('\n').forEach((item, index) => {
        const indentation = item.match(/^( *)-/)[1].length;
        const listItem = item.replace(/^( *)-/, '').trim();
        if (indentation_tree.length == 0) indentation_tree.push(indentation);

        console.log(listItem, indentation_tree, indentation);

        output += resolveIndent(indentation_tree, indentation);
        output += `<li>${listItem}</li>`;
    });
    output += '</ul>'.repeat(indentation_tree.length);
    return output;
    // return groups.toString();
}