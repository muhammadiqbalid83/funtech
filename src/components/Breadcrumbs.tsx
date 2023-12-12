import { Link } from 'react-router-dom'

interface BreadcrumbsProps {
  title: string
  product?: boolean
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ title, product }) => {
  return (
    <div className="text-sm breadcrumbs mt-16">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li></li> */}
        {product && (
          <li>
            <Link to="/products">Products</Link>
          </li>
        )}{' '}
        <li>{title}</li>
      </ul>
    </div>
  )
}

export default Breadcrumbs
