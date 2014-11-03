var Rx = require('rx');

function LogicalComponent(logic) {
    return {
        getStream: function (eventStream) {
            return Rx.Observable.return(logic.publishedStateMapper(logic.initialState)).concat(
                eventStream
                .scan(logic.initialState, logic.eventProcessor)
                .map(logic.publishedStateMapper))
        }
    }
}

module.exports = LogicalComponent;