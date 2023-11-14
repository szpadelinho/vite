import {useState} from "react";

const products = [
    {id: 1, name: "Traktorek", price: 15},
    {id: 2, name: "Samochodek", price: 35},
    {id: 3, name: "Motorek", price: 55},
    {id: 4, name: "Rowerek", price: 75},
]

const ProductForm = () => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)


    function submitHandler(e){

        e.preventDefault()

        const product = {
            id: Math.random(),
            name: name,
            price: price
        }

        products.push(product)
        console.log(products)
        setName("")
        setPrice(0)
    }

    return(
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Nazwa produktu" value={name} onChange={e=> setName(e.target.value)}/>
            <input type="number" placeholder="Cena produktu" value={price} onChange={e=> setPrice(e.target.value)}/>
            <button type="submit">Dodaj produkt</button>
        </form>
    )
}

export default ProductForm;