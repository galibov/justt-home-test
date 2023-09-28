import {FC} from "react";

interface TabButtonProps {
    title: string;
    isActive: boolean;
    onClick: () => void;
}
export const TabButton: FC<TabButtonProps> = ({ title, isActive, onClick }) => {
    return (
        <button
            className={`btn btn-wide  border-0 ${isActive ? 'bg-indigo-900 text-white' : 'bg-indigo-100 text-indigo-700'}`}
            onClick={onClick}
        >
            {title}
        </button>
    )
}
