import React from 'react'

export default function AboutMe() {
    return (
        <div style={{ width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '50%' }}>
                    <img src="https://scontent.futh1-1.fna.fbcdn.net/v/t39.30808-1/432056983_1509837126251770_584241637349612170_n.jpg?stp=dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGl_0V2WJOk-6Nu4B0lI8u4tk167eUfYma2TXrt5R9iZlPRvyurTGEtfhM3H3whXOIS5Ob7KWFVdjr-tAX2kyHZ&_nc_ohc=P5Q93Z4Ugt0Q7kNvgH5S3j6&_nc_ht=scontent.futh1-1.fna&oh=00_AYA9BVuq8vWKBbM5EpLOEuCPkxrwaUbhKEXSYAXkbL-lbA&oe=66DA5E53" alt="" style={{ width: '512px', height: 'auto', borderRadius: '50%' }} />
                </div>
            </div>

            <div style={{ width: '50%' }}>
                <div className='info' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
                    <h1>Metagorn Singkhan</h1>
                    <p>Student ID: 653450100-9</p>
                    <p>Email: metagorn.s@kkumail.com</p>
                    <p>Major: CIS</p>
                </div>
            </div>
        </div>

    );
}
