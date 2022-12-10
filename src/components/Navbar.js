import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar(){
    return <nav className="nav">
        <Link to="/" className="site-title">Build Dev</Link>
        <ul>
            <CustomLink to="/employee">Employee</CustomLink>
            <CustomLink to="/customer">Customer</CustomLink>
            <CustomLink to="/property">Property</CustomLink>
            <CustomLink to="/booking">Booking</CustomLink>
            <CustomLink to="/about">About Us</CustomLink>
            <CustomLink to="/contact">Contacts</CustomLink>
            <CustomLink to="/login">Login</CustomLink>
            <CustomLink to="/register">Register</CustomLink>
        </ul>
    </nav>
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
        <li className={isActive ? "active" : ""} >
            <Link to={to} {...props} >
                {children}
            </Link>
        </li>
    )
}