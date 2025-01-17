import { ComponentB } from "./ComponentB";

function ComponentA(){
    return(
        <div className="container border border-primary">
        <h2>Component A</h2>
        <ComponentB/>
        </div>
    );
}

export default ComponentA;