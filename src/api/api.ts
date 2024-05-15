import axios from 'axios';


export interface Course {
    name: string;
    id: string;
    image: string;
    bgColor: string;
    tags: string[];
}



const BASE_URL = 'https://logiclike.com/docs';

export const getCourses = async (): Promise<Course[]> => {
    const url = `${BASE_URL}/courses.json`;
    try {
        const response = await axios.get(url);
        return response.data
    } catch (error) {
        console.error('Error fetching courses:', error);
        throw error;
    }
};