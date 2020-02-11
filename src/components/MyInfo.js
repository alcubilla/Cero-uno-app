import React from "react";


function MyInfo() {
    const firstName = 'Cecilia';
    const LastName ='Torres';

    const date= new Date();
    const hours= date.getHours();
    let timeText;

    if (hours < 12)
        {timeText= 'Buenos dias';}
         else if (hours >= 12 && hours < 17)
            {timeText= 'Buenas tardes';}
                else { timeText= 'Buenas noches';}
        
    

    return (  
    <div>
        <p>{timeText}</p>
        <h1>{`${firstName} ${LastName}`}</h1>
        {/* <p>Me gusta programar y me gustaria visitar:</p>
        <ul>
            <li>Europa</li>
            <li>Ciudad de México</li>
            <li>Chiapas</li>
        </ul> */}
    </div>
    );
  }

export default MyInfo;