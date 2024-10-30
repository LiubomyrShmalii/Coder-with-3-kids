import React from "react";
import { useSelector } from "react-redux";
import s from "./FavoriteProductsPage.module.css";
import ProductsItem from "../../components/ProductsItem/ProductsItem";
import FilterContainer from "../../components/FilterContainer/FilterContainer";
import { Link } from "react-router-dom";
import cactus from "../../assets/images/Error404Page_cactus.png";
import fourImage from "../../assets/images/Error404Page_4.png";

export default function FavoriteProductsPage() {
  const favoriteProducts = useSelector((state) => state.favorites);

  return (
    <section className={s.container}>
      {favoriteProducts.length > 0 && (
        <>
      <div className={s.breadcrumbs}>
        <div className={s.crumbBox}>
          <Link to="/" className={s.crumbText}>
            Main page
          </Link>
        </div>
        <div className={s.line}></div>
        <div className={s.crumbBox}>
          <div className={s.crumbTextBlack}>
            Liked products
          </div>
        </div> 
      </div>
          <div className={s.head}>
            <h2 className={s.title}>Liked products</h2>
          </div>
        </>
      )}

      {favoriteProducts.length === 0 ? (
        <div className={s.emptyFavoritesContainer}>
          <div>
            <img src={fourImage} alt="Number four" className={s.fourImage} />
            <img src={cactus} alt="Cactus" className={s.errorImage} />
            <img src={fourImage} alt="Number four" className={s.fourImage} />
          </div>
          <h2 className={s.emptyTitle}>Liked product Not Found</h2>
          <p className={s.emptyDescription}>
            Unfortunately, you haven't added any favorite products yet.
            <br />
            Please go back to view all products.
          </p>

          <Link to="/all_products" className={s.allProductsBtn}>
            All Products
          </Link>
        </div>
      ) : (
        <div>
          <FilterContainer />
          <div className={s.productsGrid}>
            {favoriteProducts.map((product) => (
              <ProductsItem key={product.id} {...product} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
