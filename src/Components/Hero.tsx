const Hero = () => {
  return (
    <div className='container'>
      {/* Header */}
      <div className="flex flex-row justify-start gap-8 py-4">
        <div><img src='./navigation/arrow-left.svg' className="logo w-10 h-10 object-cover" alt="Right arrow logo" /></div>
        <div className="font-bold text-2xl">Member Community</div>
      </div>
      {/* Logo */}
      <div>
        <img src='./hero.svg' className="rounded-md m-2" alt="Vite logo" />
      </div>
      {/* Tagline */}
      <div className="flex flex-col items-center justify-center text-center p-4 rounded-lg text-lg">
        Multiply your earnings by participating more in the community!
      </div>
    </div>
  )
}

export default Hero