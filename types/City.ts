import { PortableTextBlock } from "sanity";

export type City = {
    _id: string;
    createdAt?: Date;
    name: string;
    order?: number;
    image: string;
    latitude: number;
    longitute: number;
    description?: PortableTextBlock[];
}