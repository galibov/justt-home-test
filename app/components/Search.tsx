import React, { FC, useState } from "react";
interface SearchProps {
    onSearch: (query: string) => void;
    placeholder: string
}
export const Search: FC<SearchProps> = ({ onSearch, placeholder }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSearchClick = () => {
        onSearch(inputValue);
    };
    return (
        <div className='text-center justify-center bg-gray-100 py-5'>
            <input
                type="text"
                placeholder={placeholder}
                className="input input-bordered mr-4 bg-white sm:w-1/2 lg:w-1/4"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                className="btn bg-indigo-900 border-0 text-white w-20"
                onClick={handleSearchClick}
            >
                GO
            </button>
        </div>
    );
};
