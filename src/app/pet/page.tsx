import { getPets } from "@/sanity/sanity-utils"
import { SubPageRender } from "@/src/components/SubPageRender"

export default async function Pet() {
    const petList = await getPets()
    return (
        <>
            <SubPageRender itemList={petList} />
        </>
    )
}
