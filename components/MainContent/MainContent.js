import { IconButton } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';


const MainContent = ({ handleDrawerOpen, open }) => {
    return (
        <>
            <div className='flex items-center flex-wrap justify-between mt-4 px-10'>
                <div>
                    <IconButton
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ marginRight: "5px", ...(open && { display: 'none' }) }}>
                        <MenuIcon className="text-4xl text-white" />
                    </IconButton>
                    <h2 className='text-2xl text-white font-semibold inline-block border-b-2 border-[#3772FF]'>Section</h2>
                </div>

                <div className='flex items-center justify-around bg-[#191B20] rounded-xl px-3 py-2'>
                    <span className='h-5 w-5 mr-3  text-black border-solid border  py-0 border-[#3772FF] rounded'>-</span>
                    <h5 className='text-white font-semibold'>0.2 $XYZ</h5>

                    <span className='rounded-lg px-2 ml-4 py-0 text-[#3772FF] bg-[#A3E3FF]'>Tier 1</span>

                </div>
            </div>
        </>
    );
};

export default MainContent;