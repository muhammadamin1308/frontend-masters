import { useState, useEffect } from "react"

export default function Order(){
    const [pizzaTypes, setPizzaTypes] = useState([])
    async function fetchPizza() {
        const pizzaRes = await fetch('/api/pizzas')
        const pizzaJson = await pizzaRes.json()
        setPizzaTypes(pizzaJson)       
    }

    useEffect(() => {
        fetchPizza()
    },[])
}