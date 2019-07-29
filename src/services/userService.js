import { User } from "../entites/User";
const axios = require('axios');

const fetchUsers = () => {
    return axios.get('https://randomuser.me/api/?results=50')
        .then(response => (response.data))
        .then(users => users.results.map(user => {
            // console.log(users);
            return new User(user)
        })
        )
}

export { fetchUsers }