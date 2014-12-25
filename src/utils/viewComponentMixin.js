var eventStream = require('./eventStream');

var ViewComponentMixin = {

    componentWillMount: function () {
        var componentName = this.constructor.displayName;
        console.log('componentWillMount::' + componentName);

        var logicalComponent = settings.logicalComponents[componentName];
        if (logicalComponent) {
            this.subscription = eventStream.wire(this, logicalComponent);
        }
    },

    componentWillUnmount: function () {
        console.log('componentWillUnmount::' + this.constructor.displayName);

        if (this.subscription) {
            this.subscription.dispose();
        }
    },

    publish: function (event) {
        eventStream.publish(event);
    }
};

module.exports = ViewComponentMixin;
