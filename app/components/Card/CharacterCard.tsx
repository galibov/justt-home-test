import { Character } from "@/app/interfaces";
import { FC } from "react";
import Image from "next/image";
import {InfoSection} from "@/app/components/Card/InfoSection";

interface CharacterCardProps {
    character: Character;
}

export const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
    return (
        <div className='w-full flex-col lg:flex-row flex gap-10 justify-center'>
            <Image className='rounded-2xl border-4 border-indigo-700' src={character.image} alt={character.name} width={300} height={300} />
            <div className="bg-indigo-50 shadow-xl card w-full lg:w-1/2 p-5">
                <div className="uppercase font-bold text-indigo-700 text-xs">Character description</div>

                <div className='flex flex-col  lg:flex-col justify-between mt-8'>
                    <div className={'flex flex-row gap-10'}>
                        <InfoSection label="I.d" value={character.id} />
                        <InfoSection label="Name" value={character.name} />
                        <InfoSection label="Gender" value={character.gender} />
                    </div>

                    <div className={'flex flex-row gap-10 mt-20'}>
                        <InfoSection label="Origin" value={character.origin?.name} />
                        <InfoSection label="Species" value={character.species} />
                        <InfoSection label="Status" value={character.status} />
                    </div>
                </div>
            </div>
        </div>
    );
};
