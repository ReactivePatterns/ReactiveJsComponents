var doorComponent = require('./components/doorComponent');

settings = {
    logicalComponents: {
        'DoorState': doorComponent,
        'DoorEvents': doorComponent
    }
}

module.exports = settings