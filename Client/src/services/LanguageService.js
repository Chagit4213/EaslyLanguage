import { apiClient } from "../Api/apiClient";


const GetAllCourses = async () => {
    try {
        const res = await apiClient.get("Language")
        return res.data
    } catch (error) {
        throw error;
    }
}
export default GetAllCourses;
