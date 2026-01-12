import { PenIcon } from "lucide-react";
import DottedTitle from "../common/dotted-tittle";

export default function Blogs(){
    return(
        <div className="section-seprate px-4 py-7 pb-10">
            <DottedTitle>Blogs</DottedTitle>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
                <p className="flex items-center gap-2"><PenIcon className="size-3"/>Coming Soon...</p>
            </div>
        </div>
    )
}