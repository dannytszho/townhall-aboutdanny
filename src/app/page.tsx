import { getCategories } from "@/sanity/sanity-utils"
import Landing from "@/src/components/Landing"

export default async function Home() {
  const categoryList = await getCategories()
  console.log(categoryList)
  return (
    <Landing categoryList={categoryList} />
  )
}

