import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const initialFriend = {
    id: 0,
    name: '',
    age: 0,
    email: '',
  }

const AddFriend = () => {
    const [ friend, setFriend ] = useState(initialFriend)
    const { push } = useHistory()

    const handleChanges = (e) => {
        const { name, value } = e.target

        setFriend({
            ...friend,
            [name]: value
        })
    }

    const handleAddFriend = (e) => {
        e.preventDefault()
        axiosWithAuth()
            .post('/friends', friend)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                alert(`${err.message}`)
            })
        push('/friends')
    }

    return(
        <div>
            <form onSubmit={handleAddFriend}>
                <label>Name:
                    <input
                    name='name'
                    input='text'
                    value={friend.name}
                    onChange={handleChanges}
                    >
                    </input>
                </label>
                <label>Age:
                    <input
                    name='age'
                    input='text'
                    value={friend.age}
                    onChange={handleChanges}
                    >
                    </input>
                </label>
                <label>Email:
                    <input
                    name='email'
                    input='text'
                    value={friend.email}
                    onChange={handleChanges}
                    >
                    </input>
                </label>
                <button>Add Friend</button>
            </form>
        </div>
    )
}

export default AddFriend