import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { links } from '../utils/constants'
import { CartButtons } from '.'
const Header = () => {
  return (
    <div className="py-3 flex justify-center">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">Funtech</Link>
          <button type="button" className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
        </ul>
        <CartButtons />
      </div>
    </div>
  )
}

export default Header
