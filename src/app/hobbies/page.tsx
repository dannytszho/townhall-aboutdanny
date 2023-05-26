import { getHobbies } from "@/sanity/sanity-utils"
import { SubPageRender } from "@/src/components/SubPageRender";

export default async function Hobbies() {
    const hobbiesList = await getHobbies()

    return (
        <>
            <SubPageRender itemList={hobbiesList} />
        </>
    )
}
