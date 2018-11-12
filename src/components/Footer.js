import React from 'react';


const Footer = () => {
  return (
    <footer className="footer sticky-footer__footer">
      <div className="track-shipment">
        <div className="container">
        </div>
      </div>
      <div className="footer__main">
        <div className="container">
          <div className="grid">
            <div className="grid-item medium-width-6 large-width-4 footer__main-links">
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about-us/index.html" rel="nofollow">About Us</a></li>
                <li><a href="parcel-monkey-international/index.html">International Shipping</a></li>
                <li><a href="courier-services/index.html">Courier Companies</a></li>
                <li><a href="delivery-services/index.html">Parcel Delivery Services</a></li>
                <li><a href="selling-guides/index.html">Marketplace Selling Guides</a></li>
                <li><a href="retailer-returns/index.html">Retailer Returns</a></li>
                <li><a href="business-accounts-and-fulfilment/index.html">Business Rates</a></li>
              </ul>
            </div>
            <div className="grid-item medium-width-6 large-width-8 footer__main-about">
              <p>Parcel Monkey allows businesses and individuals to compare quotes for cheap courier services for deliveries within the UK, European and Worldwide destinations.</p>

              <p>We use reputable couriers such as <a href="courier-services/dhl/index.html">DHL</a>, <a href="courier-services/dpd/index.html">DPD</a>, <a href="courier-services/parcelforce/index.html">Parcelforce</a>, <a href="courier-services/dx/index.html">DX</a>, <a href="courier-services/tuffnells/index.html">Tuffnells</a>, <a href="courier-services/city-sprint/index.html">CitySprint</a>, <a href="courier-services/trakpak/index.html">P2P TrakPak</a> and others to offer a variety of next day, premium, economy, door to door, collection and drop-off courier services at the cheapest shipping rates.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__other-markets">
        <div className="container">
          <ul>
            <li><a href="#" target="_blank" >België</a></li>
            <li><a href="#" target="_blank" >Deutschland</a></li>
            <li><a href="#" target="_blank" >España</a></li>
            <li><a href="#" target="_blank" >France</a></li>
            <li><a href="#" target="_blank" >Italia</a></li>
            <li><a href="#" target="_blank" >Nederland</a></li>
            <li><strong>United Kingdom</strong></li>
            <li><a href="#" target="_blank" >United States</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__secondary">
        <div className="container">
          <ul className="footer__legal">
            <li>Copyright &copy; Parcel Monkey Ltd 2018</li>
            <li>Company No. 07097496</li>
            <li>VAT No. 981509987</li>
            <li><a href="terms-and-conditions/index.html" rel="nofollow">Terms &amp; Conditions</a></li>
            <li><a href="privacy-policy/index.html" rel="nofollow">Privacy Policy</a></li>
            <li><a href="site-map/index.html">Sitemap</a></li>
          </ul>

          <ul className="footer__social">
            <li><a className="icon--facebook" href="https://www.facebook.com/ParcelMonkey/" target="_blank" title="Follow us on Facebook">Parcel Monkey Facebook</a></li>
            <li><a className="icon--twitter" href="https://twitter.com/parcelmonkey" target="_blank" title="Follow us on Twitter">Parcel Monkey Twitter</a></li>
            <li><a className="icon--youtube" href="https://www.youtube.com/c/parcelmonkey" target="_blank" title="Follow us on YouTube">Parcel Monkey YouTube</a></li>
            <li><a className="icon--linkedin" href="https://www.linkedin.com/company/parcelmonkey-com/" target="_blank" title="Follow us on LinkedIn">Parcel Monkey LinkedIn</a></li>
            <li><a className="icon--gplus" href="https://plus.google.com/+parcelmonkey" target="_blank" title="Follow us on Google+">Parcel Monkey Google+</a></li>
          </ul>

          <span className="footer__peoples-choice img-icon--gwg">The People's Choice - Website of the Year 2011 & 2012</span>
        </div>
      </div>
    </footer>
  )
}
export default Footer;