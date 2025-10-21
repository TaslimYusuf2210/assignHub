import { CiSearch } from "react-icons/ci";

function AssignmentList() {
    return ( 
        <div className="border p-6 border-blue-200 rounded-xl">
            <form className="w-full space-y-4">
                <div className="space-y-2">
                    <header className="font-semibold text-xl">Search Assignment</header>
                    <p className="text-gray-600">Enter the assignment token provided by your lecturer</p>
                </div>
                <div className="w-full flex items-center gap-4">
                    <input placeholder="e.g CPT521" type="text" className="text rounded-md w-full border border-blue-200 px-4 h-10"/>
                    <button className="h-10 w-12 grid place-items-center bg-blue-500 text-xl text-white rounded-md hover:cursor-pointer hover:bg-blue-600"><CiSearch/></button>
                </div>
            </form>

        </div>
     );
}

export default AssignmentList;