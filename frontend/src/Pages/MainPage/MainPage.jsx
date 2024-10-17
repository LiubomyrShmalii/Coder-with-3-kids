import React from 'react'
import BannerContainer from '../../components/BannerContainer/BannerContainer'
import Categories from '../../components/CategoriesContainer/CategoriesContainer'
import DiscountForm from '../../components/DiscountFormContainer/DiscountFormContainer'
import SaleProductsContainer from '../../components/SaleProductsContainer/SaleProductsContainer'

export default function MainPage() {
  return (
    <div>
      <BannerContainer />
      <Categories />
      <DiscountForm />
      <SaleProductsContainer />
    </div>
  )
}
