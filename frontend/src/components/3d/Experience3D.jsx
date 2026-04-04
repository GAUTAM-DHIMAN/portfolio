import { useRef, useLayoutEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { ScrollControls, useScroll, Html, ContactShadows, Sky, Environment } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'

import SceneProxy from './SceneProxy'
import CharacterProxy from './CharacterProxy'
import LaptopScreenProxy from './LaptopScreenProxy'

// The main animated orchestration logic
function Rig() {
  const scroll = useScroll()
  const { camera } = useThree()
  
  // Create a ref for our GSAP timeline
  const tl = useRef()

  useLayoutEffect(() => {
    // We build a single timeline that manages camera positions and look-ats.
    // The user scrolling controls the progress of this timeline.
    tl.current = gsap.timeline()
    
    // Initial State: Living Room Front View
    camera.position.set(0, 2, 5)
    
    // Scene 1 -> 2: Camera pans sideways to follow the character walking to the stairs
    tl.current.to(camera.position, {
      x: 8,
      y: 3,
      z: 5,
      duration: 2,
      ease: 'power2.inOut'
    }, 0)

    // Scene 2 -> 3: Camera moves up the stairs to the bedroom
    tl.current.to(camera.position, {
      x: 5,
      y: 6,
      z: -5,
      duration: 2,
      ease: 'power1.inOut'
    }, 2)

    // Scene 3 -> 4: Camera flies directly into the laptop screen
    tl.current.to(camera.position, {
      x: 5.5,
      y: 5.5,
      z: -6.5,
      duration: 1.5,
      ease: 'power3.inOut'
    }, 4)

  }, [camera])

  // Tie the GSAP timeline progress to the scroll progress (0 to 1)
  useFrame(() => {
    if (tl.current) {
      tl.current.seek(scroll.offset * tl.current.duration())
    }
    // Slowly point the camera at the character's general area (or the laptop depending on scroll)
    const lookAtTarget = new THREE.Vector3(
      gsap.utils.interpolate(0, 5, scroll.offset * 1.5),
      gsap.utils.interpolate(1.5, 5, scroll.offset * 1.5),
      gsap.utils.interpolate(0, -7, scroll.offset * 1.5)
    )
    camera.lookAt(lookAtTarget)
  })

  return null
}

export default function Experience3D({ children }) {
  return (
    <div className="w-full h-screen fixed inset-0 z-0 bg-[#f4f4f0]">
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 45 }}>
        {/* Environment setup for a soft "off-white" look */}
        <color attach="background" args={['#fafafa']} />
        <ambientLight intensity={1.5} />
        <directionalLight 
          position={[5, 10, -5]} 
          intensity={2} 
          castShadow 
          shadow-mapSize={[2048, 2048]} 
        />
        <Environment preset="city" />
        
        <ScrollControls pages={5} damping={0.25}>
          {/* Orchestrator calculates camera offsets based on scroll */}
          <Rig />
          
          <group position={[0, -1, 0]}>
            <SceneProxy />
            <CharacterProxy />
            <LaptopScreenProxy domContent={children} />
            <ContactShadows position={[0, 0, 0]} opacity={0.5} scale={50} blur={2} far={10} />
          </group>
        </ScrollControls>
      </Canvas>
      
      {/* Scroll indicator overlay */}
      <div className="absolute bottom-10 w-full flex justify-center text-gray-400 font-mono text-sm pointer-events-none">
        Scroll down to explore
      </div>
    </div>
  )
}
