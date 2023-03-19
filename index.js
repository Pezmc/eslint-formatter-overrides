/**
 * Formats eslint output as a set of rule overrides, e.g.:
 * 
 * [
 *    {
 *        "rules": {
 *            "comma-dangle": "off"
 *        },
 *        "files": [
 *            "failing-file.js"
 *        ]
 *    },
 *    {
 *        "rules": {
 *            "comma-spacing": "off"
 *        },
 *        "files": [
 *            "another-failing-file.js"
 *        ]
 *    }
 * ]
 *
 * @param {*} messagesByFile 
 * @param {*} context 
 * @returns 
 */

module.exports = function (messagesByFile, context) {
    const filesByMessage = messagesByFile.reduce((map, file) => {
        const filePath = file.filePath

        for (const message of file.messages) {
            const messageId = message.ruleId
            if (!map.has(messageId)) {
                map.set(messageId, new Set())
            }

            map.get(messageId).add(filePath)
        }

        return map
    }, new Map())

    const rules = Array.from(filesByMessage)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([messageId, files]) => {
            return {
                rules: {
                    [messageId]: 'off',
                },
                files: Array.from(files)
                    .sort()
                    .map((file) => file.replace(context.cwd, '')),
            }
        })

    return JSON.stringify(rules, null, 4)
}
