var eventStream = require('./eventStream');
var settings = require('../config');

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

    publish: function (event, components) {
        if (!components) {
            components = [settings.logicalComponents[this.constructor.displayName].name]
        }
        eventStream.publish({event: event, components: components});
    }
};

module.exports = ViewComponentMixin;
