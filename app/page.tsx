"use client";
import { useState } from 'react';
import { BrowseTab } from '@/app/components/Tabs/BrowseTab';
import { PickCharacterTab } from '@/app/components/Tabs/PickCharacterTab';
import Image from "next/image";
import {TabButton} from '@/app/components/TabButton'; // Adjust the path as necessary

export default function Home() {
    const [activeTab, setActiveTab] = useState('one');

    return (
        <div className='flex flex-col justify-center items-center pb-20'>
            <div className='w-full max-w-screen-lg 2xl:max-w-screen-2xl my-8'>
                <Image className='mx-auto' height='200' width='200' src={'/logo.svg'} alt={'logo'}/>
            </div>
            <div className='flex w-full max-w-screen-lg 2xl:max-w-screen-2xl mb-10  justify-center'>
                <div className="btn-group">
                    <TabButton title='Browse' isActive={activeTab === 'one'} onClick={() => setActiveTab('one')}/>
                    <TabButton title='Pick a Character' isActive={activeTab === 'two'} onClick={() => setActiveTab('two')}/>
                </div>
            </div>
            <div className='w-full max-w-screen-lg 2xl:max-w-screen-2xl'>
                {activeTab === 'one' && <BrowseTab />}
                {activeTab === 'two' && <PickCharacterTab  />}
            </div>
        </div>
    );
}
