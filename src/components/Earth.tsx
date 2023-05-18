import React, { useState } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";
import { ThreeEvent, useLoader } from "@react-three/fiber";
import { Html, Stars } from "@react-three/drei";
import map from './../data/map.json'
import CityCard from "./CityCard";

function Earth(props: any) {
  const colorMap = useLoader(
    TextureLoader,
    './img/8k_earth_daymap.jpg'
  );
  const normalMap = useLoader(
    TextureLoader,
    './img/8k_earth_normal_map.jpg'
  );
  const specularMap = useLoader(
    TextureLoader,
    './img/8k_earth_specular_map.jpg'
  );
  const cloudsMap = useLoader(
    TextureLoader,
    './img/8k_earth_clouds.jpg'
  );

  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    return (event: ThreeEvent<MouseEvent>) => {
      setShowModal(!showModal);
    }
  } 

  const convertCoordinatesToPosition = (latitude: number, longitude: number) => {
    const phi = (latitude * Math.PI) / 180;
    const theta = ((longitude - 180) * Math.PI) / 180;

    const x = -Math.cos(phi) * Math.cos(theta);
    const y = Math.sin(phi);
    const z = Math.cos(phi) * Math.sin(theta);

    return new THREE.Vector3(x, y, z);
  };

  // const cityPosition1 = convertCoordinatesToPosition(22.3193, 114.1694);
  const hongKongPosition = convertCoordinatesToPosition(map.coordinates[0].lat, map.coordinates[0].lon);
  const sanDiegoPosition = convertCoordinatesToPosition(map.coordinates[1].lat, map.coordinates[1].lon);





  return (
    <>
    <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[1.005, 32, 32]} />
          <meshPhongMaterial
            map={cloudsMap}
            opacity={0.4}
            depthWrite={true}
            transparent={true}
            side={THREE.DoubleSide}
            />
        </mesh>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
          />
      </mesh>
      <mesh position={hongKongPosition} onClick={handleModal()}>
        <cylinderGeometry args={[0.005, 0.005, 0.05, 10]} />
      </mesh>
      <mesh position={sanDiegoPosition} onClick={handleModal()}>
        <cylinderGeometry args={[0.005, 0.005, 0.05, 10]} />
      </mesh>
      
      {showModal ? 
      <Html>
        <CityCard onClick={() => setShowModal(!showModal)} />
      </Html> : null}
    </>
  );
}


export default Earth;
