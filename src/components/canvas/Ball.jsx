import { Center, Decal, Float, Html, OrbitControls, Preload, useTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import CanvasLoader from '../Loader'



const Ball = ({imgUrl,name}) => {

  const [decal] = useTexture([imgUrl])
  const [hovered, setHovered] = useState(false)
  return (
    <Float speed={1.75} rotationIntensity={1}
    floatIntensity={2}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0,0.05]}/>
      <mesh castShadow 
      receiveShadow 
      scale={2.75}
      onPointerEnter={(e) => {
        // e.stopPropagation()
        setHovered(true)
      }}


      onPointerLeave={() => setHovered(false)}
      >
        <icosahedronGeometry args={[1,1]} />
        <meshStandardMaterial 
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0,0,1]}
          rotation={[2* Math.PI, 0, 6.25]}
          map={decal}
        />
        {hovered && (
          <Html 
            center 
          >
            <div style={{
              background: 'rgba(0,0,0,0.7)',
              color: 'white',
              padding: '5px 10px',
              borderRadius: '5px',
              fontSize: '14px',
              whiteSpace: 'nowrap',
              pointerEvents:'none',
              userSelect:'none',
            }}>
              {name}
            </div>
          </Html>
        )
        } 
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon,name})=>{
  return (
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
        />
        <Ball imgUrl={icon} name={name} />
      </Suspense>

      <Preload all />
    </Canvas>
  )

}
export default BallCanvas