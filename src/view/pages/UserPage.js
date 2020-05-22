import React from "react";
// import { Route, Switch } from "react-router-dom";
import { Preloader } from '../partials/Preloader.js';
import { Header } from '../partials/Header.js';
import { Main } from '../partials/Main.js';
import { fetchUsers } from '../../services/userService.js';

class UserPage extends React.Component {
    constructor(props) {
        super(props);

        const isGrid = JSON.parse(localStorage.getItem('isGrid')) || false;

        this.state = {
            loading: true,
            users: [],
            inputValue: '',
            isGrid,
        }
    }

    componentDidMount() {
        this.onLoadUsers();
        this.loadUsers();
    }

    loadUsers() {
        fetchUsers()
            .then(users => this.setState({ users }))
    }

    onLoadUsers = () => {
        this.setState(prevState => {
            return {
                loading: !prevState.loading
            }
        })
    }

    onButtonClick = () => {
        this.setState((prevState, props) => {
            console.log(props, 'iz klicka')
            const isGrid = !prevState.isGrid;
            localStorage.setItem('isGrid', isGrid);

            return {
                isGrid
            }
        });
    }

    onRefreshClick = () => {
        this.setState({ loading: true }, () => {
            fetchUsers()
                .then(users => this.setState({ loading: false, users }))
        })
    }

    onInputChange = (e) => {
        this.setState({ inputValue: e.target.value })
    }

    render() {

        const { onButtonClick, onRefreshClick, onInputChange } = this;
        const { inputValue, loading, users, isGrid } = this.state;

        const updatedUsers = users.filter((user) => {
            return user.getFullName().toLowerCase().indexOf(inputValue.toLowerCase()) !== -1;
        });

        return (
            <React.Fragment>
                <Header onButtonClick={onButtonClick} onRefreshClick={onRefreshClick} isGrid={isGrid} title="BitPeople" />
                {users.length === 0 || loading ?
                    <Preloader />
                    :
                    <Main onInputChange={onInputChange} inputValue={inputValue} isGrid={isGrid} users={updatedUsers} />
                }
            </React.Fragment>
        );
    }

}

export default UserPage;