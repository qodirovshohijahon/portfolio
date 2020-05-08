import React, { Component } from 'react'
import Navbar from "./Navbar";
import Header from "./Header";
import Pacticles from "react-particles-js";
import Particles from 'react-particles-js';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    particlesCanvas: {
        position: "absolute"
    }
});


const Home = () => {
    return (
        <>
        <Navbar />
        <Header />
        <Particles 
            params={{
                particles: {
                    number: {
                        value: 45,
                        density: {
                            enable: true,
                            value_area: 900
                        }
                    },
                    shape: {
                        type: "circle",
                        strole: {
                            width: 1,
                            color: "tomato"
                        }
                    },
                    size: {
                        value: 8,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 10,
                            size_min: 0.1,
                            sync: true
                        }
                    }
                }
            }}
        
        />
        </>
    )
}

export default Home;
