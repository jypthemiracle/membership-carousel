import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne} from "typeorm";
import { ItemCategory } from "./ItemCategory";

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    detail: string;

    @ManyToOne((type) => ItemCategory, (category) => category.items)
    category: ItemCategory;
}