import React from 'react'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import sec2 from './sec2.jpg'
import fb from './fb.png'
import twt from './twt.png'
import insta from './insta.png'
import ph from './ph.png'
import ml2 from './ml2.png'
import logo from './logo.png'

export const Login = () =>
    {
        const initialValues={username:" ",password:" "};
        const [formValues,setFormValues]=useState(initialValues);
        const [formErrors,setFormErrors]=useState({});
        const [isSubmit,setIsSubmit]=useState(false);
        const handleChange = (e) =>
            {
                const{name,value}=e.target;
                setFormValues({...formValues,[name]:value});
                console.log(formValues);
            };
            const handleSubmit = (e) =>
                {
                    e.preventDefault();
                    setFormErrors(validate(formValues));
                    setIsSubmit(true);
                };
                useEffect(() => {
                    console.log(formErrors);
                    if(Object.keys(formErrors).length ===0 && isSubmit) {
                        console.log(formValues);
                    }
                },[formErrors] );
                const validate = (values) =>
                    {
                        const errors= {};
                        
                        if(values.username===" ")
                            {
                                errors.username='Ensure that you fill in your username';
                            }
                            if(values.password===" ")
                                {
                                    errors.password='Ensure that you fill in your password';
                                }
                             else if(values.password.length < 4)
                                {
                                    errors.password='Password must not be less than 4 characters';

                                }
                                else if(values.password.length > 10)
                                    {
                                        errors.password='Password must not be exceed  more than 10 characters';
    
                                    }
                                    
                                    return errors;

                    };

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
                                formId: '61fb2247-22c9-43f1-8466-2f2cfb4ff0be',
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
                              formId: '61fb2247-22c9-43f1-8466-2f2cfb4ff0be',
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
            <div className= "bg-[#DAC0A3] w-full h-[1130px]">
            <div className="bg-[#102C57] w-[100%] h-[125px]  absolute  left-[0%] flex justify-center">
            <img src={logo} className='absolute left-[2%] w-[12%] h-[130px]'/>

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
        <section>
            <img src={sec2} className='
            w-[100%]
            h-[650px]
            absolute
            top-[17%]
            left-[0%]'></img>
            <div className='bg-[#E7E5E4]  bg-opacity-25
              w-[35%]
            h-[400px]
            absolute
            top-[30%]
            left-[32%] 
            shadow-2xl'>
                {Object.keys(formErrors).length ===0 && isSubmit ?(<div className='absolute top-[-15%] left-[27%] text-3xl text-white'>logged-in successfully</div>)
        :(
            <p> </p>
        )    
        }
                <p className='text-black
            text-5xl
            absolute
            top-[10%]
            left-[33%]
            font-mono
            font-extrabold
            animate-bounce'>Login:</p>
            
                        <Link className='underline decoration-2 text-2xl absolute top-[10%] left-[70%]' to="/Signup"><b>Signup?</b></Link>

                        <div id="hubspotForm" className='absolute top-[28%] left-[28%]'>

</div>
            </div>


        </section>
        <footer className="bg-[#102C57]
                absolute
                w-[100%]
                h-[250px]
                top-[120%]">
        <img src={fb} className="w-[6%] h-[65px] absolute
                top-[18%]
                left-[39%]" ></img>
                <img src={twt} className="w-[5%] h-[60px] absolute
                top-[20%]
                left-[45%]"></img>
                <img src={insta} className="w-[6%] h-[50px] absolute
                top-[22%]
                left-[50%]"></img>
                <img src={ph} className="w-[3%] h-[40px] absolute
                top-[56%]
                left-[35%]"></img>
                <img src={ml2} className="w-[4%] h-[55px] absolute
                top-[55%]
                left-[50%]"></img>
                <label className="absolute
                top-[55%]
                left-[38%]
                text-white">+863-768-5906</label>
                <label className="absolute
                top-[60%]
                left-[55%]
                text-white">mortagecal@gmail.com</label>



</footer>
        </div>
        );
    }