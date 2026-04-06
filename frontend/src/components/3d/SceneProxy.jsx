import React from 'react'
import { Text } from '@react-three/drei'

export default function SceneProxy() {
  return (
    <group>
      {/* 
        This is a placeholder for the final baked environment GLTF.
        Currently using primitives to block out the scene:
        Living Room -> Stairs -> Bedroom
      */}

      {/* Global Background UI Elements (Figma style) */}
      <Text
        position={[-3, 4, -4]}
        fontSize={3}
        color="#c8bfa3" // Soft gold/bronze
        anchorX="center"
        anchorY="middle"
      >
        GD
      </Text>

      {/* The White Spotlight effect for the laptop area */}
      <mesh position={[5.5, 3, -8]} rotation={[0, 0, 0]}>
        <circleGeometry args={[4, 64]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.6} depthWrite={false} />
      </mesh>

      {/* Living Room Area */}
      <mesh position={[0, -0.1, 0]} receiveShadow>
        <boxGeometry args={[10, 0.2, 10]} />
        <meshStandardMaterial color="#f0efe8" />
      </mesh>
      {/* Sofa Proxy */}
      <mesh position={[0, 0.5, -2]} castShadow>
        <boxGeometry args={[3, 1, 1]} />
        <meshStandardMaterial color="#e5ddc8" />
      </mesh>

      {/* Stairs Area */}
      <group position={[4, 0, 0]}>
        {[0, 1, 2, 3, 4].map((step) => (
          <mesh 
            key={step} 
            position={[0, step * 0.4 + 0.2, -step * 0.8]} 
            castShadow receiveShadow
          >
            <boxGeometry args={[2, 0.4, 0.8]} />
            <meshStandardMaterial color="#f8f6f2" />
          </mesh>
        ))}
      </group>

      {/* Bedroom / Workspace Area (2nd Floor) */}
      <mesh position={[6, 2, -6]} receiveShadow>
        <boxGeometry args={[8, 0.2, 8]} />
        <meshStandardMaterial color="#fdfdfd" />
      </mesh>
      
      {/* Desk Proxy */}
      <mesh position={[5.5, 3, -7]} castShadow>
        <boxGeometry args={[2, 0.1, 1]} />
        <meshStandardMaterial color="#f4f1eb" />
      </mesh>

      {/* Chair Proxy */}
      <mesh position={[5.5, 2.5, -6]} castShadow>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial color="#3b342d" />
      </mesh>
    </group>
  )
}
