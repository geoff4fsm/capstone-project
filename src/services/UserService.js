import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/users";

class UserService {

    // get all users

    getUsers =() => {

        return axios.get(USER_API_BASE_URL);

    }

    // create new user

    createUser = (user) => {

        return axios.post(USER_API_BASE_URL, user);

    }

    // get specific user by id

    getUserById = (userId) => {

        return axios.get(USER_API_BASE_URL + '/' + userId);

    }

    // update existing user by id

    updateUser = (user, userId) => {

        return axios.put(USER_API_BASE_URL + '/' + userId, user);

    }

    // delete existing user by id

    deleteUser = (userId) => {

        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }
}

export default new UserService();