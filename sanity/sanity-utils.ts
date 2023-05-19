import { createClient, groq } from "next-sanity";
import { City } from "@/types/City";
import { client } from "./lib/client";

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