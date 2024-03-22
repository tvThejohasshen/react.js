import {useState} from 'react'

function NumberBox() {


    const [count, setCount] = useState(0);

    const increaseNumber = () => {
        // change the current value in the `count` variable
        // to be its current value + 1
        setCount(count + 1);
    }

    const decreaseNumber = () => {
        setCount(count - 1);
    }

    return <div style={{
        "padding":"20px",
        "height":"50px",
        "width": "50px",
        "border":"1px solid black"
    }} 
       >

        <button onClick={increaseNumber}>Increase</button><div>{count}</div>
        <button onClick={decreaseNumber}>Decrease</button><div>{count}</div>
    </div>
}

export default NumberBox;