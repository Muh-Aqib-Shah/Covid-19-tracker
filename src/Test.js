import { Button } from '@mui/material';
import React, { useState } from 'react';

export const TEst = () => {
    let [m,setm] = useState(true);

    function handleme(){
        if(m===false){
            alert("TRY AGAIN");
            return 'SOME';
        }
        else{
            console.log("RRRRR");
          return(
             <div>PARENNNTTTTT</div>
          )
        }
    }
    return(
        <>
        <div>HELLO WORLDD</div>
        <Button onClick={handleme}>CLick</Button>
        </>
    )
}