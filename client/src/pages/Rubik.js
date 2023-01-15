import React from 'react'
import { useState } from 'react'
import { grid } from '../constants'

const Rubik = () => {

  const [color, setColor] = useState("")
  const [nColor, setNColor] = useState("tite")

  const choice = [
    {
        id: 0,
        color: "wht",
    },
    {
        id: 1,
        color: "red",
    },
    {
        id: 2,
        color: "orng",
    },
    {
        id: 3,
        color: "blu",
    },
    {
        id: 4,
        color: "grn",
    },
    {
        id: 5,
        color: "yllw",
    },
]

  const getColor = () => {
    setNColor(choice.id)
    console.log(nColor)
  }

  const whtClick = () => {
    setColor("wht")
  }

  const redClick = () => {
    setColor("red")
  }

  const orngClick = () => {
    setColor("orng")
  }

  const bluClick = () => {
    setColor("blue")
  }

  const grnClick = () => {
    setColor("grn")
  }

  const yllwClick = () => {
    setColor("yllw")
  }

  return (
    <>
      <div className='w-full h-[100vh] bg-rubikWht font-space'>
        <div className='flex flex-col justify-center items-center p-5 h-full w-full gap-y-5 text-rubikBlk'>
          {/* TITLE */}
          <p className='font-bold text-7xl'>RUBIK</p>

          {/* GRID */}
          <div className='bg-rubikBlk flex flex-row flex-wrap h-80 w-80 rounded-[4px] p-2'>
            {grid.map((grid) => (
              <div
                key={grid.id}
                color={grid.color}
                style={
                  color === "wht" ? { backgroundColor: "#F9F9F9" } :
                    color === "red" ? { backgroundColor: "#B90000" } :
                      color === "orng" ? { backgroundColor: "#FF5900" } :
                        color === "blu" ? { backgroundColor: "#0045AD" } :
                          color === "grn" ? { backgroundColor: "#009B48" } :
                            color === "yllw" ? { backgroundColor: "#FFD500" } :
                              { color: "#1E1E1E" }}
                className='basis-1/3 bg-rubikWht border-rubikBlk border-[2px] rounded-[10px] cursor-pointer'></div>
            ))}
          </div>

          {/* CHOICE */}
          <div className='bg-rubikWht flex flex-row gap-x-2 w-[35rem] h-20 p-3 rounded-[4px] drop-shadow-lg'>
            {choice.map((choice) => (

              <div key={choice.id} name={choice.color}
                style={
                  choice.color === "wht" ? { backgroundColor: "#F9F9F9" } :
                    choice.color === "red" ? { backgroundColor: "#B90000" } :
                      choice.color === "orng" ? { backgroundColor: "#FF5900" } :
                        choice.color === "blu" ? { backgroundColor: "#0045AD" } :
                          choice.color === "grn" ? { backgroundColor: "#009B48" } :
                            choice.color === "yllw" ? { backgroundColor: "#FFD500" } :
                              { color: "#1E1E1E" }}
                onClick={getColor}
                className='border-rubikBlk border-[2px] rounded-[4px] cursor-pointer w-full flex items-center justify-center'>

                <p className='font-bold text-center uppercase'
                  style={choice.color === "wht" ? { color: "#1E1E1E" } :
                    choice.color === "yllw" ? { color: "#1E1E1E" } :
                      { color: "#F9F9F9" }}>{choice.color}</p>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Rubik