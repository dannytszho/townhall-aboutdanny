import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
  } from "@material-tailwind/react";
import { MouseEventHandler } from "react";
import { PortableTextBlock } from "sanity";
import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/24/solid";

type CityCardProps = {
    onClose: MouseEventHandler<HTMLButtonElement>;
    name: string | undefined;
    description: PortableTextBlock[] | undefined;
    image: any;
}


const CityCard = ({name, image, description, onClose}: CityCardProps) => {
    return (
        <Card className="w-80 overflow-hidden left-[-170px] top-[-300px]">
          <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none "
          >
            <Image src={image} width={350} height={400} alt="ui/ux review check" />
            {/* <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="ui/ux review check"
            /> */}
          </CardHeader>
          <CardBody>
            <button className="ml-auto mr-[-18px] mt-[-22px] border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
              >
              <span className="text-black h-6 w-6 text-2xl block hover:text-gray-800 hover:scale-125">
                ×
              </span>
            </button>
            <Typography variant="h5" color="blue-gray" className="flex mb-2">
              <MapPinIcon className="w-5 h-5" />&nbsp;{name}
            </Typography>
          </CardBody>
        </Card>
    )
};

export default CityCard