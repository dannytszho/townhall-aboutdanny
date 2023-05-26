import { useState } from "react";
import { Nav } from "./Nav";
import Image from "next/image";
import { LargeImage } from "./LargeImg";

export const HobbiesRender = ({ hobbiesList }:any) => {
    const [imageInfo, setImageInfo] = useState({
        src: "",
        width: 0,
        height: 0,
    });   
    const [open, setOpen] = useState(false);

    const openLarge = ({ ref, width, height }: { ref: string, width: number, height: number }) => {
    setImageInfo({
        src: ref,
        width,
        height,
    });
    setOpen(true);
    };

    return (
        <>
            <Nav />
            <div className='flex flex-col'>
                <div className="pt-[30px] sm:pt-[120px]" />
                    <div
                    className="flex flex-row flex-wrap justify-center items-top gap-4 my-3"
                    >
                    {hobbiesList.map((hobby:any) => {
                        return (
                        <div key={hobby._id} className="flex flex-col items-center w-96 min-h-[456px] bg-main-slate pt-10 px-10 pb-9">
                            <Image
                            src={hobby.image} width={220} height={220} onClick={() => openLarge({ ref: hobby.imageRef, width: hobby.imageInfo.width, height: hobby.imageInfo.height })} alt={hobby.title} />
                            <h2 className='text-white pt-7 self-start font-montserrat font-bold'>{hobby.title}</h2>
                            {/* <p className='text-white pt-7 self-start'>{hobby.description}</p> */}
                        </div>
                        )
                    })}
                </div>
                <LargeImage imageInfo={imageInfo} setOpen={setOpen} open={open} />
            </div>
        </>
    )
            }