import React from 'react'
import { Link } from 'react-router-dom'

import UpdateFriend from './UpdateFriend'

import { axiosWithAuth } from '../utils/axiosWithAuth'

class FriendsList extends React.Component {
    constructor() {
        super()
        this.state= {
            friends: []
        }
    }

    componentDidMount() {
        this.getFriends()
    }

    getFriends = () => {
        axiosWithAuth()
            .get('/friends')
            .then((res) => {
                this.setState({
                    friends: res.data
                })
            })
            .catch((err) => {
                alert(`Got an error there bud.`)
            })
    }

    handleUpdate = () => {
        return(
            <UpdateFriend />
        )
    }

    render() {
        return(
            <div>
                <h2>Here are your Friends!</h2>
                <Link to='/add-friend'>Add a Friend</Link>
                {this.state.friends.map((friend) => {
                    return(
                        <div>
                            <h3>{friend.name}</h3>
                            <h4>{friend.age}</h4>
                            <h4>{friend.email}</h4>
                            <button onClick={this.handleUpdate}>Update</button>
                            <button onClick={this.handleDelete}>Delete</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default FriendsList