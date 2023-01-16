import logo from "../assets/logo-joke.png";

const Header = () => {
    return(
        <header className="header">
            <h1 className="logo">
                <img src={logo} alt="logo joke app" />
                Joke App
            </h1>
        </header>
    )
}

export default Header;