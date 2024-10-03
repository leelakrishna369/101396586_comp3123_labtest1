function successPromise() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Success: Promise resolved after 500ms"), 500);
    });
}

function failurePromise() {
    return new Promise((reject) => {
        setTimeout(() => reject("Failure: Promise rejected after 500ms"), 500);
    });
}

successPromise()
    .then(message => console.log(message))
    .catch(error => console.error(error));

failurePromise()
    .then(message => console.log(message))
    .catch(error => console.error(error));
