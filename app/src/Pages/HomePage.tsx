import imgCafe from '../assets/cafe.png'

const HomePage = () => {
  return (
    <div className='flex w-3/4'>
      <div className='flex-initial w-1/2 mr-4'>
        <p className='mb-4'><strong>About Us:</strong> At Moon Beans, we believe that great coffee knows no bounds—not even the Earth's atmosphere! Nestled in the serene and otherworldly landscape of the moon, our coffee shop offers a unique experience that is truly out of this world. Whether you're an astronaut on a mission or a space tourist exploring the cosmos, Moon Beans is your go-to spot for a stellar cup of coffee.</p>
        <p className='mb-4'><strong>Our Coffee:</strong> We source the finest beans from Earth and roast them to perfection right here on the moon. Our zero-gravity brewing techniques ensure that every cup is smooth, rich, and full of flavor. From classic espresso to innovative lunar lattes, our menu has something for every coffee lover.</p>
        <p className='mb-4'><strong>Ambiance:</strong> Imagine sipping your favorite brew while gazing at the Earthrise through our panoramic windows. Our cozy, modern interior is designed to make you feel at home, even when you're 238,855 miles away. With comfortable seating and a relaxed atmosphere, Moon Beans is the perfect place to unwind and enjoy the beauty of space.</p>
        <p className='mb-4'><strong>Events:</strong> Join us for special events like stargazing nights, lunar latte art workshops, and astronaut meet-and-greets. There's always something exciting happening at Moon Beans!</p>
        <p className='mb-4'><strong>Visit Us:</strong> Ready to embark on a coffee adventure like no other? Visit Moon Beans, located in the Sea of Tranquility, just a short hop from the Apollo 11 landing site. We can't wait to serve you a cup of coffee that's truly out of this world!</p>
      </div>
      <img className='inline w-96 h-96 flex-initial m-4 rounded-md' src={imgCafe} alt='Coffee on the moon!' />
    </div>
  )
}

export default HomePage