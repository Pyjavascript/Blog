import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to='/' className='NavLink'>Home</Link></li>
                <li><Link to='/about' className='NavLink'>About</Link></li>
                <li><Link to='/articles' className='NavLink'>Articles</Link></li>
            </ul>
        </nav>
    )
}