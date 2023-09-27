import {FC} from "react";
import { Table } from "../Table/Table";
import {Character} from "@/app/interfaces";
import {useFetch} from "@/app/hooks/useFetch";
interface BrowseTabProps {
  searchQuery: string;
}

export const BrowseTab: FC<BrowseTabProps> = ({searchQuery}) => {
  const { data, error, loading } = useFetch('https://rickandmortyapi.com/api/character', { page: 1, name: searchQuery });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;
  if (!data) return null;

  const characters = data.results as Character[];

  return <Table characters={characters} />

};
