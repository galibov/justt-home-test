import React, { FC, useState } from "react";
interface SearchProps {
    onSearch: (query: string) => void;
}
export const Search: FC<SearchProps> = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSearchClick = () => {
        onSearch(inputValue);
    };
    return (
        <div className='text-center justify-center'>
            <input
                type="text"
                placeholder="Search…"
                className="input input-bordered mr-4 bg-white"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                className="btn bg-purple-700 border-0 text-white w-20"
                onClick={handleSearchClick}
            >
                GO
            </button>
        </div>
    );
};
