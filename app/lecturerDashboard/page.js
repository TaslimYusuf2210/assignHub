"use client"

import Navbar from "@/components/navbar";
import { useState } from "react";
import ToggleTabs from "@/components/toggleTabs";
import CreateAssignment from "@/components/createAssignment";
import ViewSubmissions from "@/components/viewSubmissions";

function LecturerDashboard() {
    const [tab, setTab] = useState("Create Assignment")
    return ( 
        <div className="min-h-screen ">
            <Navbar/>
            <div className="p-8 space-y-4">
                <h3 className="font-bold text-3xl">Lecturer Dashboard</h3>
                <p className="text-gray-500 text-lg">Manage your assignments and view student submission</p>
                <div className="py-2">
                    <ToggleTabs
                    tabdata={["Create Assignment", "View Submissions"]}
                    onChange={(arg) => setTab(arg)}
                    />
                </div>

                <div>
                    {tab === "Create Assignment" ? (
                        <div>
                            <CreateAssignment/>
                        </div>
                    ) : (
                        <div>
                            <ViewSubmissions/>
                        </div>
                    )
                    }
                </div>

            </div>
        </div>
     );
}

export default LecturerDashboard;