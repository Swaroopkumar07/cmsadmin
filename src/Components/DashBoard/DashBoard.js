import * as React from 'react';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import FeedbackIcon from '@mui/icons-material/Feedback';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import DashboardIcon from '@mui/icons-material/Dashboard';
import '../DashBoard/DashBoard.css';
import { useNavigate} from 'react-router-dom';
import Header from '../Header/Header'

const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
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

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
   
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const data = [
    '2020-2024', '2021-2025', '2022-2026', '2023-2027'
]

export default function DashBoard() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState("");
    const [yearWiseData, setYearWiseData] = useState(false)
    const handleClickYearWise = () => {
        setYearWiseData(!yearWiseData);
        setSelectedOption(yearWiseData)
 
    };


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div > 
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Header />   
            </div>
            <div style={{display:'flex',justifyContent: 'center',overflow:'hidden'}}>
            <Box sx={{ display: 'flex'}}>  
                <CssBaseline />
                {!open && (
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        sx={{
                            position: 'fixed',
                            left: 15,
                            top: 25,
                            zIndex: 1201,
                        }}
                    >
                        <MenuIcon style={{ fontSize: "30px",marginTop:'20px' }} />
                    </IconButton>
                )}
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader >
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List sx={{backgroundColor:'#F7F8FA', height:'100vh'}}>
                        <ListItemButton onClick={() => { setSelectedOption("Home"); navigate('/') }} >
                            <DashboardIcon className='icon_color'  style={{ color: selectedOption === "Home" ? "#1364F1" : "#797A7C" }} />
                            <p className='icon_text'  style={{ color: selectedOption === "Home" ? "#1364F1" : "#797A7C" }} >Home</p>
                        </ListItemButton>
                        <ListItemButton  onClick={()=>handleClickYearWise()}>
                            <PublishedWithChangesIcon className='icon_color'  style={{ color: selectedOption === "MarksUpdateScreen" ? "#1364F1" : "#797A7C" }}  />
                            <p className='icon_text'  style={{ color: selectedOption === "MarksUpdateScreen" ? "#1364F1" : "#797A7C" }} >Batches</p>
                            {yearWiseData ? <ExpandMore className='icon_and_text'
                            style={{ color: selectedOption === "Bookings" ? "#1364F1" : "#797A7C" }}
                        /> : <ChevronRightIcon className='icon_and_text'
                            style={{ color: selectedOption === "Bookings" ? "#1364F1" : "#797A7C" }}
                        />}
                        </ListItemButton>
                        <Collapse in={yearWiseData} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <div className='sub_content'>
                                {data.map((name, id) => (
                                    <div>
                                        <p className='icon_text' 
                                        onClick={() => {
                                            setSelectedOption(name)
                                            navigate('/StudentDataScreen')
                                        }}
                                            style={{ color: selectedOption === name ? "#1364F1" : "#797A7C" }}

                                        >{name}</p>
                                        {id !== data.length - 1 && <Divider />}
                                    </div>
                                ))}
                            </div>
                        </List>
                    </Collapse>
                        <ListItemButton onClick={() => { setSelectedOption("FeedBack"); navigate('/FeedBack') }} >
                            <FeedbackIcon className='icon_color'  style={{ color: selectedOption === "FeedBack" ? "#1364F1" : "#797A7C" }}  />
                            <p className='icon_text'  style={{ color: selectedOption === "FeedBack" ? "#1364F1" : "#797A7C" }} >Feedback</p>
                        </ListItemButton>
                    </List>
                    
                </Drawer>
                <Main open={open}>
                    <DrawerHeader />
                </Main>
            </Box>
            </div>
        
        </div>
    );
}
