import { GrNotes } from "react-icons/gr";
import { LuClock5 } from "react-icons/lu";

function SubmissionHistory({title, date, time, file, size, note}) {
    return ( 
        <div className="border border-blue-200 rounded-lg px-6 pb-6 pt-12 space-y-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <GrNotes className="text-blue-500 text-xl"/>
                    <div>
                        <header className="font-semibold text-lg">{title}</header>
                        <span className="text-gray-600 flex items-center gap-2">
                            <LuClock5 />
                            <p>{date}, {time}</p> 
                        </span>
                    </div>
                </div>
                <div className="py-1 px-2  rounded-xl font-medium bg-green-200 text-green-600">On time</div>
            </div>
            <div>
                <p className="text-gray-600"><span className="font-medium">File: </span>{file}</p>
                <p className="text-gray-600"><span className="font-medium">Size: </span>{size}</p>
                <p className="text-gray-600"><span className="font-medium">Note: </span>{note}</p>
            </div>
        </div>
     );
}

export default SubmissionHistory;