import React from 'react';
import { Link } from 'react-router-dom';
import siargao from '../assets/siargao.jpg'


const About = () => {
  return (

    
    <div className="container mx-auto p-4 grid sm:grid-cols-1 lg:grid-cols-2 shadow-xl">
      <div className='col-span-1'>
      <h1 className="text-4xl font-bold mb-4 ml-2 pt-5">About La Bouy</h1>
      
      <p className="text-lg mb-6">
        Welcome to La Bouy, your go-to destination for seamless travel experiences in the picturesque Philippines.
      </p>
      <p className="text-lg mb-6">
        At La Bouy, we understand the joy of discovering new places, experiencing different cultures, and creating lasting memories. Our mission is to make travel planning easy, enjoyable, and stress-free for every adventurer.
      </p>
      <p className="text-lg mb-6">
        La Bouy was founded with a passion for exploring the beauty of the Philippines. Our platform connects travelers with a wide range of accommodations, transportation options, and exciting activities to ensure a customized and unforgettable travel experience.
      </p>
      <p className="text-lg mb-6">
        Why choose La Bouy?
      </p>
      <ul className="list-disc ml-8 text-lg mb-6">
        <li>Extensive Selection: Browse through a diverse range of accommodations, from cozy beach resorts to urban hideaways.</li>
        <li>Convenient Booking: Our user-friendly interface allows you to book accommodations, flights, and activities with just a few clicks.</li>
        <li>Local Expertise: Benefit from our local insights and recommendations to make the most of your trip.</li>
        <li>Customer Satisfaction: We prioritize your satisfaction and work tirelessly to provide excellent customer service.</li>
      </ul>
      <p className="text-lg mb-6">
        Whether you're a solo traveler, a couple seeking a romantic getaway, or a family looking for adventure, La Bouy has something for everyone. Let us be your travel companion as you explore the breathtaking landscapes and vibrant culture of the Philippines.
      </p>
      <p className="text-lg mb-6">
        Join us in creating unforgettable journeys. Start planning your next adventure with La Bouy today!
      </p>
      </div>

    <div className='col-span-1 px-5 mt-10'>
      <img src={siargao} className='w-full h-[550px] rounded shadow-xl' alt="Siargao Island" />
      <div className="flex justify-center pt-10">
      <Link to="/contact" className="bg-[#01dada] hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded">
      Contact Us
      </Link>
</div>
    </div>
      
    </div>





  );
};

export default About;
