console.log('Before');
const user = getUser(1);
console.log(user);
console.log('After');

function getUser(id)  {
    setTimeout(()=> {
        console.log('Reading from databse ... ');
        return {id: id, gitId: 'venkat'};
    }, 2000);
}