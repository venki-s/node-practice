console.log('Before');
async function  displayCommit() {
   await setTimeout(()=> {
        console.log('Reading from databse ... ');
        return {id: 1 , gitId: 'venkat'};
    }, 2000); 
    //console.log(timeout._onTimeout());
}
displayCommit();
console.log('After');

/*
function getUser(id)  {
    setTimeout(()=> {
        console.log('Reading from databse ... ');
        return {id: id, gitId: 'venkat'};
    }, 2000);
}
*/