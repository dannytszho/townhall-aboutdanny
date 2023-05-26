export type Hobby = {
    _id: string;
    createdAt: Date;
    title: string;
    order: number;
    image: string;
    imageRef: string;
    imageInfo: {
        width: number;
        height: number;
    }
}