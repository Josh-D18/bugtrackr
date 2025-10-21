import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks";

export const getTasks = async () => {
  const res = await axios.get(API_URL);
  return res.data.tasks;
};

export const addTask = async (title) => {
  const res = await axios.post(`${API_URL}/add`, { title });
  return res.data;
};

export const deleteTask = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
