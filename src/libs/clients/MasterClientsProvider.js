import BaseClient from "./BaseClient";
// import UserClient from "./UserClient";

export function MasterClientsProvider() {

    const productsClient = new BaseClient("/products");
    const authClient = new BaseClient("/auth/login");
    const customersClient = new BaseClient("/users");
    const catagoriesClient = new BaseClient("/products/categories");
    const catagoryProductClient = new BaseClient("/products/category");
    const usersClient = new BaseClient("/users")

    return {
        productsClient,
        authClient,
        customersClient,
        catagoriesClient,
        catagoryProductClient,
        usersClient
    };
};
