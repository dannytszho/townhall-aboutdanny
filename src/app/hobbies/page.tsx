'use client'
import { getHobbies } from "@/sanity/sanity-utils"
// import Image from "next/image"
// import { Nav } from "@/src/components/Nav"
// import { useState } from "react";
// import { LargeImage } from "@/src/components/LargeImg";
import { HobbiesRender } from "@/src/components/HobbiesRender";

export default async function Hobbies() {
    const hobbiesList = await getHobbies()
    console.log(hobbiesList)

    return (
        <>
            <HobbiesRender hobbiesList={hobbiesList} />
        </>
    )
}
