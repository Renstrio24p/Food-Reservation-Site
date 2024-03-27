
export type PostType = {
    _id: string;
    image: string;
    title: string;
    category: string;
    collection?: string | undefined;
    flavors?: string[] | undefined;
    description: string;
    price: number;
}