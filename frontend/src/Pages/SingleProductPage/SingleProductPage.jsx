import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../../requests/allProducts';
import { useParams } from 'react-router-dom';

export default function SingleProductPage() {

  const { id } = useParams()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []);

  const productState = useSelector((store) => store.singleProduct);
  console.log(productState);
  

  return (
    <div>
      <h2>
      {productState && productState.title}
        SingleProductPage
      </h2>

    </div>
  )
}
