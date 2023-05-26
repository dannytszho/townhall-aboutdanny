'use client'
import { useState } from "react";
import { Nav } from "./Nav";
import Image from "next/image";
import { LargeImage } from "./LargeImg";

export const SubPageRender = ({ itemList }:any) => {
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
                    {itemList.map((item:any) => {
                        return (
                        <div key={item._id} className="flex flex-col items-center w-96 min-h-[456px] bg-main-slate pt-10 px-10 pb-9">
                            <Image
                            src={item.image} width={400} height={220} className="hover:cursor-pointer" onClick={() => openLarge({ ref: item.imageRef, width: item.imageInfo.width, height: item.imageInfo.height })} alt={item.title} />
                            {/* <h2 className='text-white pt-7 self-start font-montserrat font-bold'>{item.title}</h2> */}
                        </div>
                        )
                    })}
                </div>
                <LargeImage imageInfo={imageInfo} setOpen={setOpen} open={open} />
            </div>
        </>
    )
            }