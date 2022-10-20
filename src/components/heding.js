import React from "react";


function Heading(props) {

return(
    <div className="tem">
   
        <div>

          <p className="T">Temperatura maxima:</p>
          <p className="tem">{props.temp}</p>
</div>
</div>
    
) 
}

export default Heading;
