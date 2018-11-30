import React from 'react';
import logo from '../img/logo/logo-272.png';
import Logo from '../img/logo/untitled-1_4x.png';


const Header = () => {
  return (
    <header className="header sticky-footer__header">
    <div className="container">
        <a href="index.html" class="logo-new">
                        {/* <img alt="Parcel Monkey"
                 className="header__logo"
                 src={Logo}
                
                 sizes="(min-width: 1200px) 272px,
                    (min-width: 768px) 200px,
                    153px"/> */}
                    Cricket Deliveries
        </a>

        <a href="#" className="header__open-menu js-menu-show">Menu</a>

        <nav className="header__nav">
            <ul className="header__menu">
                <li><a href="index.html" className="header__menu-home">Home</a></li>
                    <li className="header__menu-tracking header__menu-item--has-submenu">
                        <span>Tracking</span>
                        <div className="header__menu-item-submenu">
                            <form method="post" action="/tracking.php" className="form header__tracking">
                                <h3>Track Your Parcel</h3>
                                <input name="tracking" type="text" placeholder="PM_#######_#######"/>
                                <button type="submit" className="btn">Track Now</button>
                            </form>
                        </div>
                    </li>
                    <li className="header__menu-services header__menu-item--has-submenu">
                        <span>Services</span>
                        <ul className="header__menu-item-submenu">
                            <li className="header__service--domestic-parcels">
                                <span className="header__service-img img-icon--flag"></span>
                                <a href="courier-services/index.html">Our Couriers</a>
                                <ul>
                                    <li><a href="courier-services/parcelforce/index.html">Parcelforce</a></li>
                                    <li><a href="courier-services/dpd/index.html">DPD</a></li>
                                    <li><a href="courier-services/city-sprint/index.html">CitySprint</a></li>
                                    <li><a href="courier-services/dx/index.html">DX</a></li>
                                    <li><a href="courier-services/dhl/index.html">DHL</a></li>
                                    <li><a href="courier-services/parcelmonkey-international/index.html">Cricket Deliveries</a></li>
                                    <li><a href="courier-services/tuffnells/index.html">Tuffnells</a></li>
                                    <li><a href="courier-services/trakpak/index.html">Trakpak</a></li>
                                </ul>
                            </li>
                            <li className="header__service--international-parcels">
                                <span className="header__service-img img-icon--globe"></span>
                                <span>Popular Services</span>
                                <ul>
                                    <li><a href="services/parcelforce-24/index.html">Parcelforce 24</a></li>
                                    <li><a href="services/dpd-pickup/index.html">DPD Pickup</a></li>
                                    <li><a href="services/parcelforce-drop-off/index.html">Parcelforce Dropoff</a></li>
                                    <li><a href="services/dpd-air-classic/index.html">DPD Air Classic</a></li>
                                    <li><a href="services/dpd-classic/index.html">DPD Classic</a></li>
                                    <li><a href="services/dpd-air-express/index.html">DPD Air Express</a></li>
                                    <li><a href="services/parcelforce-48/index.html">Parcelforce 48</a></li>
                                    <li><a href="services/dhl-parcel-uk/index.html">DHL Parcel UK</a></li>
                                </ul>
                            </li>
                            <li className="header__service--specialist-services">
                                <span className="header__service-img img-icon--clock"></span>
                                <a href="delivery-services/index.html">Specialist Services</a>

                                <ul>
                                    <li><a href="delivery-services/uk-parcel-delivery/index.html">Domestic Parcel Delivery</a></li>
                                    <li><a href="delivery-services/international-shipping/index.html">International Parcel Delivery</a></li>
                                    <li><a href="delivery-services/courier-collection/index.html">Collected Services</a></li>
                                    <li><a href="delivery-services/drop-off/index.html">Drop Off Services</a></li>
                                    <li><a href="delivery-services/sameday-delivery/index.html">Same Day Delivery</a></li>
                                    <li><a href="delivery-services/large-heavy-parcels/index.html">Heavy/Large Items</a></li>
                                    <li><a href="delivery-services/next-day-delivery/index.html">Next Day Delivery</a></li>
                                    <li><a href="delivery-services/saturday-delivery/index.html">Saturday Delivery</a></li>
                                    <li><a href="delivery-services/sunday-delivery/index.html">Sunday Delivery</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="about-us/index.html">About Us</a></li>
                    <li><a href="reviews.php">Reviews</a></li>
                  
                    <li>
                        <a href="cart.php" className="header__menu-cart" rel="nofollow">
                        <span>0</span> items                        
                        </a>
                    </li>

                        <li className="header__menu-login">
                            <a className="js-show-login" href="login.php">Log In</a>
                        </li>
                    
                    
                    <li className="header__menu-social">
                        <a className="icon--facebook" href="https://www.facebook.com/ParcelMonkey/" target="_blank">Facebook</a>
                        <a className="icon--twitter" href="https://twitter.com/parcelmonkey" target="_blank">Twitter</a>
                        <a className="icon--gplus" href="https://plus.google.com/+parcelmonkey/posts" target="_blank">Google
                            Plus</a>
                    </li>

                            </ul>
        </nav>

        <div className="header__login">
            <form method="post" action="/login.php" className="form header__login-form" data-js-form-validate>
                <label htmlFor="headerLoginEmail">Log In:</label>
                <input type="email" title="Your Email" placeholder="Your Email" name="UserEmail" id="headerLoginEmail" required/>
                <input type="password" title="Your Password" placeholder="Your Password" name="UserPassword" required/>
                <button type="submit" className="btn">Log In</button>
                <input type="checkbox" value="Y" name="remember" id="rememberTickHeader"/>
                <label htmlFor="rememberTickHeader">
                    Remember Me?
                </label>
                <a href="forgottenpassword.php" className="header__login-password-link" rel="nofollow">Forgotten Password?</a>
            </form>
            <div className="header__login-social">
              {/** 
                <h4>Sign in with:</h4>
                <a href="/parcelmonkeylogin.php?sub=facebook" className="icon--facebook" rel="nofollow">Facebook</a>
                <a href="/parcelmonkeylogin.php?sub=twitter" className="icon--twitter" rel="nofollow">Twitter</a>
                <a href="/parcelmonkeylogin.php?sub=googleLogin" className="icon--gplus" rel="nofollow">Google</a>
                <a href="/parcelmonkeylogin.php?sub=linkedintrigger" className="icon--linkedin" rel="nofollow">LinkedIn</a>
              -->*/}
            </div>

            <div className="header__login-register">
                <a href="register.php" className="btn">Sign up for a FREE Account!</a>
            </div>
        </div>
        </div>
</header>
  )
}

export default Header;