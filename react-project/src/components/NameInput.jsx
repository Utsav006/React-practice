import { useState } from "react";

function NameInput() {
    const [name, setName] = useState("");
    return (
        <div>
            <h2>Your name is: {name}</h2>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <h2>Hello, Namastey! {name}</h2>
        </div>
    );
}

export default NameInput; 