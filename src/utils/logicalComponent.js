var Rx = require('rx');
var eventStream = require('./eventStream');

var componentFilter = function(componentName, event) {
    var shouldPass = false
    if (event && event.components) {
        event.components.map(function(component) {
            if(component == componentName) {
                shouldPass = true;
            };
        });
    }
    return shouldPass;
};

function LogicalComponent(name, logic) {
    var publishedStateStream = Rx.Observable.return(logic.publishedStateMapper(logic.initialState)).concat(
        eventStream.filter(componentFilter.bind(this, name)).map(function(ev) {return ev.event;})
            .scan(logic.initialState, logic.eventProcessor)
            .map(logic.publishedStateMapper));
    return {
        name: name,
        getStateStream: function () {
            return publishedStateStream
        }
    }
}

module.exports = LogicalComponent;