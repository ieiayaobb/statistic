var React = require('react');
var io = require('socket.io-client');
var socket = io.connect('http://localhost:9092');


socket.on('connect', function(){
    console.log("connected");
})

socket.emit('chatevent', "test");

var socket = React.createClass({


    componentWillMount: function () {
        console.log(1)


    },

    render: function(){
        return (<span className="no-display"></span>);
    }
})