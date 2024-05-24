import React from 'react'
import {useEffect} from "react";
import { Link } from 'react-router-dom'

export const Forms = () =>
    
    {
        useEffect(() => {
    
            const existingScript = document.querySelector(`script[src="//js.hsforms.net/forms/embed/v2.js"]`);
        
            if (!existingScript) {
              const script = document.createElement('script');
              script.src = '//js.hsforms.net/forms/embed/v2.js';
              script.type = 'text/javascript';
              script.charset = 'utf-8';
              script.async = true;
        
              script.onload = () => {
                if (window.hbspt) {
                  window.hbspt.forms.create({
                    region: 'na1',
                    portalId: '46242532',
                    formId: 'c6b863da-35d3-418d-8afb-fbc12ddb84a7',
                    target: '#hubspotForm'
                  });
                }
              };
        
              document.body.appendChild(script);
            } else {
              // Script already exists, just create the form
              if (window.hbspt) {
                window.hbspt.forms.create({
                  region: 'na1',
                  portalId: '46242532',
                  formId: 'c6b863da-35d3-418d-8afb-fbc12ddb84a7',
                  target: '#hubspotForm'
                });
              }
            }
        
            // Cleanup function
            return () => {
              const formContainer = document.querySelector('#hubspotForm');
              if (formContainer) {
                formContainer.innerHTML = '';
              }
            };
          }, []);
        
        return(
            <>
            <div className= "bg-[#DAC0A3] w-full h-[1400px]">
    <div className="bg-[#102C57] w-[100%] h-[125px]  absolute  left-[0%] flex justify-center">
<Link className="font-mono
 text-white 
 font-extrabold
  text-3xl 
  absolute 
  top-[40px] 
  left-[45%]
  hover:underline"
    to="/" >Home</Link>
    <Link className="font-mono text-white font-extrabold text-3xl absolute top-[40px] left-[56%] hover:underline" to="/About" >About Us</Link>
<Link className="font-mono text-white font-extrabold text-3xl absolute top-[40px] left-[72%] hover:underline" to="/Login" >Login</Link>
<Link className="font-mono text-white font-extrabold text-3xl absolute top-[40px] left-[85%] hover:underline" to="/Calculate" >Calculate</Link>
</div>
<div id="hubspotForm" className='absolute top-[30%] left-[38%]'>
    </div>
</div>
        </>
        );
    }