var url ='https://www.google.com'

function log(message)   {
    console.log(message);
}

console.log(module);

module.exports.log = log;
module.exports.endpoint = url;