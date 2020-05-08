import React from 'react'
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../avatar.png";
import Typed from "react-typed";
import { Height } from '@material-ui/icons';
import {makeStyles} from "@material-ui/core/styles";
//import { withStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme=> ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "tomato"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedComtainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}));

const Header = () => {
    const classes = useStyles();
    
    return (
        <Box className={classes.typedComtainer}>
            <Grid container justify="center">
                <Avatar 
                    className={classes.avatar}
                    src={avatar}
                    alt="Russel Crowe"
                />
            </Grid>
            <Typography 
                variant="h4"
                className={classes.title}
            >
                <Typed  
                    strings={["Russel Crowe"]} 
                    typedSpeed={40}
                />
            </Typography>
            <br />
            <Typography 
                variant="h5"
                className={classes.subtitle}    
            >
                <Typed 
                    strings={["Web Design", "Web development", "MERN Stack"]}
                    typedSpeed={40}
                    backSpeed={60}
                    loop
                />

            </Typography>
        </Box>
    )
}

export default Header
