var eventStream = require('./eventStream');

var componentFilter = function(viewComponent, event) {
    var shouldPass = false
    if (event.components) {
        event.components.map(function(component) {
            if(component == viewComponent.constructor.displayName) {
                shouldPass = true;
            };
        });
    }
    return shouldPass;
};

var ViewComponentMixin = {

    componentWillMount: function () {
        var componentName = this.constructor.displayName;
        console.log('componentWillMount::' + componentName);

        var logicalComponent = settings.logicalComponents[componentName];
        if (logicalComponent) {
            this.subscription = eventStream.subscribe(this, logicalComponent, componentFilter.bind(this, this));
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
