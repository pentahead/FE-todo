import axios from "axios";

const userServiceUrl =
  "https://backend-hpgudzech6h5e9e7.indonesiacentral-01.azurewebsites.net";
const todoServiceUrl =
  "https://backend2-eudvexdnfqe5h5d5.indonesiacentral-01.azurewebsites.net";

// Setup axios interceptor for JWT
const setupAuthInterceptor = (token) => {
  axios.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
};

// User service API
export const userApi = {
  login: (email, password) => {
    return axios
      .post(`${userServiceUrl}/login`, { email, password })
      .then((response) => {
        const { token } = response.data;
        setupAuthInterceptor(token);
        return response.data;
      });
  },

  register: (userData) => {
    return axios
      .post(`${userServiceUrl}/register`, userData)
      .then((response) => {
        const { token } = response.data;
        setupAuthInterceptor(token);
        return response.data;
      });
  },

  getUser: (userId) => {
    return axios
      .get(`${userServiceUrl}/users/${userId}`)
      .then((response) => response.data);
  },

  verifyToken: (token) => {
    setupAuthInterceptor(token);
    return axios
      .post(`${userServiceUrl}/verify-token`, { token })
      .then((response) => response.data);
  },
};

// Todo service API
export const todoApi = {
  getTodos: () => {
    return axios
      .get(`${todoServiceUrl}/todos`)
      .then((response) => response.data);
  },

  createTodo: (todoData) => {
    return axios
      .post(`${todoServiceUrl}/todos`, todoData)
      .then((response) => response.data);
  },
};
