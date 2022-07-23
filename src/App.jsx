import React, { Component } from 'react'

export default class App extends Component {
    constructor(props){
        super(props) 
        this.state={
            addTextbox: [{}]
        }
    }
    addControls (){
        this.setState((
            {
                addTextbox:[... this.state.addTextbox,{}]
            }
        ))
    }

    delControls(i){
        this.state.addTextbox.splice(i,1)
        this.setState({})
    }
  render() {
    return (
      <div>

            <center> <div>Name:
                {this.state.addTextbox.map((index) => (<div> <input type="text" placeholder=' Enter Name' />
                {
                    index ?
                    <button onClick={()=>this.delControls(index)}><strong>❌</strong></button>
                : null   
                }
                    </div> ))}  
                  
                   <h1></h1> </div>
                <button onClick={() => this.addControls()}  >  add Constrols</button>
       </center> </div>
    )
  }
}
