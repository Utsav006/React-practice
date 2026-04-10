import React, { useState } from "react";

function Subscription() {
    // We use useState so React re-renders when the value changes
    const [isSubscribed, setIsSubscribed] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
                {/* Changed nb-4 to mb-4 */}
                <h2 className="text-xl font-bold mb-4 text-blue-600">Subscription Status</h2>
                
                <button 
                    onClick={() => setIsSubscribed(!isSubscribed)} 
                    className={`${isSubscribed ? "bg-green-500" : "bg-red-500"} text-white px-4 py-2 rounded transition-colors`}
                >
                    {isSubscribed ? "Subscribed, Thank You!" : "Subscribe Now"}
                </button>
            </div>
        </div>
    );
}

export default Subscription;