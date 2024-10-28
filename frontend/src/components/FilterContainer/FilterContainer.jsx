import React, { useEffect, useState } from "react";
import s from "./FilterContainer.module.css";
import { filterByPriceAction, getCheapProductsAction, sortAllProductsAction } from "../../store/reducers/allProductsReducer";
import { useDispatch } from "react-redux";

export default function FilterContainer() {

  const dispatch = useDispatch();



  const [checked, setChecked] = useState(false);
  const handlCheck = () => setChecked(!checked);
  const handlClick = e => dispatch(getCheapProductsAction(e.target.checked))

  const handlOrder = e => dispatch(sortAllProductsAction(e.target.value));

  const [ minValue, setMinValue ] = useState(0);
  const [ maxValue, setMaxValue ] = useState(Infinity);


  const handleMinValue = e => setMinValue(e.target.value || 0);
  const handleMaxValue = e => setMaxValue(e.target.value || Infinity);

  useEffect(() => {
    dispatch(filterByPriceAction({
      min: minValue,
      max: maxValue
    }))
  }, [minValue, maxValue]);

  return (
    <div className={s.filterContainer}>
      <div className={s.filterItem}>
        <span className={s.filterLabel}>Price: </span>
        <input className={s.priceInput} type='number' placeholder='from' name='min_price' onChange={handleMinValue} />
        <input className={s.priceInput} type='number' placeholder='to' name='max_price' onChange={handleMaxValue} />
      </div>

      <div className={s.filterItem}>
        <span className={s.filterLabel}>Discounted items</span>
        <input
          type="checkbox"
          checked={checked}
          onChange={handlCheck}
          onClick={handlClick}
          className={s.checkboxInput}
          id="discountedItems"
        />
        <label htmlFor="discountedItems" className={s.checkmark}></label>
      </div>

      <div className={s.filterItem}>
        <span className={s.filterLabel}>Sorted</span>
        <div className={s.sortedBox}>
          <select onInput={handlOrder} className={s.sortedSelect}>
            <option value="default">by default</option>
            <option value="newest">newest</option>
            <option value="high_low">price: high-low</option>
            <option value="low_high">price: low-high</option>
          </select>
        </div>
      </div>
    </div>
  );
}
