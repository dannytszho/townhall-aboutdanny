"use client"
import { Category } from "@/types/Category";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import Image from "next/image";
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from "next/link";

type CategoryProps = {
  _id: string;
  title: string;
  subtitle: string;
  image: string;
  thumbnail: string;
  slug: string;
}
 
export default function Landing({categoryList, slidesToShow = 3}: {categoryList: Category[], slidesToShow?: number}) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <div className="my-32">
      <div className="flex sm:flex-row md:flex-col items-center justify-center overflow-x-hidden md:mx-16">
        <div className="top-8 md:top-0 absolute md:relative flex flex-col md:flex-row overflow-y-hidden overflow-x-hidden space-y-10 md:space-x-10 px-5 py-5" ref={carouselRef}>
          {categoryList.map(({ _id, title, subtitle, image, thumbnail, slug }: any) =>
            <Card key={_id}
              shadow={false}
              className="relative sm:my-10 sm:flex-[0_0_98%] md:flex-[0_0_55.8%] lg:flex-[0_0_30.8%] sm:h-[35rem] md:h-[42rem] xs:w-20 md:w-32 lg:w-56 justify-center overflow-hidden text-center hover:scale-105 hover:rounded-xl hover:cursor-grabbing"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
              >
                <Image src={image} fill={true} className="object-fill" alt="ui/ux review check" />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </CardHeader>
              <CardBody className="relative mt-96 py-14 px-6 md:px-12">
                <Typography
                  variant="h2"
                  color="white"
                  className="mb-6 font-medium leading-[1.5]"
                >
                  {subtitle}
                </Typography>
                <Typography variant="h5" className="mb-4 text-gray-400">
                  {title}
                </Typography>
                <Link href={`/${slug}`}>
                  <Avatar
                    size="xl"
                    variant="circular"
                    alt="thumbnail"
                    className="border-2 border-white hover:animate-bounce"
                    src={thumbnail}
                    />
                </Link>
              </CardBody>
            </Card>
          )}
        </div>
        <div className="invisible md:visible">
          {categoryList.length > 3 && (
            <div className="absolute right-0 flex items-center">
              <button
                className="flex items-center justify-center w-10 h-10 text-gray-700 bg-white rounded-full shadow focus:outline-none"
                onClick={scrollLeft}
                >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
              <button
                className="flex items-center justify-center w-10 h-10 ml-2 text-gray-700 bg-white rounded-full shadow focus:outline-none"
                onClick={scrollRight}
                >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}





// className="relative flex-none h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"