import React,{component} from "react";
export default class Updatephase extends component {
    constructor(props){
        super(props)
        this.state={

        }
        console.log("Updatephase")

    }
    render(){
        console.log("Updaterender")
        return(
            <div>
                <h2>updatephase</h2>

            </div>
        )
    }
    shouldComponentUpdate() {
        console.log("mountainphaseshouldComponentUpdate Triggered");
        return true;
      }
    componentDidUpdate(){
        console.log("componentdidupdate")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount Triggerd !!")
      }
}