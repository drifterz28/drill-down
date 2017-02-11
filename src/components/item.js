import React from 'react';

const Item = ({item}) => {
  const link = item.id + '.html';
  return (
    <div className="item" id={item.id}>
      <a href={link} className="img" title={item.name}>
        {item.isBestSeller && <img src="http://lib.store.yahoo.net/lib/yhst-88039420719426/best-seller-left.png" className="bestseller" />}
        <img src={item.image} />
      </a>
      <div className="name">
        <a href={link}>{item.name}</a>
        <div>
          {item.displaySalePrice && <span className="spr">${item.displaySalePrice}</span>}
          <span className="pr">${item.displayPrice}</span>
          <div className="pdShowForDiscountedUser" style={{display: 'none'}}>
            <div className="pdDynamicPriceWrapperSection">
              <span className="pdDynamicPriceLabelSection">Wholesale:&nbsp;</span>
              <span className="pdDynamicPrice pdDynamicPriceSection" data-productid={item.id} data-baseprice="24.9" data-retailprice="24.9" />
            </div>
          </div>
        </div>
      </div>
      <form method="POST" action={'http://order.store.yahoo.net/yhst-88039420719426/cgi-bin/wg-order?yhst-88039420719426+' + item.id} className="sectionAddToCart">
        <input type="image" src="https://lib.store.yahoo.net/lib/yhst-88039420719426/add-to-cart.jpg" />
        <input name="vwcatalog" type="hidden" value="yhst-88039420719426"/>
        <input name="vwitem" type="hidden" value={item.id} />
        <input type="hidden" name=".autodone" value={'http://www.westechrigging.com/' + item.id + '.html'} />
      </form>
      <div id="ys_promoitem" data-itemid={link} data-itemcode="IMP-CH012SS316" />
    </div>
  );
};

export default Item;
