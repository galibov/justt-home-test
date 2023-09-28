import { FC, useState } from "react";
import { Table } from "../Table/Table";
import { Character } from "@/app/interfaces";
import { useFetch } from "@/app/hooks/useFetch";
import { Search } from "@/app/components/Search";

export const BrowseTab: FC = () => {
    const [query, setQuery] = useState('');
    const { data, error, loading } = useFetch(
        `https://rickandmortyapi.com/api/character`,
        { page: 1, name: query },
    );

    const handleSearch = (searchQuery: string) => {
        setQuery(searchQuery);
    };

    return (
        <>
            <Search placeholder={'Browse for characters...'} onSearch={handleSearch} />
            {loading && <div className='bg-white text-center py-20'> <p>Loading...</p></div>}
            {error && <div className='bg-white text-center py-20'><p>Error loading data</p>  </div>}
            {data && !loading && !error && <Table characters={data.results as Character[]} />}
        </>
    );
};
