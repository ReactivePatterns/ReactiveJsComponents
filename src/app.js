/*jshint node:true, browser: true*/

var React = require('react/addons');
var DoorStateView = require('./views/doorStateView.jsx');
var DoorEventsView = require('./views/doorEventsView.jsx');

React.renderComponent(
    DoorStateView(),
    document.getElementById('state')
);

React.renderComponent(
    DoorEventsView(),
    document.getElementById('events')
);
