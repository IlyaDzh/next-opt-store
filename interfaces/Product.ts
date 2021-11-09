export interface IProduct {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    rating: number;
    reviews: [
        {
            id: number;
            name: string;
            rating: number;
            text: string;
        }
    ];
    countOfReviews: number;
    availabilityCount: number;
}
