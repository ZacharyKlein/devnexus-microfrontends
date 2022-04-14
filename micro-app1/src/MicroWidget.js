import React, {useState} from 'react'

const MicroWidget = () => {

    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');

    const submit = () => {
        console.log({name});

        fetch(`${process.env.REACT_APP_BACKEND_API_BASE_URL}/app1/?` + new URLSearchParams({name}))
            .then(response => {

                console.log({response})

                return response.text()
            })
            .then(text => {
                console.log(`setting greeting to ${text}`);
                setGreeting(text)
            })
            .catch(e => console.warn(e));

    }

    return <div>
        <h2>Micro Widget from Micro App 1</h2>

        <form>
            <input type="text" value={name} onChange={e => setName(e.target.value)}  />
        </form>

        <button onClick={submit}>Click Me</button>

        <h3>{greeting}</h3>
    </div>
}

export default MicroWidget;
