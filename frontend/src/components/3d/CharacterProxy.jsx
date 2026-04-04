import { useRef, useLayoutEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll, Float } from '@react-three/drei'
import gsap from 'gsap'

export default function CharacterProxy() {
  const scroll = useScroll()
  const charRef = useRef()
  const tl = useRef()

  useLayoutEffect(() => {
    // This timeline animates the character's translation path
    tl.current = gsap.timeline()

    // 1. Stand up from Sofa (Living Room)
    tl.current.to(charRef.current.position, {
      y: 1.5,
      z: -1,
      duration: 0.5,
      ease: 'power2.out',
    }, 0)

    // 2. Walk towards stairs
    tl.current.to(charRef.current.position, {
      x: 4,
      z: 0.5,
      duration: 1.5,
      ease: 'power1.inOut'
    }, 0.5)

    // 3. Walk up stairs
    tl.current.to(charRef.current.position, {
      x: 4,
      y: 3.5,
      z: -3,
      duration: 1.5,
      ease: 'linear'
    }, 2)

    // 4. Walk to desk and sit down
    tl.current.to(charRef.current.position, {
      x: 5.5,
      y: 3,
      z: -5.5,
      duration: 1.5,
      ease: 'power2.inOut'
    }, 3.5)

  }, [])

  useFrame(() => {
    if (tl.current) {
      tl.current.seek(scroll.offset * tl.current.duration())
    }

    // Pseudo-animation logic for the character (like bobbing when walking)
    if (scroll.offset > 0.1 && scroll.offset < 0.6) {
      // Walking bob
      charRef.current.position.y += Math.sin(scroll.offset * 100) * 0.05
    }
  })

  return (
    <group ref={charRef} position={[0, 1, -1.5]}>
      {/* Figma character idle floating */}
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5} floatingRange={[-0.05, 0.05]}>
        <group>
          {/* Head */}
          <mesh castShadow position={[0, 0.4, 0]}>
            <sphereGeometry args={[0.25, 32, 32]} />
            <meshStandardMaterial color="#fcd300" roughness={0.3} />
          </mesh>
          
          {/* Body */}
          <mesh castShadow receiveShadow position={[0, -0.3, 0]}>
            <boxGeometry args={[0.5, 0.8, 0.3]} />
            <meshStandardMaterial color="#8b7355" borderRadius={10} roughness={0.7} />
          </mesh>
        </group>
      </Float>

      {/* Floating purple Figma Laptop representation */}
      <Float speed={3} rotationIntensity={0.2} floatIntensity={0.3} floatingRange={[-0.02, 0.02]}>
        <group position={[0, -0.2, 0.5]} rotation={[0.2, 0, 0]}>
          <mesh castShadow>
            <boxGeometry args={[0.6, 0.4, 0.05]} />
            <meshStandardMaterial color="#8a5cd6" />
          </mesh>
          <mesh position={[0, -0.2, 0.15]} castShadow>
            <boxGeometry args={[0.6, 0.05, 0.4]} />
            <meshStandardMaterial color="#7a4cc6" />
          </mesh>
        </group>
      </Float>
    </group>
  )
}
