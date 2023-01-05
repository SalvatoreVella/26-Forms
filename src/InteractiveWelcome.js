import React from "react"
import Welcome from "./Welcome"

export default class InteractiveWelcome extends React.Component {
    state = {
        name: "",
    }
    handleName = (event) => {
        this.setState(prev => {
            return {name: event.target.value}
        })
    }

    render() {
        return (
            <div>
                <Welcome name = {this.state.name}/>
                <input type="text" onChange={this.handleName}></input>
            </div>
        )
    }
}