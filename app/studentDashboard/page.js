"use client"

import { useState } from "react";
import Navbar from "@/components/navbar";
import ToggleTabs from "@/components/toggleTabs";
import AssignmentList from "@/components/assignmentList";
import SubmissionHistory from "@/components/submissionHistory";

const submission = [
    {
        title: "Web Development Project",
        date: "10/19/2025",
        time: "7:15:40 PM",
        file: "project-submission.pdf",
        size: "2.50 MB",
        note: "Final submission with all requirements completed",
    }
]

function studentDashboard() {
  const [tab, setTab] = useState("Assignments")
  return (
    <div className="min-h-screen ">
      <Navbar />
      <div className="p-8 space-y-4">
        <h3 className="font-bold text-3xl">Student Dashboard</h3>
        <p className="text-gray-500 text-lg">
            Search for assignments and submit your work
        </p>
        <div className="py-2">
            <ToggleTabs
            tabdata={["Assignments", "Submission History"]}
            onChange={(a) => setTab(a)}
            />
        </div>
        <div>
            {tab === "Assignments" ? (
                <div>
                    <AssignmentList/>
                </div>

            ) : (
                <div>
                    {submission.map((item) => (
                        <SubmissionHistory
                        key={item.title}
                        title={item.title}
                        date={item.date}
                        time={item.time}
                        file={item.file}
                        size={item.size}
                        note={item.note}
                        />
                    ))
                    }
                </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default studentDashboard;
