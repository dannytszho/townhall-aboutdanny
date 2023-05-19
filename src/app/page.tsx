import { getCities } from "@/sanity/sanity-utils";

export default async function Home() {
  const cityList = await getCities();
  const res = await Promise.all(cityList);
  console.log(cityList)
  return (
    <div>
      <div>home</div>
    </div>
  )
}

