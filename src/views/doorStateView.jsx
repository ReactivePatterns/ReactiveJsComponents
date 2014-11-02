var React = require('react/addons');
var ViewComponentMixin = require('../utils/viewComponentMixin');

var DoorState = React.createClass({

    mixins: [ ViewComponentMixin ],

    getInitialState: function () {

        return {state: 'CLOSED'};
    },

    render: function () {

        return(
            <div className="ui raised segment">
                <div className="ui top left attached blue label">State</div>
                <div id="state" className="ui ribbon teal label">{this.state.state}</div>
            </div>
        );
    }
});

module.exports = DoorState;