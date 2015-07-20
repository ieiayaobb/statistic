let React = require('react');
let io = require('socket.io-client');
let socket = io.connect('http://localhost:9092');

class Switcher extends React.Component {

    constructor(){
        super();
        socket.on('connect', function(){
            console.log("connected");
        })

        socket.emit('chatevent', "test");
    }

    componentWillMount () {
        console.log(1)
    }

    render (){
        return (<span className="no-display"></span>);
    }
}

module.exports = Switcher;
