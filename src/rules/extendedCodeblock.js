module.exports = exports = {};

exports.type = "token"; // token, ast, ignore
exports.order = 100;

exports.rule = /(?:\r?\n|^)```(.*)\r?\n((.*\r?\n)*?)```/;

exports.css = `
.c2m-extended-block {
    background-color: #040404;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
}
.c2m-extended-block pre {
    margin: 0;
    padding: 0;
}
`;

exports.resolver = function extendedCodeblock (context, groups) {
    // groups[0]: language identifier (might be used to further parse the block in future)
    // groups[1]: code block content
    return '<div class="c2m-extended-block"><pre>' + groups[1] + '</pre></div>';
}

// Test:
// A
// ```B
// Abhinandan
// 2nd line      10 
// ```
// D