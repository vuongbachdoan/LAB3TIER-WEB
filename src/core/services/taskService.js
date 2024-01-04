import axios from "axios";

const getTodo = async (userId) => {
    return await axios.get(`https://qfu0uf8srk.execute-api.us-east-1.amazonaws.com/api/v1/app/todos`);
}

export const taskService = {
    getTodo
};