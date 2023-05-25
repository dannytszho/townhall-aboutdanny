import { getPets } from "@/sanity/sanity-utils"
import Image from "next/image"

export default async function Pet() {
    const petList = await getPets()
    return (
        <div className='flex flex-col'>
            <div className="pt-[30px] sm:pt-[120px]" />
                <div
                className="flex flex-row flex-wrap justify-center items-top gap-4 my-3"
                >
                {petList.map((pet) => {
                    return (
                    <div key={pet._id} className="flex flex-col items-center w-96 min-h-[456px] bg-main-slate pt-10 px-10 pb-9">
                        <Image
                        src={pet.image} width={220} height={220} alt={pet.title} />
                        <h2 className='text-white pt-7 self-start font-montserrat font-bold'>{pet.title}</h2>
                        {/* <p className='text-white pt-7 self-start'>{pet.description}</p> */}
                    </div>
                    )
                })}
            </div>
        </div>
    )
}
