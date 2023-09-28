import {FC} from "react";

interface InfoSectionProps {
    label: string;
    value: string | number | undefined;
}

export const InfoSection: FC<InfoSectionProps> = ({ label, value }) => (
    <div className='w-60'>
        <div className='text-sm text-gray-500'>{label}</div>
        <div className='text-md font-bold text-indigo-700'>{value}</div>
    </div>
);
