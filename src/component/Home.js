import React from 'react'
import { Link } from 'react-router-dom'
import section2 from './section2.jpg'
import file from './file.png'
import file3 from './file3.png'
import file4 from './file4.png'
import fb from './fb.png'
import twt from './twt.png'
import insta from './insta.png'
import ph from './ph.png'
import ml2 from './ml2.png'
import logo from './logo.png'



export const Home = () =>
{
    return(
        <>
<div className= "bg-[#DAC0A3] w-full h-[1400px]">
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
<div>
<img src={section2} className="w-[100%] h-[500px] absolute top-[17%] hover:blur-sm"></img>
<div className="text-black text-5xl absolute top-[40%] left-[25%] font-extrabold">Your home ownership journey begins</div>
<p className="text-black text-5xl absolute top-[50%] left-[33%] font-extrabold">with the right calculation</p>
</div>
<section className=" w-[25%]
    h-[350px]
    bg-[#113946]
    absolute
    top-[100%]
    left-[5%]
    shadow-2xl">
         <img src={file} className=" w-[40%]
    h-[120px]
    absolute
    top-[5%]
    left-[30%]">
        </img>
        <p className="font-mono
    text-3xl
    text-white
    absolute
    top-[40%]
    left-[11%]">
            <b>Make It Your Dream</b>
            </p>
            <p className="absolute
    top-[60%]
    left-[5%]
    font-mono
    text-white
    ">
               <b> With every mortgage payment, you're not just paying down debt; you're investing in a place to call your own
            </b>    
            </p>

</section>
<section className=" w-[25%]
    h-[350px]
    bg-[#113946]
    absolute
    top-[100%]
    left-[38%]
    shadow-2xl">
         <img src={file3} className=" w-[40%]
    h-[120px]
    absolute
    top-[5%]
    left-[30%]">
        </img>
        <p className="font-mono
    text-3xl
    text-white
    absolute
    top-[40%]
    left-[20%]">
            <b>Create A Place</b>
            </p>
            <p className="absolute
    top-[60%]
    left-[5%]
    font-mono
    text-white
    ">
               <b> A mortgage transforms a house into a home, turning four walls into a place of warmth and love.
            </b>    
            </p>

</section>
<section className=" w-[25%]
    h-[350px]
    bg-[#113946]
    absolute
    top-[100%]
    left-[70%]
    shadow-2xl">
         <img src={file4} className=" w-[40%]
    h-[120px]
    absolute
    top-[5%]
    left-[30%]">
        </img>
        <p className="font-mono
    text-3xl
    text-white
    absolute
    top-[40%]
    left-[5%]">
            <b>Join To Local Affairs</b>
            </p>
            <p className="absolute
    top-[60%]
    left-[5%]
    font-mono
    text-white
    ">
               <b>The beauty of a mortgage is that it's a step-by-step journey towards full ownership and independence.
            </b>    
            </p>

</section>
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
