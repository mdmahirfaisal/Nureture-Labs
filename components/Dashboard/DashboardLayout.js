import * as React from 'react';
import { Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
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
import RightSideBar from '../RightSideBar/RightSideBar';
import MainContent from '../MainContent/MainContent';
import MenuIcon from '@mui/icons-material/Menu';
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';
import Section3 from '../Section3/Section3';
import Section4 from '../Section4/Section4';
import Section5 from '../Section5/Section5';
import Section6 from '../Section6/Section6';
import Section7 from '../Section7/Section7';
import Section8 from '../Section8/Section8';
import Documentation from '../Documentation/Documentation';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


const items = [
    {
        href: 'home',
        icon: (<AppsIcon fontSize="small" />),
        title: 'Home'
    },
    {
        href: 'section1',
        icon: (<GraphicEqIcon fontSize="small" />),
        title: 'Section 1'
    },
    {
        href: 'section2',
        icon: (<ArticleIcon fontSize="small" />),
        title: 'Section 2'
    },
    {
        href: 'section3',
        icon: (<AttachFileIcon fontSize="small" />),
        title: 'Section 3'
    },
    {
        href: 'section4',
        icon: (<BentoIcon fontSize="small" />),
        title: 'Section 4'
    },
    {
        href: 'section5',
        icon: (<BrightnessHighIcon fontSize="small" />),
        title: 'Section 5'
    },
    {
        href: 'section6',
        icon: (<ChromeReaderModeIcon fontSize="small" />),
        title: 'Section 6'
    },
    {
        href: 'section7',
        icon: (<BakeryDiningIcon fontSize="small" />),
        title: 'Section 7'
    },
    {
        href: 'section8',
        icon: (<ShareIcon fontSize="small" />),
        title: 'Section 8'
    },
    {
        href: 'documentation',
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
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    ///// Sidebar content///// 
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

                        <h5 className='bg-[#3772FF] text-[#3772FF] py-5'>.</h5>

                        {/* close icon */}
                        <div className="px-8 flex items-center justify-between mt-5 mb-5">
                            <h3 className='text-white font-semibold'> <span className='rounded-full text-1xl bg-[#3772FF] px-2 py-1 mr-2'>N</span><span className='text-2xl'>Name</span> </h3>
                            <IconButton onClick={handleDrawerClose}
                                sx={{ mr: 2, ...(!open && { display: 'none' }) }}
                                className="fs-2">
                                {theme.direction === 'ltr' ? <KeyboardBackspaceIcon fontSize='large' className="text-white mt-1" /> : <KeyboardBackspaceIcon fontSize='large' className=" mt-1" />}
                            </IconButton>
                        </div>
                        {content}
                    </Drawer>
                </div>

                <Main open={open} className="bg-black min-h-screen">
                    <AppBar position="sticky" sx={{ backgroundColor: '#3772FF' }}>
                        <Toolbar>
                            <IconButton
                                onClick={handleDrawerOpen}
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2, ...(open && { display: 'none' }) }}
                            >
                                <MenuIcon fontSize='large' className=" text-white " />
                            </IconButton>
                            <p className='text-center w-full text-xl font-semibold'>Lorem Ipsum is simply dummy text of the printing</p>
                        </Toolbar>
                    </AppBar>

                    <div >
                        {
                            panel === "home" ?
                                <div className='grid grid-cols-12'>
                                    <div className="col-span-8 pt-5">
                                        <MainContent handleDrawerOpen={handleDrawerOpen} open={open} />
                                    </div>

                                    {/* Right Side bar  */}
                                    <div className="col-span-4 border-l border-gray-500 min-h-screen">
                                        <RightSideBar />
                                    </div>
                                </div>
                                : panel === "section1" ? <Section1 />
                                    : panel === "section2" ? <Section2 />
                                        : panel === "section3" ? <Section3 />
                                            : panel === "section4" ? <Section4 />
                                                : panel === "section5" ? <Section5 />
                                                    : panel === "section6" ? <Section6 />
                                                        : panel === "section7" ? <Section7 />
                                                            : panel === "section8" ? <Section8 />
                                                                : panel === "documentation" ? <Documentation />
                                                                    :
                                                                    <div className='grid grid-cols-12'>
                                                                        <div className="col-span-8 pt-5">
                                                                            <MainContent handleDrawerOpen={handleDrawerOpen} open={open} />
                                                                        </div>

                                                                        {/* Right Side bar  */}
                                                                        <div className="col-span-4 border-l border-gray-500 min-h-screen">
                                                                            <RightSideBar />
                                                                        </div>
                                                                    </div>
                        }

                    </div>
                </Main>
            </Box>
        </div>
    );
};

export default DashboardLayout;
