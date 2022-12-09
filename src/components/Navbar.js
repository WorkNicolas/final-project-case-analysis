export default function Navbar(){
    return <nav className="nav">
        <a href="/" className="site-title">Build Dev</a>
        <ul>
            <CustomLink href="/employee">Employee</CustomLink>
            <CustomLink href="/customer">Customer</CustomLink>
            <CustomLink href="/property">Property</CustomLink>
            <CustomLink href="/booking">Booking</CustomLink>
        </ul>
    </nav>
}

function CustomLink({href, children, ...props}){
    const path = window.location.pathname
    return(
        <li className={path === href ? "active" : ""} >
            <a href={href} {...props} >{children}</a>
        </li>
    )
}