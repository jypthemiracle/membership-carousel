import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import { ItemCategory } from "./entity/ItemCategory";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Inserting a new Category into the database...");
    const category = new ItemCategory("ship", "blue");
    await connection.manager.save(category);
    console.log("Saved a new category with id: " + category.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Loading categories from the database...");
    const categories = await connection.manager.find(ItemCategory);
    console.log("Loaded categories: ", categories);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
