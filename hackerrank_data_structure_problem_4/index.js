const readline = require('readline');
const takeInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

takeInput.question("Enter the length of the stringList : ", (stringListLength) => {
    let strlen = parseInt(stringListLength);
    const stringList = [];
    const queries = [];

    const inputStringAndQuery = (index) => {
        if (index < strlen) {
            takeInput.question("Enter the string list value: ", (strValue) => {
                stringList.push(strValue);
                takeInput.question("Enter the query for this string: ", (queryValue) => {
                    queries.push(queryValue);
                    inputStringAndQuery(index + 1); // Continue to the next input
                });
            });
        } else {
            const results = matchingString(stringList, queries);
            console.log("Query Occurrences: ", results);
            takeInput.close();
        }
    }

    inputStringAndQuery(0);
});

const matchingString = (stringList, queries) => {
    const results = [];

    for (const query of queries) {
        let count = 0;
        for (const inputString of stringList) {
            if (inputString === query) {
                count++;
            }
        }
        results.push(count);
    }

    return results;
}
