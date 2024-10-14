import React from 'react'
import s from "./FilterContainer.module.css"

export default function FilterContainer() {
  return (

      <div className={s.filterContainer}>
        <div className={s.filterItem}>
          <label className={s.filterLabel}>Price</label>

          <input type="number" placeholder="from" className={s.priceInput} />
          <input type="number" placeholder="to" className={s.priceInput} />
        </div>

        <div className={s.filterItem}>
          <label className={s.filterLabel}>Discounted items</label>
          <input
            type="checkbox"
            className={s.checkboxInput}
            id="discountedItems"
          />
          <label htmlFor="discountedItems" className={s.checkmark}></label>
        </div>

        <div className={s.filterItem}>
          <label className={s.filterLabel}>Sorted</label>
          <div className={s.sortedBox}>
            <select className={s.sortedSelect}>
              <option value="default">by default</option>
              <option value="newest">newest</option>
              <option value="high-low">price: high-low</option>
              <option value="low-high">price: low-high</option>
            </select>
          </div>
        </div>
      </div>

  )
}
