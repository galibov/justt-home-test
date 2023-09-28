import {FC, useEffect, useState} from "react";
import {TableRow} from "@/app/components/Table/TableRow";
import {Character} from "@/app/interfaces";
import Image from "next/image";

interface TableProps {
  characters: Character[];
}

export const Table: FC<TableProps> = ({ characters }) => {
  const [sortDirection, setSortDirection] = useState<string>('asc');
  const [sortedCharacters, setSortedCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const sorted = [...characters].sort((a, b) => {
      if (sortDirection === 'asc') {
        return a['id'] > b['id'] ? 1 : -1;
      } else {
        return a['id'] < b['id'] ? 1 : -1;
      }
    });
    setSortedCharacters(sorted);
  }, [sortDirection, characters]);

  const handleSort = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  return (
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          {/* head */}
          <thead>
          <tr className='bg-indigo-950 text-white'>
            <th className='py-1'>
              I.d
              <button onClick={handleSort} className="btn btn-ghost">
                <Image width={'8'} height={'8'} src={'/sort.svg'} alt={'sort'}/>
              </button>
            </th>
            <th>Name</th>
            <th>Species</th>
            <th>Status</th>
            <th>Origin</th>
            <th>Gender</th>
            <th>More</th>
          </tr>
          </thead>
          <tbody>
          {/* rows */}
          {
            sortedCharacters.map(character => (
                <TableRow character={character} key={character.id}/>
            ))
          }
          </tbody>
        </table>
      </div>
  );
};
