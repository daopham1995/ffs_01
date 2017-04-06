import ReactOnRails from 'react-on-rails';

import HeaderUser from '../components/layouts/header_user';
import Slide from '../components/main-slide/slide';
import FooterUser from '../components/layouts/footer_user';
import ProductHome from '../components/products/product_home';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HeaderUser, Slide, FooterUser, ProductHome,
});
