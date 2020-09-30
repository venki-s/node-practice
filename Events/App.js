const EventEmitter = require('events');

const Logger = require('./logger');

const logger = new Logger();

logger.on('message loaded', (arg) => {
    console.log('Listener called', arg );
});

Logger.log('message');