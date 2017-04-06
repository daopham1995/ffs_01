import React from 'react';
import axios from 'axios';

export default class Slide extends React.Component {

  render(){
    return (
    <div className="container">

        <div className="main-slide">
          <div id="sync1" className="owl-carousel">
            <div className="item">
              <div className="slide-desc">
                <div className="inner">
                  <h1>Stylish Jacket, be your best deal</h1>
                  <p>
                    Nunc non fermentum nunc. Sed ut ante eget leo tempor consequat sit amet eu orci. Donec dignissim dolor eget..
                  </p>
                  <button className="btn btn-default btn-red btn-lg">Add to cart</button>
                </div>
                <div className="inner">
                  <div className="pro-pricetag big-deal">
                    <div className="inner">
                        <span className="oldprice">$314</span>
                        <span>$199</span>
                        <span className="ondeal">Best Deal</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-type-1">
                <img src="/assets/slide-1.jpg" alt="" className="img-responsive"/>
              </div>
            </div>
            <div className="item">
              <div className="slide-desc">
                <div className="inner">
                  <h1>Stylish Jacket, be your best deal</h1>
                  <p>
                    Nunc non fermentum nunc. Sed ut ante eget leo tempor consequat sit amet eu orci. Donec dignissim dolor eget..
                  </p>
                  <button className="btn btn-default btn-red btn-lg">Add to cart</button>
                </div>
                <div className="inner">
                  <div className="pro-pricetag big-deal">
                    <div className="inner">
                        <span className="oldprice">$314</span>
                        <span>$199</span>
                        <span className="ondeal">Best Deal</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-type-1">
                <img src="/assets/slide-2.jpg" alt="" className="img-responsive"/>
              </div>
            </div>
            <div className="item">
              <div className="slide-desc">
                <div className="inner">
                  <h1>Nike Airmax</h1>
                  <p>
                    Nunc non fermentum nunc. Sed ut ante eget leo tempor consequat sit amet eu orci. Donec dignissim dolor eget..
                  </p>
                  <button className="btn btn-default btn-red btn-lg">Add to cart</button>
                </div>
                <div className="inner">
                  <div className="pro-pricetag big-deal">
                    <div className="inner">
                        <span className="oldprice">$314</span>
                        <span>$199</span>
                        <span className="ondeal">Best Deal</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-type-1">
                <img src="/assets/slide-3.jpg" alt="" className="img-responsive"/>
              </div>
            </div>
            <div className="item">
              <div className="slide-desc">
                <div className="inner">
                  <h1>Unique smaragd ring</h1>
                  <p>
                    Nunc non fermentum nunc. Sed ut ante eget leo tempor consequat sit amet eu orci. Donec dignissim dolor eget..
                  </p>
                  <button className="btn btn-default btn-red btn-lg">Add to cart</button>
                </div>
                <div className="inner">
                  <div className="pro-pricetag big-deal">
                    <div className="inner">
                        <span className="oldprice">$314</span>
                        <span>$199</span>
                        <span className="ondeal">Best Deal</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-type-1">
                <img src="/assets/slide-4.jpg" alt="" className="img-responsive"/>
              </div>
            </div>
            <div className="item">
              <div className="slide-desc">
                <div className="inner">
                  <h1>Stylish Jacket, be your best deal</h1>
                  <p>
                    Nunc non fermentum nunc. Sed ut ante eget leo tempor consequat sit amet eu orci. Donec dignissim dolor eget..
                  </p>
                  <button className="btn btn-default btn-red btn-lg">Add to cart</button>
                </div>
                <div className="inner">
                  <div className="pro-pricetag big-deal">
                    <div className="inner">
                        <span className="oldprice">$314</span>
                        <span>$199</span>
                        <span className="ondeal">Best Deal</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-type-1">
                <img src="/assets/slide-2.jpg" alt="" className="img-responsive"/>
              </div>
            </div>
            <div className="item">
              <div className="slide-desc">
                <div className="inner">
                  <h1>Nike Airmax</h1>
                  <p>
                    Nunc non fermentum nunc. Sed ut ante eget leo tempor consequat sit amet eu orci. Donec dignissim dolor eget..
                  </p>
                  <button className="btn btn-default btn-red btn-lg">Add to cart</button>
                </div>
                <div className="inner">
                  <div className="pro-pricetag big-deal">
                    <div className="inner">
                        <span className="oldprice">$314</span>
                        <span>$199</span>
                        <span className="ondeal">Best Deal</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-type-1">
                <img src="/assets/slide-3.jpg" alt="" className="img-responsive"/>
              </div>
            </div>

          </div>
        </div>
        <div className="bar"></div>
        <div id="sync2" className="owl-carousel">
          <div className="item">
            <div className="slide-type-1-sync">
              <h3>Stylish Jacket</h3>
              <p>Description here here here</p>
            </div>
          </div>
          <div className="item">
            <div className="slide-type-1-sync">
              <h3>Stylish Jacket</h3>
              <p>Description here here here</p>
            </div>
          </div>
          <div className="item">
            <div className="slide-type-1-sync">
              <h3>Nike Airmax</h3>
              <p>Description here here here</p>
            </div>
          </div>
          <div className="item">
            <div className="slide-type-1-sync">
              <h3>Unique smaragd ring</h3>
              <p>Description here here here</p>
            </div>
          </div>
          <div className="item">
            <div className="slide-type-1-sync">
              <h3>Stylish Jacket</h3>
              <p>Description here here here</p>
            </div>
          </div>
          <div className="item">
            <div className="slide-type-1-sync">
              <h3>Nike Airmax</h3>
              <p>Description here here here</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
