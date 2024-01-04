import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://qfu0uf8srk.execute-api.us-east-1.amazonaws.com'
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

const deleteTodo = async (id) => {
    return await axiosInstance.delete(`/api/v1/app/todos/${id}`);
  }

export const taskService = {
  getTodo,
  createTodo,
  deleteTodo
};
