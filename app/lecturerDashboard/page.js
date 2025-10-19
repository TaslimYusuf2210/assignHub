"use client"

import Navbar from "@/components/navbar";
import { useState } from "react";
import ToggleTabs from "@/components/toggleTabs";

function LecturerDashboard() {
    const [tab, setTab] = useState("Create Assignment")
    return ( 
        <div className="min-h-screen ">
            <Navbar/>
            <div className="p-8">
                <h3 className="font-bold text-3xl">Lecturer Dashboard</h3>
                <p className="text-gray-500 mt-3 text-lg">Manage your assignments and view student submission</p>
                <ToggleTabs
                tabdata={["Create Assignment", "View Submissions"]}
                onChange={(arg) => setTab(arg)}
                />

                <div>
                    {tab === "Create Assignment" ? (
                        <div>Create assignment tab</div>
                    ) : (
                        <div>View Submissions tab</div>
                    )
                    }
                </div>

            </div>
        </div>
     );
}

export default LecturerDashboard;