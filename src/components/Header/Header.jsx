import "./Header.css"

export default function Header() {

    return (
        <header>
            <h1>ProductsOnline.com</h1>
            <h2><a href="/">Our Blog</a></h2>
            <div className="head-container__icons-container">
                <div className="head-container__shopping-card">
                    <img 
                        src="/assets/images/shopping-cart.png" 
                        className='shopping-card__img' 
                    />
                </div>
                <div className="head-container__manager-menu">
                    <img 
                        src="/assets/images/login.png" 
                        className='shopping-card__img' 
                    />
                </div>
            </div>
        </header>
    )
}