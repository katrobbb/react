import React from 'react';
import ReactDOM from 'react-dom';

//es6 classes use extends.  if not use createClass
class Hello extends React.Component {
    render: function(){
        return (
            
            var myStyle = {
            fontSize: 200, color: 'green'
            }
            
            <div style={myStyle}>
            Hello Im learning react!
            //add js within JSX using curly braces
            Ive been learning for {1+1} weeks :) 
            </div>
        );
    }
}

class AddingProps extends React.Component {
    render: function() {
        return ( 
        <p>{this.props.title}</p>
        <p>{this.props.image}</p>
        )
    }
}

var options = {
    title: 'Using Props',
    image: 'cats.jpg'   
}


ReactDOM.render(<Hello />, document.getElementById('body'));
ReactDOM.render(<AddingProps />, document.getElementById('body'));