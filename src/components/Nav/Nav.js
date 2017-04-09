import React, { Component } from 'react';

class Nav extends Component {
    render() {
        const { links } = this.props
        return (
            <div>
                {links.map((l, i) => {
                    return (
                        <a
                            key={i}
                            href={l.href}
                            onClick={this.handleLinkClick}
                        >
                            {l.label}
                        </a>
                    )
                })}
            </div>
        );
    }

    handleLinkClick = e => {
        e.preventDefault()
        const { pushState } = this.props
        pushState(e.target.getAttribute('href'))
    }
}

export default Nav;