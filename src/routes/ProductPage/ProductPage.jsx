import React from 'react'
import ProductContext from '../../components/ProductContext/ProductContext'
import ProductTool from '../../components/ProductTool/ProductTool'

export default function ProductPage() {
    return (
        <div>
            <ProductTool></ProductTool>
            <ProductContext></ProductContext>
        </div>
    )
}
