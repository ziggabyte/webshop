interface ProductRating {
    rate: number;
    count: number;
}

export interface Product {
    id: string;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating: ProductRating;
}

export interface Values {
    address1: string;
    address2?: string | undefined;
    city: string;
    country: string;
    email: string;
    firstName: string;
    lastName: string;
    zipCode: string;
}