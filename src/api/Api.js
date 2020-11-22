import axios from "axios"


const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000',
});

export const pizzaApi = {
    async getPizzas(category, sortBy) {
        let endPoint;
        if (category === null) {
            endPoint = "";
        } else {
            endPoint = `category=${category}`
        }
        let dataPizzas = await instance.get(`pizzas?` + endPoint + `&_sort=${sortBy}&_order=asc`)
        return dataPizzas
    }
};