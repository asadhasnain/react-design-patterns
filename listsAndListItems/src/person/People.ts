import { Item } from "../Item";

export interface People extends Item {
    name: string;
    age: number;
    hairColor: string;
    hobbies: string[];
}