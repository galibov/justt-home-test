"use client"
import { useState } from 'react';
import {BrowseTab} from './components/Tabs/BrowseTab';
import {PickCharacterTab} from './components/Tabs/PickCharacterTab';
import {Search} from "@/app/components/Search";
import Image from "next/image";

export default function Home() {
    const [activeTab, setActiveTab] = useState('one');
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className='flex flex-col justify-center items-center pb-20'>
            <div className='absolute top-0 left-0 w-full'>

            </div>
            <div className='w-full max-w-screen-2xl my-8'>
                <Image className='mx-auto' height='200' width='200' src={'/logo.svg'} alt={'logo'}/>
            </div>
            <div className='flex w-full max-w-screen-2xl mb-4  justify-center'>
                <div className="btn-group">
                <button
                    className={`btn btn-wide text-white border-0 ${activeTab === 'one' ? 'bg-purple-700' : 'bg-purple-100'}`}
                    onClick={() => setActiveTab('one')}
                >
                    Browse
                </button>
                <button
                    className={`btn btn-wide text-white border-0 ${activeTab === 'two' ? 'bg-purple-700' : 'bg-purple-100'}`}
                    onClick={() => setActiveTab('two')}
                >
                    pick a character
                </button>
                </div>
            </div>

            <div className='w-full max-w-screen-2xl'>
                <Search onSearch={setSearchQuery}/>
                {activeTab === 'one' && <BrowseTab searchQuery={searchQuery} />}
                {activeTab === 'two' && <PickCharacterTab />}
            </div>
        </div>
    );
}
