var Rx = require('rx');

function EventStream() {

    var eventStream = new Rx.Subject();

    this.wire = function(viewComponent, logicalComponent, eventFilter) {
        return logicalComponent.getStateStream(eventFilter)
            .subscribe(viewComponent.setState.bind(viewComponent));
    };

    this.publish = function(event) {
        eventStream.onNext(event);
    };

    this.filter = function(eventFilter) {
        return eventStream.filter(eventFilter);
    };
}

module.exports = new EventStream();
