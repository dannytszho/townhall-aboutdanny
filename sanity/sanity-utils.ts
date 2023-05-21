import { groq } from "next-sanity";
import { City } from "@/types/City";
import { client } from "./lib/client";
import { Category } from "@/types/Category";

export async function getCities(): Promise<City[]> {
  return client.fetch(
    groq`*[_type == "city"]{
      _id,
      _createdAt,
      name,
      "image": image.asset->url,
      latitude,
      longitute,
      description
    }`
  )
}

export async function getCategories(): Promise<Category[]> {
  return client.fetch(
    groq`*[_type == "category"]{
      _id,
      _createdAt,
      title,
      "image": image.asset->url,
      "thumbnail": thumbnail.asset->url,
      order,
      subtitle,
      "slug": slug.current,
    }`
  )
}