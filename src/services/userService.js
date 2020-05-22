import { User } from "../entites/User";
import axios from 'axios';

const fetchUsers = async () => {
    const response = await axios.get('https://randomuser.me/api/?results=50');
    const users = response.data.results;
    return users.map(user => new User(user))
}


export { fetchUsers }