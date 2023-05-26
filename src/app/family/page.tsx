import { getFamily } from "@/sanity/sanity-utils";
import { Nav } from "@/src/components/Nav";
import { SubPageRender } from "@/src/components/SubPageRender";

export default async function Family() {
    const familyList = await getFamily();
    return (
        <>
            <SubPageRender itemList={familyList} />
        </>
    )
}
