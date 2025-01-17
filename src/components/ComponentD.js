import { Component } from "react";
import ComponentE from "./ComponentE";

export class ComponentD extends Component{
    render(){
        return(
            <div className="container border border-success">
            <h5>Component D</h5>
            <ComponentE/>
            </div>
        );
    };
   
}

