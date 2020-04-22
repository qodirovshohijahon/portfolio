import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from "@material-ui/core/Drawer";

import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    ListItemIcon,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core";
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";
import avatar from "../avatar.png";

const useStyles = makeStyles(theme=>({
    menuSliderConatainer: {
        width: 250,
        background: '#511',
        height: "100%",
    },
    avatar: {
        display: 'block',
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
    listItem: {
        color: "tan",
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contact"
    }
];


const Navbar = () => {

    const [state, setState] = useState({
        right: false
    });
    const toggleSlider = (slider, open) =>  {
        setState({ ...state, [slider]: open });
    };
 
    const classes = useStyles();

    const sideList = slider => (
    <Box component="div" className={classes.menuSliderConatainer}>
        <Avatar className={classes.avatar} src={avatar} alt="Russel Crowe" />
            <Divider />
                <List>
                    {menuItems.map((lsItem, key) => (
                        <ListItem  key={key}>  
                                <ListItemIcon className={classes.listItem}>
                                    {lsItem.listIcon}
                                </ListItemIcon>
                                <ListItemText 
                                    className={classes.listItem}
                                    primary={lsItem.listText}
                                />
                        </ListItem>
                    ))}
                </List>
    </Box>
    );

    return (
        <>
       
        <Box component="nav">
            <AppBar position="static" style={{background: "#222"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                        <ArrowBack style={{color: "tomato" }}/>    
                    </IconButton>    
                    <Typography variant="h5" style={{color: "tan"}}>
                        Portfolio
                    </Typography>
                    <MobilRightMenuSlider
                        anchor="right"
                        open={state.right}
                        onClose={toggleSlider("right", false)}
                     >
                    {sideList("right")}
                    </MobilRightMenuSlider>
                </Toolbar>

            </AppBar>      
        </Box>
        </>
    )
}

export default Navbar;
