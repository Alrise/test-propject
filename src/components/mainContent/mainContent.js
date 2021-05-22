import '../../App.css'

function MainContent({arrayBlock}) {
    return (
        <main className="main">
            {
                arrayBlock.map((item) => (
                    <div className="shop-item">
                        <p className="card-title">{item.name}</p>
                        <p className="card-brand">{item.brand}</p>
                        <p className="card-price">Цена: {item.price}</p>
                    </div>
                ))
            }
        </main>
    );
}

export default MainContent;