const EventEmitter = require('events');

var url = 'https://www.google.com';

class Logger extends EventEmitter   {
    log(message)    {
        console.log(message);

        this.emit('message loaded', {'id':1, 'url':url});
    }
}

module.exports = Logger;