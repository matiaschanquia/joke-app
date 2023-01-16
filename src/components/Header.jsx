import logo from "../assets/logo-joke.png";

const Header = () => {
    return(
        <header>
            <h1>
                <img src={logo} alt="logo joke app" />
                Joke App
            </h1>
        </header>
    )
}

export default Header;