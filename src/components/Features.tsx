import { features } from '../utils/constants'

const Features = () => {
  return (
    <div className="container mx-auto h-auto">
      <h1 className="text-center text-[32px]">Features</h1>
      <div className="flex justify-between mt-20">
        {/* <div>
          <img src="/images/shipping.svg" alt="icon" />
          <h1 className="font-bold text-[20px] mt-[20px]">Free Shipping</h1>
          <h4 className="mt-1">Free shipping for order above $150</h4>
        </div> */}
        {features.map((feature) => {
          const { id, img, title, description } = feature
          return (
            <div key={id}>
              <img src={img} alt={title} />
              <h1 className="font-bold text-[20px] mt-[20px]">{title}</h1>
              <h4 className="mt-1">{description}</h4>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Features
