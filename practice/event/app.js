const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageloaded', (obj) => {
    console.log('message received', obj);
});

emitter.emit('messageloaded', {name: 'ravi', age:'32'});