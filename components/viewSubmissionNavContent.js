import { TbArrowZigZag } from "react-icons/tb";

function ViewSubmissionNavContent({title, token, submissions}) {
    return ( 
        <div className="bg-white border shadow-md border-blue-200 rounded-lg pl-6 pr-20 pb-6 pt-12 space-y-3">
            <header className="font-bold">{title}</header>
            <p className="text-sm">Token: <span className="font-bold">{token}</span></p>
            <div className="flex items-center gap-2">
                <TbArrowZigZag className="text-blue-500"/> 
                <p>Submissions: <span className="font-bold">{submissions}</span></p>
            </div>
        </div>
     );
}

export default ViewSubmissionNavContent;