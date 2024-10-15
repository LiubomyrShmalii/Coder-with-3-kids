import React, { useEffect } from 'react'
import { getProductsByCategory } from '../../requests/allProducts'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import ProductsItem from '../../components/ProductsItem/ProductsItem';
import s from './ProductsByCategoryPage.module.css'
import FilterContainer from '../../components/FilterContainer/FilterContainer';

export default function ProductsByCategoryPage() {

  const { categoryId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => 
    dispatch(getProductsByCategory(categoryId)), []);

  const productsByCategoryState = useSelector((store) => store.productsByCategory);
  const productsByCategory = productsByCategoryState.data;
  

  return (
    <section className={s.container}>
      <div className={s.breadcrumbs}>
        <div className={s.crumbBox}>
          <span className={s.crumbText}>Main page</span>
        </div>
        <div className={s.line}></div>
        <div className={s.crumbBox}>
          <span className={s.crumbTextBlack}>{productsByCategoryState.category.title}</span>
        </div>
      </div>
      <div className={s.head}>
        <h2 className={s.title}>{productsByCategoryState.category.title}</h2>
      </div>
      <FilterContainer />
      <div className={s.productsGrid}>
        {productsByCategory.map((productsState) => (
          <ProductsItem key={productsState.id} {...productsState} />
        ))}
      </div>
    </section>
  )
}
