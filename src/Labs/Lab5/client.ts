import axios from "axios";
// create a client library
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const fetchWelcomeMessage = async () => {
    const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
    return response.data;
};

// work with remote objects on a server asychronously
const ASSIGNMENT_API = `${REMOTE_SERVER}/lab5/assignment`;
export const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_API}`);
    return response.data;
};
export const updateTitle = async (title: string) => {
    const response = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
    return response.data;
};

// work with remote arrays on a server asychronously
const TODOS_API = `${REMOTE_SERVER}/lab5/todos`;
export const fetchTodos = async () => {
    const response = await axios.get(TODOS_API);
    return response.data;
};

// delete data from a server asynchronously
export const removeTodo = async (todo: any) => {
    const response = await axios.get(`${TODOS_API}/${todo.id}/delete`);
    return response.data;
};
// delete data from servers with HTTP DELETE Requests
export const deleteTodo = async (todo: any) => {
    const response = await axios.delete(`${TODOS_API}/${todo.id}`);
    return response.data;
  };

// create new data in a server asynchronously
export const createTodo = async () => {
    const response = await axios.get(`${TODOS_API}/create`);
    return response.data;
};
// post data to servers with HTTP POST Requests
export const postTodo = async (todo: any) => {
    const response = await axios.post(`${TODOS_API}`, todo);
    return response.data;
}; 

// udpate data on servers with HTTP PUT Requests
export const updateTodo = async (todo: any) => {
    const response = await axios.put(`${TODOS_API}/${todo.id}`, todo);
    return response.data;
};
  