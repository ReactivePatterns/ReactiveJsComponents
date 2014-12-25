var React = require('react/addons');
var ViewComponentMixin = require('../utils/viewComponentMixin');

var DoorEvents = React.createClass({

    mixins: [ ViewComponentMixin ],

    handleEventClick: function(eventName) {
        this.publish({components: ['DoorEvents', 'DoorState'], event: eventName});
    },

    cssMapping: {
        'close': 'moon',
        'open': 'sun',
        'lock': 'lock',
        'unlock': 'unlock',
        'break': 'settings',
        'fix': 'wrench'
    },

    render: function () {
        var links = this.state.events.map(function (event) {
            return <a key={event} className="action ui button" onClick={this.handleEventClick.bind(this, event)}><i className={this.cssMapping[event] + ' icon'}></i>{event}</a>;
        }, this);
        return(
            <div className="ui labeled vertical fluid icon">
                {links}
            </div>
        );
    }
});

module.exports = DoorEvents;