import React from 'react'
import {
    ProductsContainer,
    ProductsHeading,
    ProductsWrapper,
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductDesc,
    ProductPrice,
    ProductButton,
} from './ProductElements'

export const Products = ({ heading, data }) => {
    return (
        <ProductsContainer>
            <ProductsHeading>{heading} </ProductsHeading>
            <ProductsWrapper>
                {data.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImage src={product.img} alt={product.alt} />
                            <ProductTitle>{product.name}</ProductTitle>
                            <ProductDesc>{product.desc}</ProductDesc>
                            <ProductPrice>{product.price}</ProductPrice>
                            <ProductButton>{product.Button}</ProductButton>
                        </ProductCard>
                    )
                })}
            </ProductsWrapper>
        </ProductsContainer>
    )
}

export default Products
