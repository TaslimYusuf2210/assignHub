"use client"

import ToggleTabs from "@/components/toggleTabs";
import { useState } from "react";
import LecturerAuthForm from "@/components/lecturerAuthForm";
import StudentAuthForm from "@/components/studentAuthForm";

function AuthenticationPage() {
        const [role, setRole] = useState("Lecturer")
    return ( 
        <div className="w-full h-screen flex justify-center items-center">
            <div className="rounded-lg w-[470px] shadow-xl bg-white px-6 py-10 w- text-center">
                <header className="text-3xl font-bold text-blue-600">AssignHub</header>
                <p className="text-gray-600 mt-3 mb-8 font-medium">Assignment Submission System</p>
                <ToggleTabs
                tabdata={["Lecturer", "Student"]}
                onChange={(tab) => setRole(tab)}
                
                />
                {role === "Lecturer" ? (
                    <LecturerAuthForm/>
                ) : (
                    <StudentAuthForm/>
                )
                }
            </div>  
        </div>
     );
}

export default AuthenticationPage;