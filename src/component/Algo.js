// import React from 'react';
// import algoliasearch from 'algoliasearch/lite';
// import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch-dom';

// // Initialize Algolia search client
// const searchClient = algoliasearch('WGOE6HYMLN', '0dd32b6c55b9fedd38716d0c43c519eb');

// const Hit = ({ hit }) => (
//   <div style={{textAlign:'center'}}>
//     <h2>
//       <Highlight attribute="UserName" hit={hit} /> <Highlight attribute="Security_Pin" hit={hit} />
//     </h2>
//   </div>
// );

// const Algo = () => {
//   return (
//     <InstantSearch indexName="Mortgage_mate" searchClient={searchClient} >
//       <SearchBox />
//       <Hits hitComponent={Hit} />
//     </InstantSearch>
//   );
// };


// npm install algoliasearch react-instantsearch-dom

import React from 'react';
import { Link } from 'react-router-dom'
import logo from './logo.png'
import bgg4 from './bgg4.jpg'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch-dom';
import fb from './fb.png'
import twt from './twt.png'
import insta from './insta.png'
import ph from './ph.png'
import ml2 from './ml2.png'

// Initialize Algolia search client
const searchClient = algoliasearch('WGOE6HYMLN', '0dd32b6c55b9fedd38716d0c43c519eb');

const Hit = ({ hit }) => (
  
  <div style={{textAlign:'center'}}>
    {/* <h2>
      <Highlight attribute="UserName" hit={hit} /> <Highlight attribute="Security_Pin" hit={hit} />
    </h2> */}
    <p >UserName: {hit.UserName}</p><hr />
    <p >Email: {hit.Email}</p><hr />
  </div>

);

 export const Algo = () => {
  return (
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
        <img src={bgg4} className='
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
                  <InstantSearch indexName="Harry_info" searchClient={searchClient} >

              <SearchBox className='absolute top-[-10%] left-[30%]' />
      <Hits hitComponent={Hit}  />
      </InstantSearch>

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
};

export default Algo;


