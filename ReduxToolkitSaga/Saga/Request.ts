export function incrementAsyncRQ(count:number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(count+1);
        }, 1000);
    });
}

export function decrementAsyncRQ(count:number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(count+1);
        }, 1000);
    });
}