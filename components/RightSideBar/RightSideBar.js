import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const RightSideBar = () => {

    const [avalanche, setAvalanche] = React.useState('');
    const [customLink, setCustomLink] = React.useState('');
    console.log(avalanche, customLink)


    return (
        <>
            <div className='flex items-center flex-wrap justify-evenly mt-6'>
                <div className="flex items-center text-white px-3 bg-[#353945] rounded-xl">

                    <img src="https://raw.githubusercontent.com/akshita151199/APIs/main/avax.png" alt="Avax" className='object-fill h-5 w-7 mr-2' />

                    <select className="form-select appearance-none block w-full py-2 text-lg font-normal text-white bg-[#353945]  ease-in-out m-0  focus:outline-none" onChange={e => setAvalanche(e.target.value)}>
                        <option selected>Avalanche  </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <KeyboardArrowDownIcon className='text-white mt-2' />
                </div>


                <div className="flex items-center text-white px-3 outline outline-offset-1 outline-1 outline-[#3772FF] rounded-xl">

                    <span className='h-5 w-10 ml-1 mr-3 bg-black text-black border-solid border  py-0 border-[#3772FF] rounded'>-</span>

                    <select className="form-select appearance-none block w-full py-1 text-lg font-normal text-white bg-black  ease-in-out m-0  focus:outline-none" onChange={e => setAvalanche(e.target.value)}>
                        <option selected>0xf6...1353  </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <KeyboardArrowDownIcon className='text-white mt-2' />
                </div>
            </div>
            <h5 className='text-white mt-8 text-2xl' style={{ marginLeft: '10%' }}><ArrowBackIcon className='mr-2' />  Custom link</h5>
            <h5 className='mt-8 text-white ' style={{ marginLeft: '10%' }}>https://testnet.xyz.xyz/trade?ref=</h5>

            <input onChange={e => setCustomLink(e.target.value)} type="text" placeholder='Enter' className='h-10 px-3 text-[#808191] rounded-lg mt-2 bg-[#242731]' style={{ marginLeft: '10%', width: '80%' }} />

            <div className='flex items-center flex-wrap justify-evenly mt-6'>
                <button className='rounded-lg text-white bg-[#3772FF] font-semibold px-4 py-1'><ExitToAppIcon className='mr-1' /> Custom link</button>
                <button className='rounded-lg text-white bg-black outline outline-offset-1 outline-2 outline-[#242731] rounded-xl font-semibold px-4 py-1'><ExitToAppIcon className='mr-2' /> Cancel</button>
            </div>
        </>
    );
};

export default RightSideBar;