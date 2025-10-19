"use client"

import { useState } from "react";

function ToggleTabs({tabdata, onChange, defaultTab}) {
    const [activeTab, setActiveTab] = useState(defaultTab || tabdata[0])
    const tabs = ["Lecturer", "Student"]
    function handleToggle(tab) {
        setActiveTab(tab)
        if(onChange) onChange(tab)
    }
    return ( 
        <div className="bg-cyan-300 rounded-2xl flex p-1 w-full">
            {tabdata.map((tab) => (
                <button
                key={tab}
                onClick={() => handleToggle(tab)}
                className={`w-full py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer
                ${activeTab === tab ? "bg-gray-200 shadow-md" : ""}`}
                >
                    {tab}
                </button>

            ))}
        </div>
     );
}

export default ToggleTabs;