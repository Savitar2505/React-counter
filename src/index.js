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
    onDecrease =()=>{
        this.setState(
            (oldState)=>({count:oldState.count-1})
        )
    }
    reset =()=>{
        this.setState({
            count:0
        })
    }
    render() {
        return(
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.onDecrease}>Decrease</button>
                <button onClick={this.reset}>Reset</button>
                <button onClick={this.onIncrease}>Increase</button>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

