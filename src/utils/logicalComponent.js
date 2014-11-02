function LogicalComponent(logic) {

    return {
        getStream: function (eventStream) {
            return eventStream
                .scan(logic.initialState, logic.eventProcessor)
                .map(logic.publishedStateMapper)
        }
    }
}

module.exports = LogicalComponent;