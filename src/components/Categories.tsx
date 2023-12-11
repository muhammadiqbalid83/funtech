import { categories } from '../utils/constants'

const Categories = () => {
  return (
    <div className="mt-[100px] container mx-auto">
      <div className=" flex justify-between items-center">
        <div className="text-[32px]">Shop by Categories</div>
        <div className="text-[18px]">Show All</div>
      </div>
      <div className="flex flex-wrap justify-center gap-9 mt-12">
        {categories.map((item) => {
          const { id, category, img, description } = item
          return (
            <div
              className="card w-96 bg-base-100 bg-opacity-10 shadow-xl image-full"
              key={id}
            >
              <figure>
                <img src={img} alt={description} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{category}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Buy Now</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Categories
