import React, { useState } from 'react';

function Dice() {
   
    const [diceValue, setDiceValue] = useState(getRandomInt(1,6));

    // Function to generate a random integer between min and max (inclusive)
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to handle click event and change the value of the dice
    function handleClick() {
        setDiceValue(getRandomInt(1,6));
    }

    return (
        <div
            style={{
                "padding":"20px",
                "height":"50px",
                "width": "50px",
                "border":"1px solid black",
                "backgroundColor": "red"
            }}
            onClick={handleClick}
        >
            {diceValue}
        </div>
    );
}

export default Dice;
