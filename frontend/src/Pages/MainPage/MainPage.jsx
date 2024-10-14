import React from 'react'
import Banner from '../../components/Banner/Banner'
import Categories from '../../components/CategoriesContainer/CategoriesContainer'
import DiscountForm from '../../components/DiscountForm/DiscountForm'
import SaleProductsContainer from '../../components/SaleProductsContainer/SaleProductsContainer'

export default function MainPage() {
  return (
    <div>
      <Banner />
      <Categories />
      <DiscountForm />
      <SaleProductsContainer />
    </div>
  )
}
