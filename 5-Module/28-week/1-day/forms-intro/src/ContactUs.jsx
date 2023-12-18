import { useState } from 'react'

export default function ContactUs() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [phoneType, setPhoneType] = useState('')
    const [comments, setComments] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        // if(!name.length) alert('hey i need a name')
        if(name === 'Brad Simpson') alert('brad get off my site')

        const bodyObj = {
            name,
            email,
            phone,
            phoneType,
            comments
        }

        console.log(bodyObj)

        setName('')
        setEmail('')
        setPhone('')
        setPhoneType('')
        setComments('')
    }


    return (
        <div>
            <h1>
                Contact Us
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input
                        id='name'
                        type='text'
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input
                        id='email'
                        type='text'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div>
                    <label htmlFor='phone'>Phone:</label>
                    <input
                        id='phone'
                        name='phone'
                        type='text'
                        onChange={e => setPhone(e.target.value)}
                        value={phone}
                    />
                    <select
                        name='phoneType'
                        onChange={e => setPhoneType(e.target.value)}
                        value={phoneType}
                    >
                        <option value='' disabled>
                            Select a phone type...
                        </option>
                        <option>Home</option>
                        <option>Work</option>
                        <option>Mobile</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='comments'>Comments:</label>
                    <textarea
                        id='comments'
                        name='comments'
                        onChange={e => setComments(e.target.value)}
                        value={comments}
                    />
                </div>

                <button> Submit Form</button>
            </form>
        </div>
    )
}
