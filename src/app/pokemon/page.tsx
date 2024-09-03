import Card from '@/components/Card';
import React from 'react';
import Link from 'next/link';
import { Box, Button, Grid, Container } from '@mui/material';

export const metadata = {
    title: 'Pokédex',
    description: 'List of Pokemons'
};

export interface resPokemons {
    name: string;
    url: string;
}

export default async function page() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
    const json = await res.json();
    const pokemons: resPokemons[] = json.results;

    return (
        <Container 
            maxWidth="lg" 
            sx={{ 
                backgroundColor: '#e8f5e9', 
                minHeight: '100vh', 
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
        >
            <Box mb={4}>
                <Button 
                    variant="contained" 
                    href="../" 
                    sx={{
                        backgroundColor: '#4caf50', 
                        color: '#fff', 
                        borderRadius: '20px',
                        '&:hover': {
                            backgroundColor: '#388e3c',
                        },
                        mb: 4
                    }}
                >
                    ย้อนกลับ
                </Button>
            </Box>
            <Grid 
                container 
                spacing={3} 
                sx={{
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
                    gap: '20px'
                }}
            >
                {pokemons.map((pokemon) => {
                    return (
                        <Grid item key={pokemon.name}>
                            <Card name={pokemon.name} url={pokemon.url} />
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    );
}