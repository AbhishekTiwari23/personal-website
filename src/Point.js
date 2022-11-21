import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
//import { loadFull } from "tsparticles"; // loads tsparticles
import { useCallback, useMemo } from "react";
import { useState } from "react";

const dark = {
  color : "#fcfcfc",
  background : "#10101a"
}
const light ={
  color: "#10101a",
  background: "#fcfcfc",
}

const ParticlesComponent = (props) => {
const [color_mode, setcolor_mode] = useState(light);

  const ToggleStyle =()=>{
    if(color_mode.background = "#10101a"){
      setcolor_mode.background  = "#10101a";
    }
    else{
      setcolor_mode = dark;
    }
  }




// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/

  // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
  const options = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      background: {
         color: "#10101a", // this sets a background color for the canvas
        //  color: "#fcfcfc",
      },
      
      fullScreen: {
        
       // enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
        zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
      },
      interactivity: {
        events: {
          onClick: {
            enable: true, // enables the click event
            mode: "push", // adds the particles on click
          },
          onHover: {
            enable: true, // enables the hover event
            mode: "repulse",
            size : {min:10}, // make the particles run away from the cursor
          },
        },
        modes: {
          push: {
            quantity: 1, // number of particles to add on click
          },
          repulse: {
            distance: 100, // distance of the particles from the cursor
          },
          
        },
        
      },
      
      particles: {
        links: {
          enable: true, // enabling this will make particles linked together
          distance: 1, // maximum distance for linking the particles
          //color:"#BD10E0" // aBJKSNSDLADADMADADAM;DMSDA;DMS;DSDSDS
          color :{
           // value:["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"] //LKAMDMADAMDMASADAS
           
          }
        },
        
        color :{
          //value:["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"] //LKAMDMADAMDMASADAS
          value:"random",
        },
        move: {
          enable: true, // enabling this will make particles move in the canvas
          speed: { min: 1, max: 3 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
        },
        opacity: {
          value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
        },
        size: {
          value: { min: 1, max: 10 }, // let's randomize the particles size a bit
        },
        number:{
          value: 100,
        },
        breakPoint:{ // still have to handle it for moble view
          number:{
            value: 30,
          }
        }
        
      },
    };
  }, []);
  
  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback((engine) => {
   loadSlim(engine);
    // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, []);

  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;