import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    state ={
        count: 0
    }

    onIncrease =()=>{
        this.setState(
            (oldState)=>({count:oldState.count+1})
        )
    }

    render() {
        return(
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.onIncrease}>Increase</button>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

