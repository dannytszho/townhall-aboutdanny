import React, { useEffect, useState } from "react";
import * as THREE from "three";

// import EarthDayMap from "../../public/8k_earth_daymap.jpg";
// import EarthNormalMap from "../../public/8k_earth_normal_map.jpg";
// import EarthSpecularMap from "../../public/8k_earth_specular_map.jpg";
// import EarthCloudsMap from "../../public/8k_earth_clouds.jpg";
import { TextureLoader } from "three";
import { ThreeEvent, useLoader } from "@react-three/fiber";
import { Html, Stars } from "@react-three/drei";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";

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
      setShowModal(true);
    }
  } 




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
      <mesh position={[0, 0.6, 1]} onClick={handleModal()}>
        <cylinderGeometry args={[0.01, 0.01, 1, 6]} />
      </mesh>
      <mesh position={[0.8, 0.6, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.2, 6]} />
      </mesh>
      {/* <Html>
        <button onClick={handleModal()}>
        </button>
      </Html> */}
      {showModal ? 
      <Html>
        {/* <div className="bg-white h-40 w-96">
          <button className="ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
            >
            <span className="text-black h-6 w-6 text-2xl block">
              ×
            </span>
          </button>
          <p>Hong Kong</p>
        </div> */}
        <Card className="w-96 overflow-hidden left-[-800px] top-[-300px]">
          <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="ui/ux review check"
            />
          </CardHeader>
          <CardBody>
            <button className="ml-auto mr-[-18px] mt-[-22px] border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
              >
              <span className="text-black h-6 w-6 text-2xl block hover:text-gray-800 hover:scale-125">
                ×
              </span>
            </button>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by walk
              and near to &quot;Naviglio&quot; where you can enjoy the main night life
              in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Learn More</Button>
          </CardFooter>
        </Card>
      </Html> : null}
    </>
  );
}

export default Earth;
