import React , {component} from 'react'
export default class Mountingphases extends component {
    constructor(props) {
        super(props)
        this.state={

        }
        console.log("this is from constructor")
    }
    getvalues=()=>{

    }
    render(){
        console.log("this is from render")
        return(
            <div>
                <button onclick={this.getvalues}>get value from server</button>

            </div>
        )

        
    }
    componentDidmount(){
        console.log("componentDidmount")
    }
}