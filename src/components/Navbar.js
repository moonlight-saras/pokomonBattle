import { Link, useMatch, useResolvedPath } from "react-router-dom"
import * as React from 'react';
import HomeIcon from '../images/Vector.png';
import Logo from '../images/Pokemon Logo.png';

export default function Navbar() {
  return (
    <div className='head'>
      <div className='logo'>
        <img className='dimensionLogo' src={Logo} alt="" />

      </div>
      <div className='navi'>
        <nav className="nav">
          <ul>
            <CustomLink to="/"><img className='ector' src={HomeIcon} alt="" /> Home</CustomLink>
            <CustomLink to="/battle">Battle</CustomLink>
            <CustomLink to="/history">History</CustomLink>
            <CustomLink to="/pokedex">Pokedex</CustomLink>
            <CustomLink to="/about">About</CustomLink>
          </ul>
        </nav>
      </div>
    </div>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
