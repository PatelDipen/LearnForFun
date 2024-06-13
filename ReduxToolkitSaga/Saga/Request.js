export function incrementAsyncRQ(count) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(count+1);
        }, 1000);
    });
}

export function decrementAsyncRQ(count) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(count+1);
        }, 1000);
    });
}