const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/509922/pexels-photo-509922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-abu-hitam">
            Design Your Comfort Zone
          </h1>
          <p className="mb-5 text-abu-hitam">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-neutral">Shop Now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
