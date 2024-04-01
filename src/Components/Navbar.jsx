export default Navbar;

function Navbar()
 {  return <nav className="navbar">
 <a href="/" className="site-title"> SOIL </a>
 <ul className="navbar-items">
    <li className="active">
        <a href ="/Specials"> Specials</a>
        </li>
        <li className="active">
        <a href ="/Signin"> Sign in</a>
        </li>
        <li className="active">
        <a href ="/Profile">Profile</a>
    </li>
 </ul>
 </nav>
}

