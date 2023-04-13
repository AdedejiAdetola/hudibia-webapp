import axios from "axios";

const API = axios.create({  baseURL: process.env.REACT_APP_SERVER_URL }); //"proxy": "http://localhost:5000",

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
});

const user_url = '/users';

export const signUp = (signUpData) => API.post(`${user_url}/signup`, signUpData)

//const post_url = '/posts';

// export const fetchPosts = () => API.get(post_url);
// export const createPosts = (newPost) => API.post(post_url, newPost) //to create new post and push to the post_url
// export const updatePosts = (id, updatedPost) => API.patch(`${post_url}/${id}`, updatedPost)
// export const deletePosts = (id) => API.delete(`${post_url}/${id}`)
// export const likePosts = (id) => API.patch(`${post_url}/${id}/likePosts`)

// export const signIn = (formData) => API.post(`${user_url}/signin`, formData)