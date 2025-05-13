import Pizza from "./Pizza";

export default function Order() {
  const pizzaType = 'pepperoni'
  const pizzaSize = 'M'
  return (
    <div className="order">
      <h2>Create Order</h2>
      <form action="">
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select name="pizza-type" value={pizzaType}>
              <option value="pepperoni">Pepperoni pizza</option>
              <option value="hawaiian">Hawaii pizza</option>
              <option value="big_meat">Big-meat pizza</option>
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div>
              <span>
                <input checked={pizzaSize === "S"}
                  type="radio"
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input checked={pizzaSize === "M"}
                  type="radio"
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input checked={pizzaSize === "L"}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                />
                <label htmlFor="pizza-l">Large</label>
              </span>

            </div>
          </div>
          <button type="submit">Add to Cart</button>
          <div className="order-pizza">
            <Pizza
              name='pepperoni'
              desc='pep'
              image='/public/pizzas/pepperoni.webp'
            />
            <p>$1</p>
          </div>
        </div>
      </form>
    </div>
  )
}