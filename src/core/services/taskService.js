import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://qfu0uf8srk.execute-api.us-east-1.amazonaws.com',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  },
});

const getTodo = async (userId) => {
  return await axiosInstance.get('/api/v1/app/todos');
}

const createTodo = async (task) => {
  return await axiosInstance.post('/api/v1/app/todos', 
  {
    content: task
  });
}

export const taskService = {
  getTodo,
  createTodo
};
