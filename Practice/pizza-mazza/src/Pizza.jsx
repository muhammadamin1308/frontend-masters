import logo from './assets/images/logo.png'
export default function Pizza() {
  return (
    <div className='pizza-cont max-w-full flex flex-col items-center border-r p-4'>
      <h2 className='text-amber-400 rounded-md bg-d-blue-1 p-2'>Place your Order</h2>
      <div className="pizza-details flex flex-col items-center border-b-1 rounded-xl p-4 m-4">
        <div className="pizza-type flex flex-col items-center pb-8">
          <label htmlFor="pizza-type">Pizza Type</label> <span className='font-black text-xl'>↓</span>
          <select
            name="pizza-type"
            value="pizza-type"
          >
            <option key='pepperoni' value="pepperoni">
              Pepperoni Pizza
            </option>
            <option key='bbq' value="bbq">
              BBQ Pizza
            </option>
          </select>
        </div>
        <div className="flex flex-col items-center pizza-size">
          <label htmlFor="pizza-size">Pizza Size</label>
          <span className='font-black text-xl'>↓</span>
          <div>
            <span>
              <input
                type="radio"
                name="pizza-size"
                value="S"
                id="pizza-s"
              />
              <label className='size' htmlFor="pizza-s">Small</label>
            </span>
            <span>
              <input
                type="radio"
                name="pizza-size"
                value="M"
                id="pizza-m"
              />
              <label className='size' htmlFor="pizza-m">Medium</label>
            </span>
            <span>
              <input
                type="radio"
                name="pizza-size"
                value="L"
                id="pizza-l"
              />
              <label className='size' htmlFor="pizza-l">Large</label>
            </span>
          </div>
        </div>
      </div>
      <div className="pizza-cart flex flex-col items-center border-b-1 rounded-xl  p-4 m-4">
        <h4>Pepperoni</h4>
        <p>Mozzarella Cheese, Pepperoni</p>
        <img className='w-32 m-4 rounded-md' src={logo} alt="example" />
        <p>$10</p>
      </div>
    </div>
  )

}