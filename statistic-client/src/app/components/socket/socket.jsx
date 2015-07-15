var React = require('react');
var io = require('socket.io-client');
var socket = io.connect('http://localhost:9092');

var socket = React.createClass({
    componentWillMount: function () {
        socket.on('connect', function(){
            console.log("connected");
        })

        socket.emit('init', "test");
    },

    render: function(){
        return (<span className="no-display"></span>);
    }
})