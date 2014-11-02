var React = require('react/addons');
var ViewComponentMixin = require('../utils/viewComponentMixin');

var DoorEvents = React.createClass({

    mixins: [ ViewComponentMixin ],

    getInitialState: function () {

        return {events: ['open', 'lock']};
    },

    handleEventClick: function(eventName) { console.log('CLICK', eventName);
        this.publish({components: ['DoorEvents', 'DoorState'], event: eventName});
    },

    render: function () {
        var links = this.state.events.map(function (event) {
            return <a className="action ui button" onClick={this.handleEventClick.bind(this, event)}><i className="icon"></i>{event}</a>;
        }, this);
        return(
            <div className="ui labeled vertical fluid icon">
                {links}
            </div>
        );
    }
});

module.exports = DoorEvents;