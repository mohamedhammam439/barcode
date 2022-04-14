import { useState } from "react";

const Test = () => {
    var start = 0;
    var end = 10;
    const [barcode, setBarcode] = useState([]);
    
    while(start < end +1){
        barcode.push(405 + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + start ++);
    }
    return ( <div>
            {barcode.map((ls)=>(
                <h6> {ls} </h6>
            ))}
        </div> );
}
 
export default Test;