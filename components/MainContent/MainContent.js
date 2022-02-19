import { IconButton } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AlbumIcon from '@mui/icons-material/Album';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';



const MainContent = ({ handleDrawerOpen, open }) => {
    return (
        <>
            <div className='flex items-center flex-wrap justify-between mt-4 mx-10'>
                <div>
                    <IconButton
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ marginRight: "5px", ...(open && { display: 'none' }) }}>
                        <MenuIcon className="text-4xl text-white" />
                    </IconButton>
                    <h2 className='text-2xl text-white font-semibold inline-block border-b-4 border-[#3772FF]'>Section</h2>
                </div>

                <div className='flex items-center justify-around bg-[#191B20] rounded-xl px-3 py-2'>
                    <span className='h-5 w-5 mr-3  text-black border-solid border  py-0 border-[#3772FF] rounded'>-</span>
                    <h5 className='text-white font-semibold'>0.2 $XYZ</h5>

                    <span className='rounded-lg px-2 ml-4 py-0 text-[#3772FF] bg-[#A3E3FF]'>Tier 1</span>
                </div>
            </div>


            <div>
                <CancelIcon className='text-white float-right mr-5' style={{ marginTop: '-9px', marginLeft: '-10px' }} />
                <div className='bg-[#ABE8FF] mx-10 px-5 flex justify-around mt-6 rounded-lg pt-4 pb-1' style={{ marginRight: '-10px' }}>
                    <div>
                        <p className='text-[#2B2557] font-medium text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <p className='text-[#2B2557] bg-white w-20 text-center py-0 rounded-lg text-sm font-medium mt-2 mb-2'>Tutorial</p>
                    </div>

                    <img src="https://i.ibb.co/KrPcNgx/bit-Coin-removebg-preview.png" alt="BitCoin" style={{ marginBottom: '-13px' }} />
                </div>
            </div>


            <div className="flex items-center justify-between mt-7 mx-10 bg-[#191B20] rounded-2xl px-5 py-8">
                <div>
                    <h5 className='text-white text-2xl '>Your rewards</h5>
                    <h1 className='text-white text-4xl font-semibold mt-3'>$ 0.26231428</h1>
                    <div className='flex justify-evenly mt-5'>
                        <p className='text-white text-sm font-semibold inline bg-[#353945] rounded-full px-3 py-1 mx-1'>$40 AVAX</p>
                        <p className='text-white text-sm font-semibold inline bg-[#353945] rounded-full px-3 py-1 mx-1'>$40 AVAX</p>
                        <p className='text-white text-sm font-semibold inline bg-[#353945] rounded-full px-3 py-1 mx-1'>$40 AVAX</p>
                    </div>
                </div>

                <button className='rounded-lg text-white bg-[#3772FF] font-semibold px-4 py-1 mr-6'><ExitToAppIcon className='mr-1' /> Custom link</button>
            </div>


            <div className="grid grid-cols-12 gap-7 mt-7 mx-10">
                <div className="col-span-12 md:col-span-6">
                    <div className="bg-[#191B20] px-5 py-7 rounded-2xl">
                        <div className="flex items-center">
                            <h5 className='bg-[#9C92DF] text-white rounded-full inline-block w-7 h-7 text-center mr-2'>
                                <AlbumIcon className='text-white mt-' fontSize='small' />
                            </h5>
                            <h3 className='text-white text-2xl'> <span className='font-bold'>12.5%</span>  of fee</h3>
                        </div>
                        <h3 className='text-[#808191] font-medium mt-3' style={{ fontSize: '16px' }} >Your Referral Link for xyz</h3>

                        <div className='flex items-center justify-between px-4 py-4 bg-[#242731] rounded-xl mt-3'>
                            <p className='text-white font-semibold'>https://unityexchange.design  </p>
                            <ContentCopyIcon className='text-white font-semibold mr-3' />
                        </div>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-6">
                    <div className="bg-[#191B20] px-5 py-7 rounded-2xl">
                        <div className="flex items-center">
                            <h5 className='bg-[#9C92DF] text-white rounded-full inline-block w-7 h-7 text-center mr-2'>
                                <AlbumIcon className='text-white mt-' fontSize='small' />
                            </h5>
                            <h3 className='text-white text-2xl'> <span className='font-bold'>12.5%</span>  of fee</h3>
                        </div>
                        <h3 className='text-[#808191] font-medium mt-3' style={{ fontSize: '16px' }} >Your Referral Link for xyz</h3>

                        <div className='flex items-center justify-between px-4 py-4 bg-[#242731] rounded-xl mt-3'>
                            <p className='text-white font-semibold'>https://unityexchange.design  </p>
                            <ContentCopyIcon className='text-white font-semibold mr-3' />
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
};

export default MainContent;