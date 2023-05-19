import React, { useState } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";
import { ThreeEvent, useLoader } from "@react-three/fiber";
import { Html, Stars } from "@react-three/drei";
import cityData from './../data/cityData.json'
import CityCard from "./CityCard";
import { getCities } from "@/sanity/sanity-utils";

type CityProps = {
  city: string | undefined;
  lat: number;
  lon: number;
}

function Earth({cityList}:any) {
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
  const [currentCity, setCurrentCity] = useState<CityProps | null>(null);


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

  // const cityPosition1 = convertCoordinatesToPosition(22.3193, 114.1694);
  const cityPositions = cityData.coordinates.map((city) => convertCoordinatesToPosition(city.lat, city.lon));
  





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

      {cityData.coordinates.map((city, index) => (
        <React.Fragment key={index}>
          <mesh position={convertCoordinatesToPosition(city.lat, city.lon)} onClick={handleModal(city)}>
            <cylinderGeometry args={[0.005, 0.005, 0.05, 10]} />
          </mesh>
          {showModal ? 
            <Html>
                <CityCard onClose={() => setShowModal(false)} name={currentCity?.city} />
            </Html> : null 
          }
        </React.Fragment>
      ))}
    </>
  );
}

// const client = createClient({
//   projectId: "prumhpvv", // you can find this in sanity.json
//   dataset: "city", // or the name you chose in step 1
//   apiVersion: "2023-05-18", // use a UTC date string
//   useCdn: false, // `false` if you want to ensure fresh data
// });

// export const getCityData = async () => {
//   const cityListQuery = `*[_type == "city"]`;

      
//   const cityList = await client.fetch(cityListQuery);
//   console.log(cityList)
  
//   return {
//     props: { ...cityList },
//   };
// };


export default Earth;
