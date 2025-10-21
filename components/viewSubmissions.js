import ViewSubmissionNavContent from "./viewSubmissionNavContent";
import ViewSubmissionCard from "./viewSubmissionCard";
import { FaRegClock } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";

const assignments = [
    {
        title: "Web Development Project",
        token: "WEB101",
        submissions: 1
    },
    {
        title: "Data Structures Assignment",
        token: "DS201",
        submissions: 0
    },
    {
        title: "Database Design Report",
        token: "DB301",
        submissions: 1
    },
]

function ViewSubmissions() {
    return ( 
        <div className="space-y-6">
            <div className="grid gap-4 grid-cols-3">
                {assignments.map((item => (
                    <ViewSubmissionNavContent
                    key={item.token}
                    title={item.title}
                    token={item.token}
                    submissions={item.submissions}
                    />
                )))
                }
            </div>
            <div className="">
                <ViewSubmissionCard/>
            </div>
            <div className="bg-white border border-blue-200 p-6 rounded-lg">
                <header className="font-bold text-xl">Database Design Report</header>
                <p className="text-gray-600">Deadline: 10/19/2025, 5:09:46 PM</p>
                <div className="p-5 border border-gray-300 rounded-lg mt-6">
                    <header className="text-lg font-bold">Jane Smith  <span className="py-1 px-2  bg-red-200 text-sm text-red-700 rounded-lg">Late</span></header>
                    <div className="text-gray-600 flex items-center gap-2">
                        <FaRegClock className="font-light"/>
                        <p>Submitted: 10/18/2025, 5:09:46 PM</p>
                    </div>
                    <div className="text-gray-600 mt-1 flex items-center gap-2">
                        <GrNotes className="font-light"/>
                        <p>db_design.pdf (0.00 MB)</p>
                    </div>
                    <p className="text-gray-600 mt-2 mb-3"><i>Note: Late submission</i></p>
                    <hr className="border-blue-200 mb-4"/>
                    <div className="flex gap-4">
                        <button className="p-2 flex items-center gap-2 border rounded-lg border-blue-200 hover:cursor-pointer hover:text-white hover:bg-blue-500"> 
                            <MdOutlineFileDownload className="text-xl"/>
                            <span className="font-medium">Download</span> 
                        </button>
                        <button className="p-2 flex items-center gap-2 border rounded-lg bg-blue-500 text-white border-blue-200 hover:cursor-pointer hover:bg-blue-600"> 
                            <FaRegPenToSquare  className="text-lg"/>
                            <span className="font-medium">Grade</span> 
                        </button>
                    </div>
                </div>
                <div className="p-5 border border-gray-300 rounded-lg mt-6 flex justify-center items-center">
                    <p className="text-gray-600 text-lg">No submissions yet.</p>
                </div>
            </div>
        </div>
     );
}

export default ViewSubmissions;