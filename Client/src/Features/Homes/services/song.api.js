import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.DEV ? "http://localhost:3000/api" : "/api",
    withCredentials: true
});

export async function getSong({ mood }) {
    const response = await api.get(`/songs?mood=${mood}`);
    return response.data;
}
