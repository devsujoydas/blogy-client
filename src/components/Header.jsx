import React from 'react'

const Header = () => {
    return (
        <header className="header section" data-header>
            <div className="container">

                <a href="#" className="logo">
                    <img src="/images/logo.svg" width="129" height="40" alt="Blogy logo" />
                </a>

                <nav className="navbar" data-navbar>
                    <ul className="navbar-list">

                        <li className="navbar-item">
                            <a href="#" className="navbar-link hover:underline" data-nav-link>Home</a>
                        </li>

                        <li className="navbar-item">
                            <a href="#" className="navbar-link hover:underline" data-nav-link>Recent Post</a>
                        </li>

                        <li className="navbar-item">
                            <a href="#" className="navbar-link hover:underline" data-nav-link>Membership</a>
                        </li>

                    </ul>
                </nav>

                <div className="wrapper">

                    <button className="search-btn" aria-label="search" data-search-toggler>
                        <ion-icon name="search-outline" aria-hidden="true"></ion-icon>

                        <span className="span">Search</span>
                    </button>

                    <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
                        <span className="span one"></span>
                        <span className="span two"></span>
                        <span className="span three"></span>
                    </button>

                    <a href="#" className="btn">Join</a>

                </div>

            </div>
        </header>
    )
}

export default Header