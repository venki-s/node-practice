console.log('Before');
getUser(1, (user) => {
    console.log(user);
});
console.log('After');

function getUser(id, callback)  {
    setTimeout(()=> {
        console.log('Reading from databse ... ');
        callback({id: id, gitId: 'venkat'});
    }, 2000);
}