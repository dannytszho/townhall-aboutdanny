import { getCities } from "@/sanity/sanity-utils";
import { Nav } from "@/src/components/Nav";
import ThreeScene from "@/src/components/ThreeScene"

export default async function Earth() {
  const cityList = await getCities();
    return (
      <div className="flex flex-col">
        <div><ThreeScene cityList={cityList} /></div>
        <div className="bg-black">
          <Nav />
        </div>
      </div>
    )
  }
  