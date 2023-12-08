import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="">Products</Link>
        </li>
        <li>
          <Link to="">Cart</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
