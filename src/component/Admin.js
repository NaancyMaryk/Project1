import { Link } from 'react-router-dom'
import React from 'react'
import download from './download.jpg'
import logo from './logo.png'
import {useState} from 'react'
import fb from './fb.png'
import twt from './twt.png'
import insta from './insta.png'
import ph from './ph.png'
import ml2 from './ml2.png'


export const Admin= () =>
    {
        const initialValues={adminname:" ",apassword:" "};
        const [formValues,setFormValues]=useState(initialValues);
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
                    validate(formValues);
                    setIsSubmit(true);
                };
               
                

                const validate = (values) =>
                    {
                        
                        if(values.adminname==="Naancy"&&values.apassword==="1810")
                            {
                                window.location.href="http://localhost:63734/Algo"
                            }
                            else
                            {
                                alert('invalid Admin Name!!');
                            }
                           

                    };



        return(
            <>
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
            <img src={download} className='
            w-[100%]
            h-[650px]
            absolute
            top-[17%]
            left-[0%]'></img>
            <div className='bg-[#0f0f0e]  bg-opacity-25
              w-[35%]
            h-[300px]
            absolute
            top-[25%]
            left-[34%] 
            shadow-2xl'>
                 <p className='text-black
            text-4xl
            absolute
            top-[10%]
            left-[25%]
            font-mono
            font-extrabold
            animate-bounce'>Admin's Login:</p>
                <form onSubmit={handleSubmit}>
                    <label className='text-black absolute top-[35%] 
            left-[5%] text-3xl'><b>Admin Name:</b></label>
                    <input type='text' className='absolute top-[37%] left-[45%] text-black  w-[45%] bg-transparent border-b-2 border-black' name='adminname' onChange={handleChange}/>
                    <label className='text-black absolute top-[55%] 
            left-[15%] text-3xl'><b>Password:</b></label>
        <input type='password' className='absolute top-[56%] left-[45%] text-black  w-[45%] bg-transparent border-b-2 border-black' name='apassword' onChange={handleChange}/>
        <button type="submit" className='bg-[#102C57] text-white w-[20%] absolute top-[80%] left-[42%] rounded-xl h-[15%]'>Submit</button>

                </form>
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
            </>
            );
            }
         