import React from 'react';

export default class ProductHome extends React.Component {
  render() {
    return (
    <div className="container">
      <div className="row">
        <div className="title-bg">
          <div className="title">Lastest Products</div>
        </div>
        <div className="row prdct">
          <div className="col-md-3">
            <div className="productwrap">
              <div className="pr-img">
                <a href="product.html"><img src="/assets/sample-2.jpg" alt="" className="img-responsive"/></a>
                <div className="pricetag on-sale"><div className="inner on-sale"><span className="onsale"><span className="oldprice">$314</span>$199</span></div></div>
              </div>
              <span className="smalltitle"><a href="product.html">Black Shoes</a></span>
              <span className="smalldesc">Item no.: 1000</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="productwrap">
            <div className="pr-img">
              <a href="product.html"><img src="/assets/sample-1.jpg" alt="" className="img-responsive"/></a>
              <div className="pricetag"><div className="inner">$199</div></div>
            </div>
              <span className="smalltitle"><a href="product.html">Nikon Camera</a></span>
              <span className="smalldesc">Item no.: 1000</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="productwrap">
            <div className="pr-img">
              <a href="product.html"><img src="/assets/sample-3.jpg" alt="" className="img-responsive"/></a>
              <div className="pricetag"><div className="inner">$199</div></div>
            </div>
              <span className="smalltitle"><a href="product.html">Red T- Shirt</a></span>
              <span className="smalldesc">Item no.: 1000</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="productwrap">
            <div className="pr-img">
              <a href="product.html"><img src="/assets/sample-1.jpg" alt="" className="img-responsive"/></a>
              <div className="pricetag"><div className="inner">$199</div></div>
            </div>
              <span className="smalltitle"><a href="product.html">Nikon Camera</a></span>
              <span className="smalldesc">Item no.: 1000</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="productwrap">
            <div className="pr-img">
              <a href="product.html"><img src="/assets/sample-2.jpg" alt="" className="img-responsive"/></a>
              <div className="pricetag"><div className="inner">$199</div></div>
            </div>
              <span className="smalltitle"><a href="product.html">Black Shoes</a></span>
              <span className="smalldesc">Item no.: 1000</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="productwrap">
            <div className="pr-img">
              <a href="product.html"><img src="/assets/sample-3.jpg" alt="" className="img-responsive"/></a>
              <div className="pricetag"><div className="inner">$199</div></div>
            </div>
              <span className="smalltitle"><a href="product.html">Red T-Shirt</a></span>
              <span className="smalldesc">Item no.: 1000</span>
            </div>
          </div>
        </div>
        <div className="spacer"></div>
      </div>
    </div>
    );
  }
}
