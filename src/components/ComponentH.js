import { Component } from "react";
import { ComponentI } from "./ComponentI";

class ComponentH extends Component{
    render(){
        return(
            <div className="container border border-primary">
            <h3>Component H</h3>
            <ComponentI/>
            </div>
        );
    };
   
}

export default ComponentH;