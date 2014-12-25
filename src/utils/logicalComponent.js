var Rx = require('rx');

function LogicalComponent(eventStream, logic) {
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