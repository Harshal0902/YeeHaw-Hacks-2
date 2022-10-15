import React from "react"
import HeroImg from '../assets/hero.svg'
import FeatImg from '../assets/feat.svg'
import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <div className='md:mx-28 mx-4 text-white pt-10 pb-12'>

      <div className='md:grid md:grid-cols-2 items-center pt-10'>
        <div className=''>
          <h1 className='text-3xl md:text-6xl'>Who we are</h1>
          <p className='text-xl md:text-2xl py-4 tracking-wider'>About the web app</p>

          <Link to="/music">
            <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl'>Listen Music</button>
          </Link>

        </div>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <img src={HeroImg} alt="img" width="350" height="350" />
        </div>
      </div>

      <div className='md:grid md:grid-cols-2 pt-12 items-center'>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <img src={FeatImg} alt="img" width="350" height="350" />
        </div>
        <div className=''>
          <h1 className='text-5xl'>What else do we have</h1>
          <p className='text-xl md:text-2xl py-4 tracking-wider'> APP NAME is a web app where you can:
          </p>
          <ul className="text-xl">
            <li className="list-disc">Challange different opponents and survive the quest.</li>
            <li className="list-disc">Users can come and create rooms and invite their friends.</li>
            <li className="list-disc">Climb up the leaderboard and concur the wild west.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
