'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';


const typeColors: Record<string, string> = {
    fire: '#F08030',
    water: '#6890F0',
    grass: '#78C850',
    electric: '#F8D030',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#F0B6BC',

};

const abilityColors: Record<string, string> = {
    overgrow: '#78C850',
    blaze: '#F08030',
    torrent: '#6890F0',
    shield_dust: '#F0F0F0',

};

export default function Pokemon({ params }: { params: { name: string } }) {
    const [Pokemon, setPokemon] = useState<any | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
                const json = await res.json();
                setPokemon(json);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    }, [params.name])

    if (Pokemon == null) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div className='back-button p-4'>
                <Link href='../' className='bg-green-500 text-white py-1 px-4 rounded hover:bg-green-700 transition-colors duration-300'>ย้อนกลับ</Link>
            </div>
            <div className='flex justify-center'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gradient-to-r from-green-200 to-blue-200 rounded-lg shadow-lg'>
                    <div className='flex justify-center'>
                        <Image className='rounded-lg' src={Pokemon.sprites.front_default} alt={params.name} width={320} height={320} />
                    </div>
                    <div>
                        <h1 className='text-4xl font-bold text-green-900'>{params.name}</h1>
                        <hr className='my-4' />
                        <div className='grid grid-cols-1 text-lg gap-4 text-green-900'>
                            <div className="flex justify-between">
                                <span>ความสูง:</span> <span>{Pokemon.height * 10} cm</span>
                            </div>
                            <div className="flex justify-between">
                                <span>น้ำหนัก:</span> <span>{Pokemon.weight / 10} kg</span>
                            </div>
                            <div className="flex justify-between">
                                <span>ประเภท:</span>
                                <div className='flex gap-2'>
                                    {Pokemon.types.map((type: any) => {
                                        return (
                                            <span 
                                                key={type.type.name} 
                                                className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-white shadow-sm"
                                                style={{ backgroundColor: typeColors[type.type.name] || '#d3d3d3' }} 
                                            >
                                                {type.type.name}
                                            </span>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <span>สกิล:</span>
                                <div className='flex gap-2'>
                                    {Pokemon.abilities.map((ability: any) => {
                                        return (
                                            <span 
                                                key={ability.ability.name} 
                                                className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-white shadow-sm"
                                                style={{ backgroundColor: abilityColors[ability.ability.name] || '#d3d3d3' }} 
                                            >
                                                {ability.ability.name}
                                            </span>
                                        )
                                    })}
                                </div>
                            </div>
                            <div>
                                <span>สถานะ</span>
                                <div className='pl-4'>
                                    {Pokemon.stats.map((stat: any) => {
                                        return (
                                            <div key={stat.stat.name} className='flex justify-between'>
                                                <span>{stat.stat.name}</span>
                                                <span>{stat.base_stat}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
