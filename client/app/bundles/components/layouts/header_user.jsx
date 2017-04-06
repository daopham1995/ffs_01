import React from 'react';
import axios from 'axios';
import UserLogIn from './user_log_in';

export default class HeaderUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url_log_in: props.url_log_in,
      url_sign_up: props.url_sign_up
    };
  }

  render(){
    return (
    <div>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-xs-6 col-md-4 main-logo">
              <a href="index.html"><img src="../../assets/logo.png" alt="logo" className="logo img-responsive" /></a>
            </div>
            <div className="col-md-8">
              <div className="pushright">
                <div className="top">
                  <div className="srch-wrap">
                    <a onClick={this.handleEn.bind(this, "/vi")} id="srch" className="btn btn-default btn-search">
                      <img src="/assets/vi.png" alt="Vi" /></a>
                  </div>
                  <div className="srch-wrap">
                    <a onClick={this.handleEn.bind(this, "/en")} id="srch" className="btn btn-default btn-search">
                      <img src="/assets/en.png" alt="En" /></a>
                  </div> &nbsp;&nbsp;
                  <a href={this.state.url_log_in} className="btn btn-default btn-dark">{I18n.t('login')}</a>&nbsp;&nbsp;
                  <a href={this.state.url_sign_up} className="btn btn-default btn-dark">{I18n.t('signup')}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashed"></div>
      </div>

      <div className="main-nav">
        <div className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="navbar-collapse collapse">
                  <ul className="nav navbar-nav">
                    <li><a href="/" className="active">Home</a><div className="curve"></div></li>
                    <li className="dropdown menu-large">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown">Mega Menu</a>
                      <ul className="dropdown-menu megamenu container row">
                        <li className="col-sm-4">
                          <h4>Page Template</h4>
                          <ul>
                            <li><a href="/">Home Page</a></li>
                            <li><a href="category.html">Category Page</a></li>
                            <li><a href="category-list.html">Category List Page</a></li>
                            <li><a href="category-fullwidth.html">Category fullwidth</a></li>
                            <li><a href="product.html">Detail Product Page</a></li>
                            <li><a href="page-sidebar.html">Page with sidebar</a></li>
                            <li><a href="register.html">Register Page</a></li>
                            <li><a href="order.html">Order Page</a></li>
                            <li><a href="checkout.html">Checkout Page</a></li>
                            <li><a href="cart.html">Cart Page</a></li>
                            <li><a href="contact.html">Contact Page</a></li>
                          </ul>
                          <div className="dashed-nav"></div>
                        </li>
                        <li className="col-sm-4">
                          <h4>Page Template</h4>
                          <ul>
                            <li><a href="index.html">Home Page</a></li>
                            <li><a href="category.html">Category Page</a></li>
                            <li><a href="category-list.html">Category List Page</a></li>
                            <li><a href="category-fullwidth.html">Category fullwidth</a></li>
                            <li><a href="product.html">Detail Product Page</a></li>
                            <li><a href="page-sidebar.html">Page with sidebar</a></li>
                            <li><a href="register.html">Register Page</a></li>
                            <li><a href="order.html">Order Page</a></li>
                            <li><a href="checkout.html">Checkout Page</a></li>
                            <li><a href="cart.html">Cart Page</a></li>
                            <li><a href="contact.html">Contact Page</a></li>
                          </ul>
                          <div className="dashed-nav"></div>
                        </li>
                        <li className="col-sm-4">
                          <h4>Page Template</h4>
                          <ul>
                            <li><a href="index.html">Home Page</a></li>
                            <li><a href="category.html">Category Page</a></li>
                            <li><a href="category-list.html">Category List Page</a></li>
                            <li><a href="category-fullwidth.html">Category fullwidth</a></li>
                            <li><a href="product.html">Detail Product Page</a></li>
                            <li><a href="page-sidebar.html">Page with sidebar</a></li>
                            <li><a href="register.html">Register Page</a></li>
                            <li><a href="order.html">Order Page</a></li>
                            <li><a href="checkout.html">Checkout Page</a></li>
                            <li><a href="cart.html">Cart Page</a></li>
                            <li><a href="contact.html">Contact Page</a></li>
                          </ul>
                          <div className="dashed-nav"></div>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
                      <ul className="dropdown-menu">
                        <li><a href="index.html">Home Page</a></li>
                        <li><a href="category.html">Category Page</a></li>
                        <li><a href="category-list.html">Category List Page</a></li>
                        <li><a href="category-fullwidth.html">Category fullwidth</a></li>
                        <li><a href="product.html">Detail Product Page</a></li>
                        <li><a href="page-sidebar.html">Page with sidebar</a></li>
                        <li><a href="register.html">Register Page</a></li>
                        <li><a href="order.html">Order Page</a></li>
                        <li><a href="cart.html">Cart Page</a></li>
                        <li><a href="checkout.html">Checkout Page</a></li>
                        <li><a href="contact.html">Contact Page</a></li>
                      </ul>
                    </li>
                    <li><a href="page-sidebar.html">About</a></li>
                    <li><a href="category.html">Product</a></li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 machart">
                <button id="popcart" className="btn btn-default btn-chart btn-sm "><span className="mychart">Cart</span>|<span className="allprice">$0.00</span></button>
                <div className="popcart">
                  <table className="table table-condensed popcart-inner">
                    <tbody>
                      <tr>
                        <td>
                        <a href="product.html"><img src="../../assets/dummy-1.png" alt="" className="img-responsive"/></a>
                        </td>
                        <td><a href="product.html">Casio Exilim Zoom</a><br/><span>Color: green</span></td>
                        <td>1X</td>
                        <td>$138.80</td>
                        <td><a href=""><i className="fa fa-times-circle fa-2x"></i></a></td>
                      </tr>
                      <tr>
                        <td>
                        <a href="product.html"><img src="../../assets/dummy-1.png" alt="" className="img-responsive"/></a>
                        </td>
                        <td><a href="product.html">Casio Exilim Zoom</a><br/><span>Color: green</span></td>
                        <td>1X</td>
                        <td>$138.80</td>
                        <td><a href=""><i className="fa fa-times-circle fa-2x"></i></a></td>
                      </tr>
                      <tr>
                        <td>
                        <a href="product.html"><img src="../../assets/dummy-1.png" alt="" className="img-responsive"/></a>
                        </td>
                        <td><a href="product.html">Casio Exilim Zoom</a><br/><span>Color: green</span></td>
                        <td>1X</td>
                        <td>$138.80</td>
                        <td><a href=""><i className="fa fa-times-circle fa-2x"></i></a></td>
                      </tr>
                    </tbody>
                  </table>
                  <span className="sub-tot">Sub-Total : <span>$277.60</span> | <span>Vat (17.5%)</span> : $36.00 </span>
                  <br/>
                  <div className="btn-popcart">
                    <a href="checkout.html" className="btn btn-default btn-red btn-sm">Checkout</a>
                    <a href="cart.html" className="btn btn-default btn-red btn-sm">More</a>
                  </div>
                  <div className="popcart-tot">
                    <p>
                      Total<br/>
                      <span>$313.60</span>
                    </p>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }

  handleEn(link, event) {
    window.location.href = link;
  }
}
