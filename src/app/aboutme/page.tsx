import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Container, Box, Typography, Button, Avatar, Paper } from '@mui/material';

export const metadata = {
    title: 'About Me',
    description: 'About me'
};

export default function AboutMe() {
    return (
        <Container 
            maxWidth="md" 
            sx={{ 
                backgroundColor: '#e0f2f1',
                minHeight: '100vh', 
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Box my={4} sx={{ textAlign: 'center' }}>
                <Button 
                    variant="contained" 
                    href="../" 
                    sx={{
                        backgroundColor: '#4caf50',
                        color: '#fff', 
                        '&:hover': {
                            backgroundColor: '#388e3c',
                        },
                        mb: 4,
                        borderRadius: '20px',
                    }}
                >
                    ย้อนกลับ
                </Button>
                <Paper 
                    elevation={3} 
                    sx={{ 
                        p: 3, 
                        textAlign: 'center', 
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Avatar
                        alt="Metagorn Singkhan"
                        src="https://scontent.futh1-1.fna.fbcdn.net/v/t39.30808-1/432056983_1509837126251770_584241637349612170_n.jpg?stp=dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGl_0V2WJOk-6Nu4B0lI8u4tk167eUfYma2TXrt5R9iZlPRvyurTGEtfhM3H3whXOIS5Ob7KWFVdjr-tAX2kyHZ&_nc_ohc=P5Q93Z4Ugt0Q7kNvgH5S3j6&_nc_ht=scontent.futh1-1.fna&oh=00_AYA9BVuq8vWKBbM5EpLOEuCPkxrwaUbhKEXSYAXkbL-lbA&oe=66DA5E53"
                        sx={{ 
                            width: 128, 
                            height: 128, 
                            mx: 'auto', 
                            mb: 2, 
                            border: '4px solid #4caf50',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                    <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#2c6e49', fontFamily: 'Verdana, sans-serif' }}>
                        Metagorn Singkhan
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{ color: '#2c6e49', fontFamily: 'Verdana, sans-serif' }}>
                        Student ID: 653450100-9
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{ color: '#2c6e49', fontFamily: 'Verdana, sans-serif' }}>
                        Email: metagorn.s@kkumail.com
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{ color: '#2c6e49', fontFamily: 'Verdana, sans-serif' }}>
                        Major: CIS
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
}



