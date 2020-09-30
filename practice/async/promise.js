const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("success");
        reject(new Error("failed"));
    }, 2000);
});

p
.then(result => console.log('Result ', result))
.catch(error => console.log('Error is ', error.message));