import api from "../utils/api";

export const create = async (judul, deskripsiSingkat, deskripsiPanjang, gambar) => {
    try {
        const response = await api.post("/about/", {judul, deskripsiSingkat, deskripsiPanjang, gambar});
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || "Login failed");
    }
};