import { Component } from "react";
import ComponentC from "./ComponentC";

export class ComponentB extends Component{
    render(){
        return(
            <div className="container border border-secondary">
            <h3>Component B</h3>
            <ComponentC/>
            </div>
        );
    };
   
}

