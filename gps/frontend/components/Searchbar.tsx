"use client"

import React, { useState } from 'react';

export const Searchbar = () => {
    const [searchQuery, setsearchQuery] = useState('');

    const onSearch = (event: React.FormEvent) => {
        event.preventDefault();
        const encodedSearchQuery = encodeURIComponent(searchQuery);
        console.log('currentQuery',encodedSearchQuery);
    }

    return (
        <form className="relative min-w-[423px] mt-4 text-gray-600" onSubmit={onSearch}>
            <input
                value={searchQuery}
                placeholder="Bạn đang tìm kiếm gì?"
                className="bg-white h-11 px-5 pr-10 w-full text-sm focus:outline-none border border-stone-800 p-2 rounded-md "
                onChange={(event) => setsearchQuery(event.target.value)}
            />
            <button onSubmit={onSearch} className="absolute bg-orange-400 text-white rounded-r-md right-0 h-full px-2 hover:bg-sky-700">
               <p>Tìm Kiếm</p>
            </button>
        </form>
    );
};

