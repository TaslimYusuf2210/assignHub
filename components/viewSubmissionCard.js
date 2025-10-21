import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FiAlertCircle } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";

function ViewSubmissionCard() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-white flex flex-col justify-between h-44 border py-6 pl-6 shadow-sm border-blue-200 rounded-lg">
        <header className="font-medium text-gray-700">Total Submissions</header>
        <div>
          <span className="font-bold text-3xl">1</span>
          <p className="text-gray-500 text-sm">submissions received</p>
        </div>
      </div>
      <div className="bg-white flex flex-col justify-between h-44 border py-6 pl-6 shadow-sm border-blue-200 rounded-lg">
        <header className="font-medium text-gray-700 flex items-center gap-2">
            <span className="text-green-600 text-lg"><IoMdCheckmarkCircleOutline /></span> 
            <span>On Time</span> 
        </header>
        <div>
          <span className="font-bold text-3xl text-green-800">1</span>
          <p className="text-gray-500 text-sm">submissions received</p>
        </div>
      </div>
      <div className="bg-white flex flex-col justify-between h-44 border py-6 pl-6 shadow-sm border-blue-200 rounded-lg">
<header className="font-medium text-gray-700 flex items-center gap-2">
            <span className="text-red-600 text-lg"><FiAlertCircle /></span> 
            <span>Late</span> 
        </header>        
        <div>
          <span className="font-bold text-3xl text-red-800">0</span>
          <p className="text-gray-500 text-sm">After Deadline</p>
        </div>
      </div>
      <div className="bg-white flex flex-col justify-between h-44 border py-6 pl-6 shadow-sm border-blue-200 rounded-lg">
<header className="font-medium text-gray-700 flex items-center gap-2">
            <span className="text-blue-600 text-lg"><FaRegClock /></span> 
            <span>Deadline</span> 
        </header>        
        <div>
          <span className="font-medium bg-blue-200 rounded-md text-blue-700 py-0.5 px-2 text-sm">6d 7h remaining</span>
          <p className="text-gray-500 text-sm mt-1">10/27/2025, 5:09:46 PM</p>
        </div>
      </div>
    </div>
  );
}

export default ViewSubmissionCard;
