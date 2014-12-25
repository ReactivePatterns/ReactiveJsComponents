var Rx = require('rx');
var eventStream = require('./eventStream');

function LogicalComponent(logic) {
    return {
        getStateStream: function (eventFilter) {
            return Rx.Observable.return(logic.publishedStateMapper(logic.initialState)).concat(
                eventStream.filter(eventFilter)
                .scan(logic.initialState, logic.eventProcessor)
                .map(logic.publishedStateMapper))
        }
    }
}

module.exports = LogicalComponent;