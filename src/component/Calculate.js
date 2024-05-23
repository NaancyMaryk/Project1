import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import section4 from './section4.webp'
import fb from './fb.png'
import twt from './twt.png'
import insta from './insta.png'
import ph from './ph.png'
import ml2 from './ml2.png'
import logo from './logo.png'

export const Calculate = () =>
    {
        const [amt,setAmt]=useState();
        const [interest,setInterest]=useState();
        const [year,setYear]=useState();
        const [pay,setPay]=useState();

        const handleChange1 = (e) =>
            {
                setAmt(e.target.value);
            };
            const handleChange2  = (e) =>
                {
                    setInterest(e.target.value);
                };
                const handleChange3  = (e) =>
                    {
                        setYear(e.target.value);
                    };
               
                    const handleSubmit = (e) =>
                        {
                            e.preventDefault();

                            
                            const principal = parseFloat(amt);
    const InterestRate = parseFloat(interest) / 100 / 12;
    const months= parseFloat(year) * 12;

    // monthly payment cals
    const x = Math.pow(1 + InterestRate, months);
    const monthlyPay = (principal * x * InterestRate) / (x - 1);
    //checking purpose
    console.log(InterestRate);
    console.log(months);
    console.log(x);
    console.log(monthlyPay);
 if (isFinite(monthlyPay)) {
      setPay(monthlyPay.toFixed(2));
    } else {
      setPay(null);
    }
    }
        return(
            <div className= "bg-[#DAC0A3] w-full h-[1130px]">
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
        <div>
        <img src={section4} className="w-[100%] h-[650px] absolute top-[17%] "></img>
        <div className='bg-[#9a908b]  bg-opacity-45
              w-full
            h-[650px]
            absolute
            top-[17%]
            left-[0%] 
            shadow-2xl'>
           <section className='w-[45%]
            h-[520px]
            bg-[#F1D6AB]
            absolute
            top-[10%]
            left-[27%]
            shadow-inner
            rounded-[4%]'>
                <form  onSubmit={handleSubmit}>
                    <label className='text-black absolute top-[15%] 
            left-[20%] text-3xl'><b>Loan Amount:</b></label>
          <input type="text" className='absolute top-[26%] left-[20%] text-black  w-[60%] bg-transparent border-b-2 border-black ' required onChange={handleChange1}/>
          <label className='text-black absolute top-[38%] 
            left-[20%] text-3xl'><b>Interest Rate:</b></label>
          <input type="text" className='absolute top-[48%] left-[20%] text-black  w-[60%] bg-transparent border-b-2 border-black ' required onChange={handleChange2}/>
          <label className='text-black absolute top-[58%] 
            left-[20%] text-3xl'><b>Loan Term:</b></label>
           <input type="text" className='absolute top-[68%] left-[20%] text-black  w-[60%] bg-transparent border-b-2 border-black ' required onChange={handleChange3}/>
           <label className='text-black absolute top-[78%] 
            left-[20%] text-3xl'><b>Monthly Pay:</b></label>
                       <input type="text" className='absolute top-[80%] left-[54%] text-black  w-[26%] bg-transparent border-b-2 border-black ' value={ pay }/>
                       <button type="submit" className='bg-[#102C57] text-white w-[15%] absolute top-[90%] left-[42%] rounded-xl h-[8%]'>Calculate</button>

                </form>
                
                </section>

        </div>
        </div>
       


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