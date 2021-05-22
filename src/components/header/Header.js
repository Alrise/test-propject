import '../../App.css'

function Header({onChangeValueUser, inputValueSearch}) {
    const changeUserValue = (e) => {
        const {value} = e.target;
        onChangeValueUser(value);
    }
    return (
        <header className="header">
            <p className="title">

            </p>
            <div className="header-middle">
                <input
                    type="text"
                    className="search-bar"
                    onChange={changeUserValue}
                >

                </input>
                {inputValueSearch ? <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div> : null}
            </div>
        </header>
    );
}

export default Header;