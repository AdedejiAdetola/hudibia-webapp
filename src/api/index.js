import axios from "axios";

const URL = process.env.REACT_APP_SERVER_URL

const API = axios.create({  baseURL: URL });


API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
        //console.log(req.headers.authorization)
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