export type Pet = {
    _id: string;
    createdAt: Date;
    title: string;
    order: number;
    image: string;
    imageInfo: {
        width: number;
        height: number;
    }
}