import React from 'react'

import data from "../data"

const Test = () => {
    console.log(data)

    const products = data.filter((product) => product.categoryId <5);
    console.log(products)

    return (
        <div>
            test
        </div>
    )
}

export default Test
