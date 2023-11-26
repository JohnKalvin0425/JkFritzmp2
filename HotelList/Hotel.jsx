import React from 'react'
import h1 from '..//image/hotel1.jpg';
import h2 from '..//image/hotel2.jpg';
import h3 from '..//image/hotel3.webp';
import h4 from '..//image/hotel4.webp';
import h5 from '..//image/hotel5.jpg';
import h6 from '..//image/hotel6.jpg';
import h7 from '..//image/hotel7.webp';
import o1 from '..//image/ocean1.jpg'
import o2 from '..//image/ocean2.jpg'
import o3 from '..//image/ocean3.jpg'
import o4 from '..//image/ocean4.jpg'
import o5 from '..//image/ocean5.jpg'
import o6 from '..//image/hillside5.webp'
import o7 from '..//image/hillside4.jpg'
import o8 from '..//image/hillside1.jpg'
import o9 from '..//image/hillside2.jpg'
import i0 from '..//image/hillside3.jpg'
import i1 from '..//image/maya1.jpg'
import i2 from '..//image/maya2.jpg'
import i3 from '..//image/maya3.jpg'
import i4 from '..//image/maya4.jpg'
import i5 from '..//image/maya5.jpg'
import q from '..//image/dahun1.jpg'
import w from '..//image/dahun2.png'
import e from '..//image/dahun3.jpg'
import r from '..//image/dahun4.webp'
import t from '..//image/dahun5.jpg'
import y from '../image/soelian1.jpg'
import u from '../image/soelian2.jpg'
import i from '../image/soelian3.jpg'
import o from '../image/soelian4.webp'
import p from '../image/soelian5.webp'
import a from '../image/punta1.jpg'
import s from '../image/punta2.jpg'
import d from '../image/punta3.jpg'
import f from '../image/punta4.jpg'
import g from '../image/punta5.jpg'
import breakfast from '..//icons/breakfast.svg';
import family from '..//icons/family.svg';
import frost from '..//icons/frost.svg';
import glass from '..//icons/glass.svg';
import spoon from '..//icons/spoon.svg';
import wifi from '..//icons/wifi.svg';
import location from  '..//icons/location.svg';
import hand from '..//icons/hand.svg';
import vest from '..//icons/vest.svg';
import bag from '..//icons/bag.svg';
import bell from '..//icons/bell.svg';
import car from '..//icons/car.svg';
import umbrella from '..//icons/umbrella.svg';
import desk from '..//icons/desk.svg';
import tv from '..//icons/tv.svg';
import shower from '..//icons/shower.svg';
import bed from '..//icons/bed.svg';
import visa from '..//icons/visa.svg';
import mastercard from '..//icons/mastercard.svg';
import amex from '..//icons/amex.svg';
import golf from '../icons/golf.svg'
import parking from '..//icons/parking.svg'
import snow from '..//icons/snow.svg'
import pool from '..//icons/pool.svg'
import pet from '..//icons/pet.svg'
import {Link, Outlet} from 'react-router-dom'


