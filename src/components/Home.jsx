import { useEffect, useState } from "react"



const Home = () => {
    const [input, setInput] = useState("");
    const [jokes, setJokes] = useState([]);
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setJokes([]);
        setLoading(true);
        fetch(`https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?type=single&contains=${input}&amount=10`)
            .then(response => response.json())
            .then(data => {
                if(data.error) {
                    alert("There are no jokes with that search");
                } else {
                    setJokes(data.jokes);
                };
                setLoading(false);
            })
            .catch(err => console.log(err));
    }

    return(
        <div className="container-home">
            <h2 className="titulo">Do a joke search</h2>
            <form className="form-search" onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder="Enter your search..."/>
                <button type="submit">Search</button>
            </form>
            {
                loading && <p className="loading">Loading...</p>
            }
            <ul className="container-jokes">
                {
                    jokes.map(item => (
                        <li key={item.id}>{item.joke}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Home;