module.exports = {
    type: "token",
    rule: /\r?\n|\r/,
    resolver: function LineBreak(context, groups) {
        // Although not used, context and groups are included for interface consistency
        return `<br>`;
    }
};



