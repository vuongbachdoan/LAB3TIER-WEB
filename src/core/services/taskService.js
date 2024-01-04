import axios from "axios";

const getTodo = async (userId) => {
    return await axios.get(`https://qfu0uf8srk.execute-api.us-east-1.amazonaws.com/api/v1/app/todos`);
}

const createTodo = async (task) => {
    return await axios.post(`https://qfu0uf8srk.execute-api.us-east-1.amazonaws.com/api/v1/app/todos`, {
        content: task
    });
}

export const taskService = {
    getTodo,
    createTodo
};