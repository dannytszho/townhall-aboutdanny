export type Category = {
    _id: string;
    createdAt: Date;
    title: string;
    subtitle: string;
    order: number;
    image: string;
    thumbnail: string;
    slug?: string;
}