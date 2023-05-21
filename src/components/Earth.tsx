import React, { useState } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";
import { ThreeEvent, useLoader } from "@react-three/fiber";
import { Html, Stars } from "@react-three/drei";
import CityCard from "./CityCard";
import { City } from '@/types/City'

// type CityProps = {
//   name: string | undefined;
//   latitude: number;
//   longitute: number;
// }

function Earth({cityList}: any) {
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
  const [currentCity, setCurrentCity] = useState<City | null>(null);


  const handleModal = (city: any) => {
    return (event: ThreeEvent<MouseEvent>) => {
      setShowModal(!showModal);
      setCurrentCity(city);
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

      {cityList.map((city: City, index: any) => (
        <React.Fragment key={index}>
          <mesh position={convertCoordinatesToPosition(city.latitude, city.longitute)} onClick={handleModal(city)}>
            <cylinderGeometry args={[0.005, 0.005, 0.05, 10]} />
          </mesh>
          {showModal ? 
            <Html>
                <CityCard onClose={() => setShowModal(false)} name={currentCity?.name} description={currentCity?.description} image={currentCity?.image as string} />
            </Html> : null 
          }
        </React.Fragment>
      ))}
    </>
  );
}


export default Earth;
