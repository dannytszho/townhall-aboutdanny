import { getCities } from "@/sanity/sanity-utils";
import ThreeScene from "@/src/components/ThreeScene"

export default async function Earth() {
  const cityList = await getCities();
    return (
      <div>
        <div><ThreeScene cityList={cityList} /></div>
      </div>
    )
  }
  