import React from 'react'
import { Html } from '@react-three/drei'

export default function LaptopScreenProxy({ domContent }) {
  return (
    <group position={[5.5, 3.1, -6.8]} rotation={[-0.2, 0, 0]}>
      {/* Laptop Base */}
      <mesh position={[0, -0.1, 0.2]} castShadow receiveShadow>
        <boxGeometry args={[1.2, 0.05, 0.8]} />
        <meshStandardMaterial color="#888888" />
      </mesh>

      {/* Screen Frame */}
      <mesh position={[0, 0.4, -0.2]}>
        <boxGeometry args={[1.2, 0.9, 0.05]} />
        <meshStandardMaterial color="#222222" />
      </mesh>

      {/* The Actual Screen / DOM Overlay */}
      {/* 
        Using Html from drei to map the DOM elements to 3D space.
        transform = true makes it part of the 3D scene (rotates/scales with camera)
        occlude = true hides it behind other 3D objects
      */}
      <Html
        transform
        occlude
        position={[0, 0.4, -0.17]}
        scale={0.1}
        className="laptop-screen-content bg-[#080810] rounded-md overflow-y-auto overflow-x-hidden border border-[rgba(0,243,255,0.2)] hide-scrollbar"
        style={{
          width: '1200px',
          height: '850px',
          padding: '20px'
        }}
      >
        <div className="w-full h-full pointer-events-none laptop-interactive">
          {/* 
            Since Drei's ScrollControls intercepts main wheel events,
            we map pointer events conditionally via CSS (pointer-events: auto on hover)
            or use wheel capture to allow scrolling ONLY inside this HTML block
            when zoomed in.
          */}
          {domContent}
        </div>
      </Html>
    </group>
  )
}
