import { groq } from "next-sanity";
import { City } from "@/types/City";
import { client } from "./lib/client";
import { Category } from "@/types/Category";
import { Pet } from "@/types/Pet";
import { Hobby } from "@/types/Hobbies";

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

export async function getPets(): Promise<Pet[]> {
  return client.fetch(
    groq`*[_type == "pet"]{
      _id,
      _createdAt,
      title,
      "image": image.asset->url,
      order,
      'imageRef':image.asset._ref,
      'imageInfo':image.asset->metadata.dimensions,
    }`
  )
}

export async function getHobbies(): Promise<Hobby[]> {
  return client.fetch(
    groq`*[_type == "hobby"]{
      _id,
      _createdAt,
      title,
      'image': image.asset->url,
      'imageRef':image.asset._ref,
      'imageInfo':image.asset->metadata.dimensions,
      order,
    }`
  )
}

export async function getFamily(): Promise<Hobby[]> {
  return client.fetch(
    groq`*[_type == "family"]{
      _id,
      _createdAt,
      title,
      'image': image.asset->url,
      'imageRef':image.asset._ref,
      'imageInfo':image.asset->metadata.dimensions,
      order,
    }`
  )
}