import { getHobbies } from "@/sanity/sanity-utils"
import Image from "next/image"
import { Nav } from "@/src/components/Nav"

export default async function Hobbies() {
    const hobbiesList = await getHobbies()
    return (
        <>
            <Nav />
            <div className='flex flex-col'>
                <div className="pt-[30px] sm:pt-[120px]" />
                    <div
                    className="flex flex-row flex-wrap justify-center items-top gap-4 my-3"
                    >
                    {hobbiesList.map((hobby) => {
                        return (
                        <div key={hobby._id} className="flex flex-col items-center w-96 min-h-[456px] bg-main-slate pt-10 px-10 pb-9">
                            <Image
                            src={hobby.image} width={220} height={220} alt={hobby.title} />
                            <h2 className='text-white pt-7 self-start font-montserrat font-bold'>{hobby.title}</h2>
                            {/* <p className='text-white pt-7 self-start'>{hobby.description}</p> */}
                        </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
