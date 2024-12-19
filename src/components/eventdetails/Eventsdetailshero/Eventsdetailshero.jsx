import React, { useEffect, useState } from 'react'

import EventSchedule from './EventSchedule';
import Eventticket from '../eventticket/Eventticket';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";



const mapimg = "https://res.cloudinary.com/dzyvwxh7n/image/upload/v1731627247/Frame1218_katqfy.png"

const Eventsdetailshero = () => {


  const [userLocation, setUserLocation] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (err) => {
          setError("Unable to fetch location. Please enable location services.");
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);


  return (
    <div className=' w-full  '><div className='py-[60px] font-Lato pt-[120px] md:pt-[120px] px-[20px] md:px-[80px]  '>
      <div className='  text-white rounded-[28px] h-screen md:h-[425px] flex-col  bg-center bg-cover p-[10px] py-[136px]' style={{ backgroundImage: "url('https://res.cloudinary.com/dzyvwxh7n/image/upload/v1731557983/Herosectioniii_zwioul.png')" }}>
        <div className=' flex items-center pt-14 md:pt-0 md:gap-[16px] h-[174px]  gap-y-[50px] lg:w-full pl-[40px] pr-[49px]  justify-between'>
          <div className='bg-customRed w-[60px] h-[60px]'></div>
          <div className='gap-y-10 md:gap-y-12 flex flex-col'>
            <div className='h-[108px]  items-left mx-auto w-full text-[32px] md:text-[42px]  lg:text-[52px] leading-[34.08px] md:leading-[44.08px] lg:leading-[54.08px] font-bold  md:w-full'>
              <h1>Renewed Conference - Making a Difference in your Pareer Path</h1>
            </div>
            <div className='h-[27px] leading-[27px]  text-[16px] font-bold'><h1>Organized by Liberty Life Centre </h1></div>
          </div>



        </div>
      </div>




      <div className='w-full md:flex sm:flex-none  px-10 justify-between'>
        <div><EventSchedule /></div>

        <div > <Eventticket /></div>

      </div>

    </div>
   {/* <div> */}
       {/* <div className='w-[100%] py-[51px] md:px-[80px] items-center mx-auto'>
       <img src={mapimg} alt="map-img" className='w-full' /> 
       </div> */}

{/* <a href="https://www.openstreetmap.org/?mlat=40.7128&mlon=-74.0060&zoom=14" target="_blank">
    <img src="http://staticmap.openstreetmap.de/staticmap.php?center=40.7128,-74.0060&zoom=12&size=600x400&markers=40.7128,-74.0060,red-pin" 
    alt="Static Map of New York City" />
</a> */}
{/* </div> */}

<div className='w-[100%]  py-[51px] md:px-[80px] h- items-center mx-auto'>
      {error && <p>{error}</p>}
      {userLocation ? (
        <MapContainer
          center={[userLocation.lat, userLocation.lng]}
          zoom={12}
          style={{ height: "500px", width: "100%" }}
        >
          {/* Add OpenStreetMap Tile */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Marker for User's Location */}
          <Marker position={[userLocation.lat, userLocation.lng]}>
            <Popup>You are here!</Popup>
          </Marker>
          {/* TODO: Add event markers */}
        </MapContainer>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>





    </div>
  )
}

export default Eventsdetailshero