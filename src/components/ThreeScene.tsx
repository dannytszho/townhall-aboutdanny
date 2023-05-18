"use client"
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Stats, OrbitControls } from '@react-three/drei'
import Earth from './Earth'

const ThreeScene = () => {

  return (
    <div className="scene">
      <Canvas
        shadows
        className='bg-black'
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.3} />
        <Earth />
        <OrbitControls />
        <Stats /> 

      </Canvas>
    </div>
  )
}

export default ThreeScene