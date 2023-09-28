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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data</p>;
    if (!data) return null;

    const characters = data.results as Character[];

    return (
        <div>
            <Search placeholder={'Browse for characters...'} onSearch={handleSearch} />
            <Table characters={characters} />
        </div>
    );
};
