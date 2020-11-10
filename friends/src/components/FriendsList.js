import React from 'react'

import { axiosWithAuth } from '../utils/axiosWithAuth'

class FriendsList extends React.Component {
    state = {
        friends: []
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

    render() {
        return(
            <div>
                <h2>Here are your Friends!</h2>
                {this.state.friends.map((friend) => {
                    return(
                        <div>
                            <h3>{friend.name}</h3>
                            <h4>{friend.age}</h4>
                            <h4>{friend.email}</h4>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default FriendsList