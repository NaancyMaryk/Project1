import React from 'react'
import { Link } from 'react-router-dom'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img6 from './img6.avif'
import img7 from './img7.webp'
import fb from './fb.png'
import twt from './twt.png'
import insta from './insta.png'
import ph from './ph.png'
import ml2 from './ml2.png'
import logo from './logo.png'
import imgg from './imgg.jpeg'


export const About = () =>
    {
        return(
            <>
            <div className= "bg-[#DAC0A3] w-full h-[1400px]">
                <div className="bg-[#102C57] w-[100%] h-[125px]  absolute  left-[0%] flex justify-center">
                <img src={logo} className='absolute left-[2%] w-[10%] h-[130px]'/>

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
            <section >
                <img src={img6} className='w-full h-[650px] absolute top-[17%] opacity-70'></img>
            <img src={img2} className='w-[60%] h-[650px] absolute top-[17%] left-[60%]' ></img>
            <div className='bg-[#1E3A8A] opacity-70 w-[25%] h-[350px] absolute top-[35%] left-[40%]'></div>
            <img src={imgg} className=' w-[30%] h-[350px] absolute top-[45%] left-[30%]'></img>
            <p className='text-6xl  text-[#4C0519] absolute top-[45%] left-[5%]  underline underline-offset-8'><b>Making </b></p>
                <p className='text-6xl text-[#4C0519] absolute top-[58%] left-[5%] underline underline-offset-8 '><b>Mortgage</b></p>
                    <p className='text-6xl text-[#4C0519] absolute top-[70%] left-[1%] underline underline-offset-8 '><b> math a breeze!</b></p>

            </section>
            <img src={img7} className=' rounded-2xl w-[27%] h-[250px] absolute top-[115%] left-[3%] opacity-70 transition-opacity duration-500 ease-in-out  
                       hover:opacity-75 transform  
                       hover:-translate-y-1 hover:scale-110 '></img>
            <p className='text-white w-[24%] h-[250px] absolute top-[121%] left-[5%] text-1xl'>Mortgage Mastery was founded by a team of real estate and finance professionals who recognized the need for a comprehensive, easy-to-use platform for mortgage calculations and information. Our diverse backgrounds in banking, technology, and customer service equip us to deliver innovative solutions tailored to your needs.</p>
            <img src={img7} className=' rounded-2xl w-[27%] h-[250px] absolute top-[115%] left-[37%] opacity-70 transition-opacity duration-500 ease-in-out  
                       hover:opacity-75 transform  
                       hover:-translate-y-1 hover:scale-110 '></img>
            <p className='text-white w-[24%] h-[250px] absolute top-[123%] left-[39%] text-1xl'>Advanced Mortgage Calculators: Our suite of calculators includes basic mortgage payments, affordability, refinancing, and amortization schedules, all designed to give you a clear picture of your financial commitments.</p>
            <img src={img7} className=' rounded-2xl w-[27%] h-[250px] absolute top-[115%] left-[70%] opacity-70 transition-opacity duration-500 ease-in-out  
                       hover:opacity-75 transform  
                       hover:-translate-y-1 hover:scale-110 '></img>
            <p className='text-white w-[24%] h-[250px] absolute top-[118%] left-[72%] text-1xl'>At Mortgage Mastery, we are committed to transparency, accuracy, and customer empowerment. We believe that everyone deserves access to reliable financial tools and information, which is why we continually strive to enhance our platform and expand our offerings. Your journey to homeownership is our priority, and we are here to support you every step of the way.</p>
            <footer className="bg-[#102C57]
                absolute
                w-[100%]
                h-[250px]
                top-[165%]">
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