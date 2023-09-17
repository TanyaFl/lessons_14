import React from "react";
import './NavigationBar.css';

function NavigationBar() {
    const links = [
        { name: "The awesome link 1", href: "#" },
        { name: "Anoter site link 2", href: "#" },
        { name: "Some site link 3", href: "#" },
        { name: "The navigation link #4", href: "#" },
        { name: "Link 5 with same destination as others", href: "#" }
    ];
    
    return (
        <div className="navigation-bar">
            <ul className="navigation-menu">
                {links.map((l, no) => (
                    <li key={no}>
                        <a className="menu-item" href={l.href}>{l.name}</a>
                    </li>)
                )}
            </ul>
        </div>
    );
}

export default NavigationBar;
