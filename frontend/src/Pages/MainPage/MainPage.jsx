import React from 'react'
import Banner from '../../components/Banner/Banner'
import Categories from '../../components/Categories/Categories'
import DiscountForm from '../../components/DiscountForm/DiscountForm'
import SaleProducts from '../../components/SaleProducts/SaleProducts'

export default function MainPage() {
  return (
    <div>
      <Banner />
      <Categories />
      <DiscountForm />
      <SaleProducts />
    </div>
  )
}
