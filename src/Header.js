import './App.css';
function Header(props) {
    const [inputValue, onSearchItem] = props;

    return (

        <div>
            <header className={"header"}>
                <p>Le PAPION</p>
                <input
                    className="search-field"
                    type ="text"
                    value = {inputValue}
                    onChange={onSearchItems}/></header>
        />
        </div>
    );
}

export default Header;