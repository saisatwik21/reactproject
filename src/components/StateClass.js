import React, { Component } from 'react'

export default class StateClass extends Component {
    
        constructor(props) {
            super(props)
        
            this.state = {
                 name:"sai",
                 count:0
            }
        };
        render() { 
            setTimeout(()=>{
                this.setState({
                    name:"sai satwik",
              });
            },2000);

        

        return (
            <div>
                <h1>Name:{this.state.name}</h1>
                <h2>Count:{this.state.count}</h2>
            </div>
        )
        }
}
