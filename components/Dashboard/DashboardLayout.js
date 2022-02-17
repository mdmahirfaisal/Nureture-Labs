import * as React from 'react';
import { Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { SideBarItem } from '../SideBarItem/SideBarItem';
import AppsIcon from '@mui/icons-material/Apps';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import ArticleIcon from '@mui/icons-material/Article';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import BentoIcon from '@mui/icons-material/Bento';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import SubjectIcon from '@mui/icons-material/Subject';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import ShareIcon from '@mui/icons-material/Share';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness1Icon from '@mui/icons-material/Brightness1';

const items = [
    {
        href: '/dashboard',
        icon: (<AppsIcon fontSize="small" />),
        title: 'Home'
    },
    {
        href: '/dashboard',
        icon: (<GraphicEqIcon fontSize="small" />),
        title: 'Section 1'
    },
    {
        href: '/dashboard',
        icon: (<ArticleIcon fontSize="small" />),
        title: 'Section 2'
    },
    {
        href: '/dashboard',
        icon: (<AttachFileIcon fontSize="small" />),
        title: 'Section 3'
    },
    {
        href: '/dashboard',
        icon: (<BentoIcon fontSize="small" />),
        title: 'Section 4'
    },
    {
        href: '/dashboard',
        icon: (<BrightnessHighIcon fontSize="small" />),
        title: 'Section 5'
    },
    {
        href: '/dashboard',
        icon: (<ChromeReaderModeIcon fontSize="small" />),
        title: 'Section 6'
    },
    {
        href: '/dashboard',
        icon: (<BakeryDiningIcon fontSize="small" />),
        title: 'Section 7'
    },
    {
        href: '/dashboard',
        icon: (<ShareIcon fontSize="small" />),
        title: 'Section 8'
    },
    {
        href: '/dashboard',
        icon: (<SubjectIcon fontSize="small" />),
        title: 'Documentation'
    },
];
// drawer style //////////////////////////

const drawerWidth = 250;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const DashboardLayout = () => {
    const [panel, setPanel] = React.useState("")
    console.log(panel)

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    ///// Side bar content///// 

    const content = (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', color: 'white', }} >
                <Box sx={{ flexGrow: 1 }}>
                    {items.map((item) => (
                        <SideBarItem
                            key={item.title}
                            icon={item.icon}
                            href={item.href}
                            title={item.title}
                            setPanel={setPanel}
                        />
                    ))}
                </Box>
                <div className='flex items-center justify-center mb-5'>
                    <h3 className='bg-[#353945] rounded-full px-3 py-1 font-semibold'> <span className='rounded-full px-1 bg-[#3772FF]  mr-1'>N</span><span className=''>$0.90</span> </h3>
                    <h3 className='bg-[#A3E3FF] rounded-full px-3 py-1 font-semibold text-[#3772FF] ml-2'>Buy $XYZ</h3>

                </div>
                <div className='flex items-center mb-6 ml-5'>
                    <LanguageIcon className='text-[#808191] text-3xl' />
                    <div className='bg-[#353945] rounded-full ml-2 px-2'><DarkModeIcon className='text-[#808191] text-2xl' /> <Brightness1Icon className='text-[#3772FF] text-3xl' /></div>
                </div>
            </Box>
        </>
    );

    return (
        <div className="bg-black">
            <Box className='flex'>
                <div className="border-r border-gray-500">
                    <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box',
                                backgroundColor: '#000000',
                            },
                        }} variant="persistent" anchor="left" open={open}>

                        <h5 className='bg-[#3772FF] text-[#3772FF] text-4xl'>b</h5>

                        {/* close icon */}
                        <div className="px-8 flex items-center justify-between mt-6 mb-5">
                            <h3 className='text-white font-semibold'> <span className='rounded-full text-1xl bg-[#3772FF] px-2 py-1 mr-2'>N</span><span className='text-2xl'>Name</span> </h3>
                            <IconButton onClick={handleDrawerClose}
                                sx={{ mr: 2, ...(!open && { display: 'none' }) }}
                                className="fs-2">
                                {theme.direction === 'ltr' ? <KeyboardBackspaceIcon className="text-4xl text-white mt-1" /> : <KeyboardBackspaceIcon className="text-4xl mt-1" />}
                            </IconButton>
                        </div>
                        {content}
                    </Drawer>
                </div>

                {/* Dashboard main */}
                <Main open={open} className="bg-black min-h-screen">
                    <div className='grid grid-cols-12'>
                        <div className="col-span-7 pt-5">
                            <IconButton
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{ marginX: "15px", width: "6%", ...(open && { display: 'none' }) }}>
                                <MenuIcon className="text-4xl text-white" />
                            </IconButton>
                            <h2 className={`${open && "ml-8"} ${'text-3xl text-white inline-block border-b-2 border-[#3772FF]'}`}>Section</h2>
                        </div>
                        <div className="col-span-5 border-l border-gray-500 min-h-screen">

                        </div>
                    </div>
                </Main>
            </Box>
        </div>
    );
};

export default DashboardLayout;
