import {FC, useState} from "react";
import {useFetch} from "@/app/hooks/useFetch";
import {Search} from "@/app/components/Search";
import Image from "next/image";

export const PickCharacterTab: FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { data, error, loading } = useFetch(searchQuery ? `https://rickandmortyapi.com/api/character/${searchQuery}` : '', {});
    return (
          <div className='bg-white'>
            <Search placeholder={'Search for character I.d'}  onSearch={setSearchQuery} />
            <div className='flex flex-col justify-center items-center py-32'>
                <Image height='200' width='200' src="/search.svg" alt="search"/>
                <div className='text-center text-gray-400 font-light text-xl'>Search for a character i.d in order to view a character</div>
            </div>
          </div>
    )
}