const Hotel = () => {
  return (
<>

   <div className='bg-gray-100'>
    <div className='md:max-w-[1480px] max-w-[600px]  m-auto w-full h-full flex justify-center items-center'>
              <div className='flex mb-10 mt-5 mx-3 shadow-sm'>

              <div className=' grid sm:grid-cols-1 lg:grid-cols-2 gap-3'>
                <div className='grid grid-cols-1'>
                    <img className='w-[700px] h-[424px] rounded-tl-xl rounded-bl-xl' src={h2} />
                </div>

                <div className='grid grid-cols-3 gap-1 '>
                    <div >
                    
                    <img className= 'h-[210px] w-[220px]' src={h1} />
                </div>
                <div>
                    
                    <img className= 'h-[210px] w-[220px]' src={h3} />
                </div>
                <div>
                    
                    <img className= 'h-[210px] w-[220px] rounded-tr-xl' src={h4} />
                </div>
                <div>
                    
                    <img className= 'h-[210px] w-[220px]' src={h5} />
                </div>
                <div>
                    
                    <img className= 'h-[210px] w-[220px]' src={h6} />
                </div>
                <div>
                    
                    <img className= 'h-[210px] w-[220px] rounded-br-xl' src={h7} />
                </div>
                </div>
          </div>
       </div>
     </div>
 

 <div className='md:max-w-[1480px] max-w-[600px]  m-auto w-full h-full flex justify-between items-center' >
<div className='grid grid-cols-1 lg:grid-cols-4'>

<div className="drawer lg:drawer-open mr-20 shadow-sm">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col  shadow-sm items-center justify-center">
    
    <label htmlFor="my-drawer-2" className="btn btn-outline drawer-button lg:hidden">❯</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base text-base-content">
      
    <fieldset>
      <h3 className='text-bold text-xl'>Filter Hotel Near</h3>
  <li>
  <div>
    <input type="radio" id="cloud9" name="drone" className='radio radio-accent' value="cloud9" />
    <label for="cloud9">Cloud 9 Beach</label>
  </div>
  </li>
  <li>
  <div>
    <input type="radio" id="daku" name="drone" className='radio radio-accent' value="daku" />
    <label for="daku">Daku Island</label>
  </div>
  </li>
  <li>
  <div>
    <input type="radio" id="guyam" name="drone" className='radio radio-accent' value="guyam" />
    <label for="guyam">Guyam Island</label>
  </div>
  </li>
  <li>
  <div>
    <input type="radio" id="naked" name="drone" className='radio radio-accent' value="naked" />
    <label for="naked">Naked Island</label>
  </div>
  </li>
  <li>
  <div>
    <input type="radio" id="magpupungko" name="drone" className='radio radio-accent' value="magpupungko" />
    <label for="magpupungko">Magpupungko Rock Pool</label>
  </div>
  </li>
  <li>
  <div>
    <input type="radio" id="maasin" name="drone" className='radio radio-accent' value="maasin" />
    <label for="maasin">Maasin River</label>
  </div>
  </li>
  <li>
  <div>
    <input type="radio" id="sugba" name="drone" className='radio radio-accent' value="sugba" />
    <label for="sugba">Sugba Lagoon</label>
  </div>
  </li>
  <li>
  <div>
    <input type="radio" id="taktak" name="drone" className='radio radio-accent' value="taktak" />
    <label for="taktak">Taktak Falls</label>
  </div>
  </li>

   <hr className='divide-stone-400 my-3'/>

   <h3 className='text-bold text-xl'>Filter by Type</h3>
      
      <li>
    <div>
      <input type="radio" id="room" name="drone" className='radio radio-accent' value="room" />
      <label for="room">Room</label>
    </div>
    </li>
  
    <li>
    <div>
      <input type="radio" id="hut" name="drone" className='radio radio-accent' value="hut" />
      <label for="hut">Hut</label>
    </div>
    </li>
  
    <li>
    <div>
      <input type="radio" id="cabin" name="drone" className='radio radio-accent' value="cabin" />
      <label for="cabin">Cabin</label>
    </div>
    </li>
</fieldset>

    </ul>
  </div>
</div>
<div className='col-span-3'>
<div className="card lg:card-side bg-base-100 shadow-xl my-2 mx-3">
  <figure className='px-2 py-2'>
  <div id='hotel1' className="carousel w-[300px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={o1} className="w-full h-[300px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-outline btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={o2} className="w-full h-[300px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-outline btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={o3} className="w-full h-[300px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-outline btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={o4} className="w-full h-[300px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide5" className="btn btn-outline btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full ">
    <img src={o5} className="w-full h-[300px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-outline btn-circle">❯</a>
    </div>
    </div>
</div>
  </figure>
  <div className="card-body">
    <ul className='flex justify-between items-center'>
    <li className='mr-4'><h2 className="card-title font-bold">101 Ocean Beach</h2>
    <p className='text-gray-400'>0.3km from Cloud9 Beach</p>
    <h3 className='text-xl font-bold mt-10'>P7,156</h3>
    <p>P8,731</p>
    <p className='text-gray-400'>include taxes and fees</p>
    </li>
    <li>    
        <div className='flex gap-2  mt-2'>
            <img src={wifi} className='h-[20px] w-[20px]'/>
            <p>Free Wifi</p>
        </div>

        <div className='flex gap-2  mt-2'>
            <img src={pet} className='h-[20px] w-[20px]'/>
            <p>Pet Friendly</p>
        </div>

        <div className='flex gap-2 mt-2'>
            <img src={parking} className='h-[20px] w-[20px]'/>
            <p>Free Parking</p>
        </div>

        <div className='flex gap-2 mt-2'>
            <img src={snow} className='h-[20px] w-[20px]'/>
            <p>Airconditioned Rooms</p>
        </div>

        <div className='flex gap-2 mt-2'>
            <img src={shower} className='h-[20px] w-[20px]'/>
            <p>Private Bathroom</p>
        </div>

    </li>
    <li>
<div className="flex items-center">
    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-3.259-4.577a1.534 1.534 0 0 0-3.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 3.226 1.616L11 17.033l4.518 3.375a1.534 1.534 0 0 0 3.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <p className="ms-3 text-sm font-bold text-gray-900 dark:text-white">4.7</p>
    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
    <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">98 views</a>
</div>
    </li>
    </ul>
    <div className="card-actions justify-end">
    <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 
    focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg texext-sm px-5 py-3.5 text-center me-3 mb-3">
       <Link  to='/hotel/ocean101'>Check Rooms</Link>  <Outlet /> </button> 
    
    
    </div>
  </div>
  </div>
  <div className='col-span-3'>
<div className="card lg:card-side bg-base-100 shadow-xl my-2 mx-3">
  <figure className='px-2 py-2'>
  <div id='hotel2' className="carousel w-[300px]">
  <div id="slide6" className="carousel-item relative w-full">
    <img src={o6} className="w-full h-[325px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide10" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide7" className="btn btn-outline btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide7" className="carousel-item relative w-full">
    <img src={o7} className="w-full h-[325px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide6" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide8" className="btn btn-outline btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide8" className="carousel-item relative w-full">
    <img src={o8} className="w-full h-[325px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide7" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide9" className="btn btn-outline btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide9" className="carousel-item relative w-full">
    <img src={o9} className="w-full h-[325px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide8" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide10" className="btn btn-outline btn-circle">❯</a>
    </div>
  </div>
  <div id="slide10" className="carousel-item relative w-full ">
    <img src={i0} className="w-full h-[325px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide9" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide6" className="btn btn-outline btn-circle">❯</a> 
    </div>
    </div>
</div>
  </figure>
  <div className="card-body">
    <ul className='flex justify-between items-center'>
    <li className='mr-4'><h2 className="card-title font-bold">Hillside View</h2>
    <p className='text-gray-400'>5km from near beach</p>
    <h3 className='text-xl font-bold mt-10'>P10,487</h3>
    <p>P11,745</p>
    <p className='text-gray-400'>include taxes and fees</p>
    </li>
    <li>
         <div className='flex gap-2 mt-1'>
        <img src={breakfast} className='h-[20px] w-[20px]'/>
        <p>Breakfast included</p>
         </div>   

         <div className='flex gap-2 mt-1'>
          <img src={pool} className='h-[20px] w-[20px]' />
          <p>Pool</p>
         </div>
        <div className='flex gap-2  mt-1'>
            <img src={wifi} className='h-[20px] w-[20px]'/>
            <p>Free Wifi</p>
        </div>

        <div className='flex gap-2 mt-1'>
            <img src={snow} className='h-[20px] w-[20px]'/>
            <p>Airconditioned Rooms</p>
        </div>

        <div className='flex gap-2 mt-1'>
            <img src={shower} className='h-[20px] w-[20px]'/>
            <p>Private Bathroom</p>
        </div>
        <div className='flex gap-2 mt-1'>
            <img src={pet} className='h-[20px] w-[20px]'/>
            <p>Pet Friendly</p>
        </div>

    </li>
    <li>
<div className="flex items-center">
    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-3.259-4.577a1.534 1.534 0 0 0-3.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 3.226 1.616L11 17.033l4.518 3.375a1.534 1.534 0 0 0 3.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <p className="ms-3 text-sm font-bold text-gray-900 dark:text-white">4.8</p>
    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
    <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">99 views</a>
</div>
    </li>
    </ul>
    <div className="card-actions justify-end">
    <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 
    focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg texext-sm px-5 py-3.5 text-center me-3 mb-3">Check Rooms</button>
    </div>
  </div>
</div>

<div className='col-span-3'>
<div className="card lg:card-side bg-base-100 shadow-xl my-2 mx-3">
  <figure className='px-2 py-2'>
  <div id='hotel3' className="carousel w-[300px]">
  <div id="slide11" className="carousel-item relative w-full">
    <img src={i1} className="w-full h-[325px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a to="#slide15" className="btn btn-outline btn-circle">❮</a> 
      <a to="#slide12" className="btn btn-outline btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide12" className="carousel-item relative w-full">
    <img src={i2} className="w-full h-[325px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a to="#slide11" className="btn btn-outline btn-circle">❮</a> 
      <a to="#slide13" className="btn btn-outline btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide13" className="carousel-item relative w-full">
    <img src={i3} className="w-full h-[325px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a to="#slide12" className="btn btn-outline btn-circle">❮</a> 
      <a to="#slide14" className="btn btn-outline btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide14" className="carousel-item relative w-full">
    <img src={i4} className="w-full h-[325px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a to="#slide13" className="btn btn-outline btn-circle">❮</a> 
      <a to="#slide15" className="btn btn-outline btn-circle">❯</a>
    </div>
  </div>
  <div id="slide15" className="carousel-item relative w-full ">
    <img src={i5} className="w-full h-[325px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a to="#slide14" className="btn btn-outline btn-circle">❮</a> 
      <a to="#slide1" className="btn btn-outline btn-circle">❯</a> 
    </div>
    </div>
</div>
  </figure>
  <div className="card-body">
    <ul className='flex justify-between items-center'>
    <li className='mr-4'><h2 className="card-title font-bold">Maya Villa</h2>
    <p className='text-gray-400'>30km from Sugba Lagoon</p>
    <h3 className='text-xl font-bold mt-10'>P6,679</h3>
    <p>P7,852</p>
    <p className='text-gray-400'>include taxes and fees</p>
    </li>
    <li>
         
         <div className='flex gap-2 mt-1'>
          <img src={pool} className='h-[20px] w-[20px]' />
          <p>Pool</p>
         </div>
        <div className='flex gap-2  mt-1'>
            <img src={wifi} className='h-[20px] w-[20px]'/>
            <p>Free Wifi</p>
        </div>
        <div className='flex gap-2  mt-1'>
            <img src={snow} className='h-[20px] w-[20px]'/>
            <p>Airconditioned Rooms</p>
        </div>

        <div className='flex gap-2 mt-1'>
          <img src={golf} className='h-[20px] w-[20px]' />
          <p>Golf Course</p>
         </div>
        <div className='flex gap-2 mt-1'>
            <img src={shower} className='h-[20px] w-[20px]'/>
            <p>Private Bathroom</p>
        </div>
        <div className='flex gap-2 mt-1'>
            <img src={pet} className='h-[20px] w-[20px]'/>
            <p>Pet Friendly</p>
        </div>

    </li>
    <li>
<div className="flex items-center">
    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-3.259-4.577a1.534 1.534 0 0 0-3.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 3.226 1.616L11 17.033l4.518 3.375a1.534 1.534 0 0 0 3.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <p className="ms-3 text-sm font-bold text-gray-900 dark:text-white">4.4</p>
    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
    <a to="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">78 views</a>
</div>
    </li>
    </ul>
    <div className="card-actions justify-end">
    <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 
    focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg texext-sm px-5 py-3.5 text-center me-3 mb-3">Check Rooms</button>
    </div>
  </div>
</div>

<div className='col-span-3'>
<div className="card lg:card-side bg-base-100 shadow-xl my-2 mx-3">
  <figure className='px-2 py-2'>
  <div id='hotel4' className="carousel w-[300px]">
  <div id="slide16" className="carousel-item relative w-full">
    <img src={q} className="w-full h-[325px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide20" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide17" className="btn btn-outline btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide17" className="carousel-item relative w-full">
    <img src={w} className="w-full h-[325px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide16" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide18" className="btn btn-outline btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide18" className="carousel-item relative w-full">
    <img src={e} className="w-full h-[325px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide17" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide19" className="btn btn-outline btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide19" className="carousel-item relative w-full">
    <img src={r} className="w-full h-[325px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide18" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide20" className="btn btn-outline btn-circle">❯</a>
    </div>
  </div>
  <div id="slide20" className="carousel-item relative w-full ">
    <img src={t} className="w-full h-[325px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide19" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide16" className="btn btn-outline btn-circle">❯</a> 
    </div>
    </div>
</div>
  </figure>
  <div className="card-body">
    <ul className='flex justify-between items-center'>
    <li className='mr-4'><h2 className="card-title font-bold">Dahun Villas</h2>
    <p className='text-gray-400'>4.5km from Daku Island</p>
    <h3 className='text-xl font-bold mt-10'>P8,863</h3>
    <p>P10,163</p>
    <p className='text-gray-400'>include taxes and fees</p>
    </li>
    <li>
    <div className='flex gap-2  mt-1'>
            <img src={breakfast} className='h-[20px] w-[20px]'/>
            <p>Breakfast included</p>
        </div>
       
        <div className='flex gap-2  mt-1'>
            <img src={wifi} className='h-[20px] w-[20px]'/>
            <p>Free Wifi</p>
        </div>
        <div className='flex gap-2 mt-1'>
          <img src={pool} className='h-[20px] w-[20px]' />
          <p>Pool</p>
         </div>
        <div className='flex gap-2 mt-1'>
            <img src={shower} className='h-[20px] w-[20px]'/>
            <p>Private Bathroom</p>
        </div>
        <div className='flex gap-2 mt-1'>
            <img src={pet} className='h-[20px] w-[20px]'/>
            <p>Pet Friendly</p>
        </div>
        <div className='flex gap-2 mt-1'>
            <img src={parking} className='h-[20px] w-[20px]'/>
            <p>Free Parking</p>
        </div>

    </li>
    <li>
<div className="flex items-center">
    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-3.259-4.577a1.534 1.534 0 0 0-3.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 3.226 1.616L11 17.033l4.518 3.375a1.534 1.534 0 0 0 3.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <p className="ms-3 text-sm font-bold text-gray-900 dark:text-white">4.7</p>
    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
    <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">83 views</a>
</div>
    </li>
    </ul>
    <div className="card-actions justify-end">
    <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 
    focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg texext-sm px-5 py-3.5 text-center me-3 mb-3">Check Rooms</button>
    </div>
  </div>
</div>

<div className='col-span-3'>
<div className="card lg:card-side bg-base-100 shadow-xl my-2 mx-3">
  <figure className='px-2 py-2'>
  <div id='hotel4' className="carousel w-[300px]">
  <div id="slide21" className="carousel-item relative w-full">
    <img src={y} className="w-full h-[325px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide25" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide22" className="btn btn-outline btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide22" className="carousel-item relative w-full">
    <img src={u} className="w-full h-[325px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide21" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide23" className="btn btn-outline btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide23" className="carousel-item relative w-full">
    <img src={i} className="w-full h-[325px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide22" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide24" className="btn btn-outline btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide24" className="carousel-item relative w-full">
    <img src={o} className="w-full h-[325px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide23" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide25" className="btn btn-outline btn-circle">❯</a>
    </div>
  </div>
  <div id="slide25" className="carousel-item relative w-full ">
    <img src={p} className="w-full h-[325px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide24" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide21" className="btn btn-outline btn-circle">❯</a> 
    </div>
    </div>
</div>
  </figure>
  <div className="card-body">
    <ul className='flex justify-between items-center'>
    <li className='mr-4'><h2 className="card-title font-bold">Soeliana Resort</h2>
    <p className='text-gray-400'>1km from Maasin River</p>
    <h3 className='text-xl font-bold mt-10'>P1,963</h3>
    <p>P3,163</p>
    <p className='text-gray-400'>include taxes and fees</p>
    </li>
    <li>
    <div className='flex gap-2  mt-1'>
            <img src={breakfast} className='h-[20px] w-[20px]'/>
            <p>Breakfast included</p>
        </div>
        <div className='flex gap-2 mt-1'>
          <img src={snow} className='h-[20px] w-[20px]' />
          <p>Airconditioned Rooms</p>
         </div>
        <div className='flex gap-2  mt-1'>
            <img src={wifi} className='h-[20px] w-[20px]'/>
            <p>Free Wifi</p>
        </div>  
        <div className='flex gap-2 mt-1'>
          <img src={pool} className='h-[20px] w-[20px]' />
          <p>Pool</p>
         </div>
        <div className='flex gap-2 mt-1'>
            <img src={shower} className='h-[20px] w-[20px]'/>
            <p>Private Bathroom</p>
        </div>
        <div className='flex gap-2 mt-1'>
            <img src={parking} className='h-[20px] w-[20px]'/>
            <p>Free Parking</p>
        </div>

    </li>
    <li>
<div className="flex items-center justify-center">
    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-3.259-4.577a1.534 1.534 0 0 0-3.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 3.226 1.616L11 17.033l4.518 3.375a1.534 1.534 0 0 0 3.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <p className="ms-3 text-sm font-bold text-gray-900 dark:text-white">3.8</p>
    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
    <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">89 views</a>
</div>
    </li>
    </ul>
    <div className="card-actions justify-end">
    <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 
    focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg texext-sm px-5 py-3.5 text-center me-3 mb-3">Check Rooms</button>
    </div>
  </div>
</div>

<div className='col-span-3'>
<div className="card lg:card-side bg-base-100 shadow-xl my-2 mx-3">
  <figure className='px-2 py-2'>
  <div id='hotel4' className="carousel w-[300px]">
  <div id="slide26" className="carousel-item relative w-full">
    <img src={a} className="w-full h-[325]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide30" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide27" className="btn btn-outline btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide27" className="carousel-item relative w-full">
    <img src={s} className="w-full h-[325px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide26" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide28" className="btn btn-outline btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide28" className="carousel-item relative w-full">
    <img src={d} className="w-full h-[325px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide27" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide29" className="btn btn-outline btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide29" className="carousel-item relative w-full">
    <img src={f} className="w-full h-[325px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide28" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide30" className="btn btn-outline btn-circle">❯</a>
    </div>
  </div>
  <div id="slide30" className="carousel-item relative w-full ">
    <img src={g} className="w-full h-[325px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide29" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide26" className="btn btn-outline btn-circle">❯</a> 
    </div>
    </div>
</div>
  </figure>
  <div className="card-body">
    <ul className='flex justify-between items-center'>
    <li className='mr-4'><h2 className="card-title font-bold">Punta Punta Resort</h2>
    <p className='text-gray-400'>7.5km from Magpupungko Rock Pools</p>
    <h3 className='text-xl font-bold mt-10'>P5,943</h3>
    <p>P7,243</p>
    <p className='text-gray-400'>include taxes and fees</p>
    </li>
    <li>
    <div className='flex gap-2  mt-1'>
            <img src={breakfast} className='h-[20px] w-[20px]'/>
            <p>Breakfast included</p>
        </div>
       
        <div className='flex gap-2  mt-1'>
            <img src={wifi} className='h-[20px] w-[20px]'/>
            <p>Free Wifi</p>
        </div>
        <div className='flex gap-2 mt-1'>
          <img src={pool} className='h-[20px] w-[20px]' />
          <p>Pool</p>
         </div>
        <div className='flex gap-2 mt-1'>
            <img src={parking} className='h-[20px] w-[20px]'/>
            <p>Free Parking</p>
        </div>

         <div className='flex gap-2 mt-1'>
            <img src={shower} className='h-[20px] w-[20px]'/>
            <p>Private Bathroom</p>
        </div>


    </li>
    <li>
<div className="flex items-center justify-center">
    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-3.259-4.577a1.534 1.534 0 0 0-3.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 3.226 1.616L11 17.033l4.518 3.375a1.534 1.534 0 0 0 3.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <p className="ms-3 text-sm font-bold text-gray-900 dark:text-white">4.8</p>
    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
    <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">64 views</a>
</div>
    </li>
    </ul>
    <div className="card-actions justify-end">
    <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 
    focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg texext-sm px-5 py-3.5 text-center me-3 mb-3">Check Rooms</button>
    </div>
  </div>
</div>

</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
     

<div className='md:max-w-[1400px] max-w-[600px]  m-auto w-full h-full bg-white p-3 rounded-xl mt-12' >
    <div className=' mb-10 mt-12'>

    <div className=' grid sm:grid-cols-1 grid-row-2 lg:grid-cols-3 gap-5 ml-2'>
        <div className='col-span-1'>
            <h1 className='text-3xl mt-12 font-semibold flex justify-left'>Policies</h1>
        </div>

        <div className='col-span-2 grid grid-cols-2 '>
                <div className='mr-5'>
                    
                    <h1 className='text-2xl font-semibold mb-3'>Check-In</h1>
                    <p className='text-gray-700'>Check-in start time: 1 PM; Check-in end time: 8 PM <br />Late check-in subject to availability Minimum <br />check-in age: 18</p>
                    
                </div>
                <div>
                    <h1 className='text-2xl font-semibold mb-3'>Check-out</h1>
                    <p className='text-gray-700'>Check-out before 11 AM <br />Contactless check-out available</p>
                </div>

                <div className='col-span-2 mt-12'>
            <h1 className='text-xl font-semibold mb-3 '>Special check-in instructions</h1>
            <p className='text-gray-700'>This property offers transfers from the airport (surcharges may apply); guests must contact the property with arrival details before travel, using the contact information on the booking confirmation</p>
            <p className='text-gray-700'>The front desk is open daily from 6 AM - 10 PM</p>
            <p className='text-gray-700'>Guests must contact the property in advance for check-in instructions; front desk staff will greet guests on arrival</p>
            <p className='text-gray-700'>To make arrangements for check-in please contact the property ahead of time using the information on the booking confirmation</p>
            <p className='text-gray-700'>If you are planning to arrive after 8 PM please contact the property in advance using the information on the booking confirmation</p>

            <h1 className='mt-12 text-xl font-semibold mb-1'>Access methods</h1>
            <p className='text-gray-700'>Staffed front desk</p>

            <h1 className='mt-12 text-xl font-semibold mb-1'>Pets</h1>
            <p className='text-gray-700'>No pets or service animals allowed</p>

            <h1 className='mt-12 text-xl font-semibold mb-1'>Children and extra beds</h1>
            <p className='text-gray-700'>Children are welcome <br />Rollaway/extra beds are available for PHP 900.0 per night <br /> Cribs (infant beds) are not available </p> 

            <h1 className='mt-12 text-xl font-semibold '>Property payment types:</h1>
            <div className='flex gap-2'>
                <img src={amex} className='w-[100px]' />
                <img src={visa} className='w-[100px]' />
                <img src={mastercard}  className='w-[100px]'/>
            </div>

        </div>
        

        </div>

      
        
</div>
</div>
</div>
</div>  
</>
      
  )
}

export default Hotel