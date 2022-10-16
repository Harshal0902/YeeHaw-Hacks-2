import React from 'react'
import Enemy1 from "../assets/enemy1.webp"
import Enemy2 from "../assets/enemy2.webp"
import Enemy3 from "../assets/enemy3.jpg"
import Enemy4 from "../assets/enemy4.jpg"
import Enemy5 from "../assets/enemy5.jpg"
import { Link } from "react-router-dom"

export default function PlayGame() {
  return (
    <div>
      <div className='grid place-items-center py-6'>
        <h1 className='text-5xl font-bold text-white'>Choose your opponent</h1>
        <div className='h-1 w-56 bg-secondary my-2'></div>
      </div>

      <div className='flex flex-wrap justify-around w-full px-16'>

        <div className="m-8">
          <div className="border-2 border-r-8 border-b-8 rounded-xl bg-gray-200 border-black  ">
            <img src={Enemy1} height="300" width="300" alt="TicTbeachacToe" />
            <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
              <Link to="/challange">
                <button
                  className="text-white py-2 px-8 rounded-md text-xl md:text-xl bg-secondary"
                >
                  Challange
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="m-8">
          <div className="border-2 border-r-8 border-b-8 rounded-xl bg-gray-200 border-black  ">
            <img src={Enemy2} height="300" width="280" alt="TicTbeachacToe" />
            <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
              <Link to="/challange">
                <button
                  className="text-white py-2 px-8 rounded-md text-xl md:text-xl bg-secondary"
                >
                  Challange
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="m-8">
          <div className="border-2 border-r-8 border-b-8 rounded-xl bg-gray-200 border-black  ">
            <img src={Enemy3} height="300" width="300" alt="TicTbeachacToe" />
            <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
              <Link to="/challange">
                <button
                  className="text-white py-2 px-8 rounded-md text-xl md:text-xl bg-secondary"
                >
                  Challange
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="m-8">
          <div className="border-2 border-r-8 border-b-8 rounded-xl bg-gray-200 border-black  ">
            <img src={Enemy4} height="300" width="300" alt="TicTbeachacToe" />
            <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
              <Link to="/challange">
                <button
                  className="text-white py-2 px-8 rounded-md text-xl md:text-xl bg-secondary"
                >
                  Challange
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="m-8">
          <div className="border-2 border-r-8 border-b-8 rounded-xl bg-gray-200 border-black  ">
            <img src={Enemy5} height="300" width="280" alt="TicTbeachacToe" />
            <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
              <Link to="/challange">
                <button
                  className="text-white py-2 px-8 rounded-md text-xl md:text-xl bg-secondary"
                >
                  Challange
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
