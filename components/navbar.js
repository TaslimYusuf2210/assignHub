function Navbar() {
    return ( 
        <div  className="px-8 py-6 flex justify-between items-center bg-white shadow-lg">
            <div>
                <h4 className="text-2xl font-bold text-blue-600">AssignHub</h4>
                <p className="text-gray-600 font-medium">Lecturer Dashboard Preview</p>
            </div>
            <button className="bg-gray-300 font-medium border border-cyan-300 rounded-lg hover:text-white hover:bg-blue-600 px-4 py-2">
                Logout
            </button>
        </div>
     );
}

export default Navbar;