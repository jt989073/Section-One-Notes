import { useState } from "react"
import { useDispatch } from "react-redux"
import { createTweet } from "./store/tweet"


export default function CreateTweet() {
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = async e => {
        e.preventDefault()

        if (message.length === 0) {
            setError('message must have length')
            return
        }

        const reqObj = {
            message
        }
        if (!error) {
            const createdTweet = await dispatch(createTweet(reqObj))

            if (createdTweet) {
                setMessage('')
            }
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>{error}</div>
            <input
                value={message}
                onChange={e => {
                    setError('')
                    setMessage(e.target.value)
                }}
            />
            <button>Create Tweet</button>
        </form>
    )
}
