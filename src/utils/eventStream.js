var Rx = require('rx');

function EventStream() {

    var eventStream = new Rx.Subject();

    this.subscribe = function(viewComponent, logicalComponent, eventFilter) {
        return logicalComponent.getStream(eventStream.filter(eventFilter))
            .subscribe(viewComponent.setState.bind(viewComponent));
    };

    this.publish = function(event) {
        eventStream.onNext(event);
    };
}

module.exports = new EventStream();
