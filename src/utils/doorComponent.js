var Stately = require('./Stately.js');

var LogicalComponent = require('./logicalComponent');

function DoorComponent() {

    var door = Stately.machine({
        'CLOSED': {
            'open': /* => */ 'OPEN',
            'lock': /* => */ 'LOCKED'
        },
        'OPEN': {
            'close': /* => */ 'CLOSED'
        },
        'LOCKED': {
            'unlock': /* => */ 'CLOSED',
            'break': /* => */ 'BROKEN'
        },
        'BROKEN': {
            'fix': /* => */ 'OPEN'
        }
    });


    return  {
        initialState: door.close(),
        eventProcessor: function (door, event) {
            console.log(door.getMachineState(), '->', event.event);
            return door[event.event]();
        },
        publishedStateMapper: function (door) {
            return {
                'state': door.getMachineState(),
                'events': door.getMachineEvents()
            }
        }
    }
}

module.exports = LogicalComponent(DoorComponent());
