import http from "./http-common";

export const getCategories = async () => await http.get("/categories");

