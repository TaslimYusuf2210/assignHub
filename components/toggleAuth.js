"use client"

import { useState } from "react";

function ToggleAuth({currentTab}) {
    const [activeTab, setActiveTab] = useState('Lecturer')
    const tabs = ["Lecturer", "Student"]
    function handleToggle(tab) {
        setActiveTab(tab)
        currentTab(tab)
    }
    return ( 
        <div className="bg-cyan-300 rounded-2xl flex p-1 w-full">
            {tabs.map((tab) => (
                <button
                key={tab}
                onClick={() => handleToggle(tab)}
                className={`w-full py-2 rounded-xl text-sm font-medium transition-colors
                ${activeTab === tab ? "bg-gray-200 shadow-md" : ""}`}
                >
                    {tab}
                </button>

            ))}
        </div>
     );
}

export default ToggleAuth;