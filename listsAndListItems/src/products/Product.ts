import { Item } from "../Item";

export interface Product extends Item{
    name: string;
    price: string;
    description: string;
    rating: number;
}