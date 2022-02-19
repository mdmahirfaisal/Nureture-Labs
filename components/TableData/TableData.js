import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FirstTabData from '../FirstTabData/FirstTabData';
import SecondTabData from '../SecondTabData/SecondTabData';

export default function TableData() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className=" text-white">
      <TabContext value={value}>
        <Box >
          <TabList onChange={handleChange} >
            <Tab className="font-semibold" sx={{ fontSize: "18px", color: '#808191' }} label="First Tab" value="1" />
            <Tab className="font-semibold" sx={{ fontSize: "18px", color: '#808191' }} label="Second Tab" value="2" />
          </TabList>
        </Box>

        <div className='bg-[#191B20] rounded-lg py-3 grid grid-cols-4 mt-8'>
          <p className='text-[#808191] text-sm text-center'>ASSET</p>

          <p className='text-[#808191] text-sm text-center'>AMOUNT</p>

          <p className='text-[#808191] text-sm text-center'>USER ACCOUNT</p>

          <p className='text-[#808191] text-sm text-center'>REFERRAL EARNING</p>
        </div>

        <TabPanel className='pt-2 px-1' value="1">
          <FirstTabData />
        </TabPanel>

        <TabPanel className='pt-2 px-1' value="2">
          <SecondTabData />
        </TabPanel>

      </TabContext>
    </Box>
  );
}