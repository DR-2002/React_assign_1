import { ComponentD } from "./ComponentD";

function ComponentC(){
    return(
        <div className="container border border-secondary-subtle">
        <h4>Component C</h4>
        <ComponentD/>
    </div>
    );
}

export default ComponentC;