function processLowerCaseWords(inputArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(inputArray)) {
            return reject("The input should be an array.");
        }

        const result = inputArray.reduce((acc, curr) => {
            if (typeof curr === 'string') {
                acc.push(curr.toLowerCase());
            }
            return acc;
        }, []);

        resolve(result);
    });
}

processLowerCaseWords([1, 'GOOD', 'DAY', true, 'GEORGEBROWN'])
    .then(data => console.log(data))
    .catch(err => console.error(err));
