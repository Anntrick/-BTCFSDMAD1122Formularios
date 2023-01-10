import axios from "axios";

export const myAPIService = {};

myAPIService.register = async (data) => {
    const apiUrl = `http://localhost:3000/auth/register`;
    let body = {
        name: data.name,
        email: data.email,
        phone: data.phone
    }

    return await axios.post(apiUrl, body);
}
 