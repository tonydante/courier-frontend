import React, {Component} from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import parcelforce from '../img/carriers/parcelforce.png';
import dx from '../img/carriers/dx.png';
import dpd from '../img/carriers/dpd.png';
import dhl from '../img/carriers/dhl.png';
import citysprint from '../img/carriers/citysprint.png';
import trakpak from '../img/carriers/trakpak-9842.png';
import tuffnells from '../img/carriers/tuffnells-9842.png';
import amazon from '../img/integrations/amazon.png'
import ebay from '../img/integrations/ebay.png'
import magento from '../img/integrations/magento.png'
import shopify from '../img/integrations/shopify.png'
import woocommerce from '../img/integrations/woocommerce.png'
import kong_scr from '../img/kong-screenshot.png';
import cloud_scr from '../img/cloud-screenshot.png'
import { getAParcel } from '../actions';
import {checkIfEmpty} from '../validator';

 


class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
          toCity: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }

    /**
*
* @param { Function } nextProps updated props
*
* @returns { DOM } DOM object
*/
// componentWillReceiveProps(nextProps) {
//     this.setState({
//       toCity: nextProps.parcel.toCity,
//     });
//   }
      /**
   * 
   * @returns {void} 
   * @param {any} event
   * @memberof SignupForm
   */
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }


  /**
   * This method validates the input from the state object 
   * and chcecks if its valid and makes an api call to the backend
   * 
   * @param {any} event 
   * @memberof SigninForm
   * @returns {void}
   */
  onSubmit(event) {
    event.preventDefault();
    if (checkIfEmpty(this.state) == true) {
      swal({
        title: "Oops!, sorry all fields are required",
        icon: "warning"
      });
    } else {
        this.props.getAParcel(this.state.toCity)
        this.setState({
        toCity: '',
      })
    }
   
  }
  render() {
      console.log(this.props.parcel, 'props!!!')
      let presentCity = '';
      if(this.props.parcel) {
        presentCity = `Your parcel is now at: ${this.props.parcel.toCity}`
      } else {
          presentCity = ''
      }
  return (
    <div className="content sticky-footer__content">
    <div className="home">
    <div className="home__intro">
        <div className="container">
            <div className="home__intro-content">
                <h1>Compare and <strong>book cheap parcel delivery services</strong> with Parcel Monkey</h1>

                <p>Wherever in the world you want to send your parcel we compare the best couriers to get you the best
                    services and delivery rates.</p>

                <div href="video.php" className="home__intro-btn">Hi there!</div>
            </div>

            <div className="js-get-quote get-quote get-quote--home js-quote-origin-destination">
                <input type="radio" name="get-quote-type" id="get-quote-default" defaultChecked />
                <input type="radio" name="get-quote-type" id="get-quote-local" />

                <div className="get-quote__tabs">
                        <label htmlFor="get-quote-default" className="get-quote__tab">Parcel Delivery</label>
                        <label htmlFor="get-quote-local" className="get-quote__tab"><span className="prefix">new</span> ParcelMonkey<span className="highlight">Local</span></label>
                </div>

                <div className="get-quote__form get-quote__form-default">
                    <h3>Tracking</h3>
                    <form method="post" className="form">
                        <label htmlFor="toCity">Enter Tracking code Here:</label>
                        <input 
                        type="text" 
                        id="toCity" 
                        name="toCity" 
                        value={this.state.toCity}
                        onChange={this.onChange}
                        />
                        <button type="submit" className="btn" onClick={this.onSubmit}>Track &amp; Now</button>
                    </form>

                    <div className="parcel">{presentCity}</div>
                </div>

                <div className="get-quote__form get-quote__form-local js-sameday-quote">
                    <h3>Get an Instant Quote</h3>
                    <p className="get-quote--intro-text">Have your item collected and delivered the same day by express courier in the UK. <a href="local/index.html">Learn more</a>.</p>

                    <form method="post" action="/quotev3.php" className="form">
                        <input type="hidden" name="quotetype" value="basic" />

                        <label htmlFor="get-quote__origin">Collect from</label>
                        <select className="js-custom-form-el" name="origin" id="get-quote__origin">
                            <option value="219">United Kingdom</option>
                            <option value="90">Guinea-Bissau</option>
                            <option value="91">Guyana</option>
                            <option value="92">Haiti</option>
                            <option value="93">Honduras Rep.</option><option value="94">Hong Kong</option><option value="95">Hungary</option><option value="283">Ibiza</option><option value="96">Iceland</option><option value="97">India</option><option value="98">Indonesia</option><option value="99">Iran</option><option value="100">Iraq</option><option value="101">Ireland Republic of</option><option value="253">Isle of Man</option><option value="250">Isles of Scilly</option><option value="102">Israel</option><option value="103">Italy</option><option value="288">Italy - Sardinia</option><option value="289">Italy - Sicily</option><option value="104">Ivory Coast</option><option value="105">Jamaica</option><option value="106">Japan</option><option value="243">Jersey</option><option value="107">Jordan</option><option value="108">Kazakhstan</option><option value="109">Kenya</option><option value="110">Kiribati</option><option value="111">Korea, D.P.R of (North)</option><option value="112">Korea, Rep of (South)</option><option value="235">Koror Island</option><option value="274">Kosovo</option><option value="236">Kosrae Island</option><option value="113">Kuwait</option><option value="114">Kyrgyzstan</option><option value="280">La Palma</option><option value="279">Lanzarote</option><option value="115">Laos Peoples Dem. Rep</option><option value="116">Latvia</option><option value="117">Lebanon</option><option value="118">Lesotho</option><option value="119">Liberia</option><option value="120">Libya</option><option value="121">Liechtenstein</option><option value="122">Lithuania</option><option value="123">Luxembourg</option><option value="124">Macau</option><option value="125">Macedonia</option><option value="126">Madagascar</option><option value="281">Majorca</option><option value="242">Majuro Island</option><option value="127">Malawi</option><option value="128">Malaysia</option><option value="129">Maldives</option><option value="130">Mali</option><option value="131">Malta</option><option value="245">Manua Island</option><option value="132">Marshall Islands</option><option value="133">Martinique</option><option value="134">Mauritania</option><option value="135">Mauritius</option><option value="136">Mayotte</option><option value="282">Menorca</option><option value="137">Mexico</option><option value="233">Micronesia</option><option value="138">Moldova, Rep of</option><option value="139">Monaco</option><option value="140">Mongolia</option><option value="141">Montenegro</option><option value="142">Montserrat</option><option value="143">Morocco</option><option value="144">Mozambique</option><option value="145">Myanmar (Burma)</option><option value="146">Namibia</option><option value="147">Nauru, Rep of</option><option value="148">Nepal</option><option value="149">Netherlands</option><option value="247">Netherlands Antilles</option><option value="150">Nevis</option><option value="151">New Caledonia</option><option value="152">New Zealand</option><option value="153">Nicaragua</option><option value="154">Niger</option><option value="155">Nigeria</option><option value="156">Niue</option><option value="248">Northern Ireland</option><option value="157">Norway</option><option value="158">Oman</option><option value="252">Orkney Isles</option><option value="159">Pakistan</option><option value="237">Palau</option><option value="160">Panama</option><option value="161">Papua New Guinea</option><option value="162">Paraguay</option><option value="163">Peru</option><option value="164">Philippines</option><option value="238">Pohnpei Island</option><option value="165">Poland</option><option value="166">Portugal</option><option value="167">Puerto Rico</option><option value="168">Qatar</option><option value="169">Reunion, Island of</option><option value="170">Romania</option><option value="239">Rota Island</option><option value="275">Russia</option><option value="172">Rwanda</option><option value="173">Saipan</option><option value="174">Samoa</option><option value="175">San Marino</option><option value="176">Sao Tome & Principe</option><option value="177">Saudi Arabia</option><option value="178">Senegal</option><option value="179">Serbia</option><option value="180">Seychelles</option><option value="251">Shetland Isles</option><option value="181">Sierra Leone</option><option value="182">Singapore</option><option value="183">Slovakia</option><option value="184">Slovenia</option><option value="185">Solomon Islands</option><option value="186">Somalia</option><option value="187">Somaliland Rep. Of</option><option value="188">South Africa</option><option value="189">Spain</option><option value="276">Spain - Tenerife</option><option value="279">Spain - Lanzarote</option><option value="278">Spain - Gran Canaria</option><option value="277">Spain - Fuerteventura</option><option value="280">Spain - La Palma</option><option value="281">Spain - Majorca</option><option value="282">Spain - Menorca</option><option value="283">Spain - Ibiza</option><option value="190">Sri Lanka</option><option value="191">St Barthelemy</option><option value="192">St Eustatius</option><option value="193">St Kitts</option><option value="194">St Lucia</option><option value="195">St Maarten</option><option value="196">St Vincent</option><option value="197">Sudan</option><option value="198">Suriname</option><option value="199">Swaziland</option><option value="200">Sweden</option><option value="201">Switzerland</option><option value="202">Syria</option><option value="203">Tahiti</option><option value="204">Taiwan</option><option value="205">Tajikistan</option><option value="206">Tanzania</option><option value="276">Tenerife</option><option value="207">Thailand</option><option value="208">Togo</option><option value="209">Tonga</option><option value="210">Trinidad & Tobago</option><option value="211">Tunisia</option><option value="212">Turkey</option><option value="213">Turkmenistan</option><option value="214">Turks & Caicos Islands</option><option value="246">Tutuila Island</option><option value="215">Tuvalu</option><option value="216">Uganda</option><option value="217">Ukraine</option><option value="218">United Arab Emirates</option><option value="219">United Kingdom</option><option value="220">Uruguay</option><option value="221">USA</option><option value="222">Uzbekistan</option><option value="223">Vanuatu</option><option value="224">Venezuela</option><option value="225">Vietnam</option><option value="226">Virgin Islands, British</option><option value="227">Virgin Islands, US</option><option value="240">Yap Island</option><option value="228">Yemen</option><option value="229">Zambia</option><option value="230">Zimbabwe</option>                        </select>

                        <label htmlFor="get-quote__destination">Delivering to</label>
                        <select className="js-custom-form-el" name="destination" id="get-quote__destination">
                            <option value="219">United Kingdom</option><option value="248">Northern Ireland</option><option value="101">Republic Of Ireland</option><option value="243">Jersey</option><option value="244">Guernsey</option><option value="221">USA</option><option value="12">Australia</option><option value="44">China</option><option value="36">Canada</option><option value="72">France - Paris</option><option value="73">France - All other locations</option><option value="80">Germany</option><option value="83">Greece</option><option value="103">Italy</option><option value="288">Italy - Sardinia</option><option value="289">Italy - Sicily</option><option value="165">Poland</option><option value="166">Portugal</option><option value="189">Spain</option><option value="276">Spain - Tenerife</option><option value="279">Spain - Lanzarote</option><option value="278">Spain - Gran Canaria</option><option value="277">Spain - Fuerteventura</option><option value="280">Spain - La Palma</option><option value="281">Spain - Majorca</option><option value="282">Spain - Menorca</option><option value="283">Spain - Ibiza</option><option value="1">Afghanistan</option><option value="2">Albania</option><option value="3">Algeria</option><option value="4">American Samoa</option><option value="5">Andorra</option><option value="6">Angola</option><option value="7">Anguilla</option><option value="8">Antigua</option><option value="9">Argentina</option><option value="10">Armenia</option><option value="11">Aruba</option><option value="12">Australia</option><option value="287">Australia - Adelaide</option><option value="286">Australia - Brisbane</option><option value="285">Australia - Melbourne</option><option value="284">Australia - Sydney</option><option value="13">Austria</option><option value="14">Azerbaijan</option><option value="15">Bahamas</option><option value="16">Bahrain</option><option value="17">Bangladesh</option><option value="18">Barbados</option><option value="19">Belarus</option><option value="20">Belgium</option><option value="21">Belize</option><option value="22">Benin</option><option value="23">Bermuda</option><option value="24">Bhutan</option><option value="25">Bolivia</option><option value="26">Bonaire</option><option value="27">Bosnia Herzegovina</option>
                         </select>

                        <label htmlFor="get-quote__weight">Parcel Weight</label>

                        <div className="with-unit with-unit--no-margin">
                            <input name="weight" type="number" id="get-quote__weight" step="any" />
                            <div className="with-unit__unit">Kg.</div>
                        </div>

                        <button type="submit" className="btn">Get Quote &amp; Book</button>

                        <div className="get-quote__options">
                            <a href="quotev3-55290.php" className="get-quote__multiple" rel="nofollow">Send multiple parcels</a>
                            <a href="quotev3-55290.php" className="get-quote__large" rel="nofollow">Parcel larger than 1m?</a>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    </div>

    <div className="container">
        <div className="home__carriers js-horiz-scroller">
            <div className="horiz-scroller__mask">
                <ul>
                    <li>
                        <a href="#"><img src={parcelforce} height="65" width="162" alt="ParcelForce"/></a>
                    </li>
                    <li>
                        <a href="#"><img src={dpd} height="65" width="162" alt="DPD"/></a>
                    </li>
                    <li>
                        <a href="#"><img src={dx} height="65" width="162" alt="DX"/></a>
                    </li>
                    <li>
                        <a href="#"><img src={dhl}height="65" width="162" alt="DHL"/></a>
                    </li>
                    <li>
                        <a href="#"><img src={citysprint} height="65" width="162" alt="CitySprint"/></a>
                    </li>
                    <li>
                        <a href="#"><img src={tuffnells} height="65" width="162" alt="Tuffnells"/></a>
                    </li>
                    <li>
                        <a href="#"><img src={trakpak} height="65" width="162" alt="P2P TrakPak"/></a>
                    </li>
                </ul>
            </div>
            <div className="horiz-scroller__nav"></div>
        </div>

        <div className="home__standout">
            <div className="home__promise">
                <h3>Why use Parcel Monkey?</h3>
                <p>Compare, book and send parcels using discounted parcel delivery services. Save time &amp; money with Parcel Monkey.</p>
                <ul>
                    <li>Choose from many reputable courier companies to ship your parcel</li>
                    <li>Book parcel delivery within the UK or to over 240 international destinations</li>
                    <li>Choose from collection &amp; drop-off services</li>
                    <li>Over 28,000 verified reviews on Trustpilot</li>
                    <li>Manage all your parcel deliveries in one place</li>
                </ul>
            </div>

            <div className="home__trustpilot">
                <h3>TrustPilot</h3>
                <div className="rating rating--5">
                    5 / 5
                </div>

                <p className="home__trustpilot-review">Fantastic from collection to delivery</p>

                <p className="home__trustpilot-meta">
                    <span><a href="reviews.php">Read more</a> of our 186,133 reviews</span>
                    <span><a href="https://uk.trustpilot.com/review/www.parcelmonkey.co.uk" target="_blank">Visit Trust Pilot</a></span>
                </p>
            </div>
        </div>

        <div className="grid">
            <div className="grid-item medium-width-6">
                <div className="home__promo home__promo--one">
                    <h3>Ship to more than <strong>80 Worldwide Destinations</strong> with <strong>DPD</strong></h3>

                    <p>From <strong>£11.19</strong></p>

                    <a href="courier-services/dpd/index.html" className="btn btn--v-3">Find out more</a>
                </div>
            </div>
            <div className="grid-item medium-width-6">
                <div className="home__promo home__promo--two">
                    <h3>Cheap prices htmlFor <br /><strong>Large Parcel Delivery</strong></h3>

                    <p><strong>&nbsp;</strong></p>

                    <a href="delivery-services/large-heavy-parcels/index.html" className="btn btn--v-3">Start Saving Now</a>
                </div>
            </div>
        </div>

        <div className="containe push-down push-bottom-double">
            <div className="medium-width-8 medium-offset-2">
                <h2 className="text-center" style={{fontSize: 2.2}}>Save money on parcel delivery</h2>

                <p>Did you know you can save money on parcel delivery by comparing prices from various couriers? There are more ways to book parcel delivery than simply going to the Post Office. You can book a courier delivery service htmlFor a
                    discounted price through Parcel Monkey to take care of your shipping needs easily and cheaply thanks to our <a href="compare-prices/index.html">parcel comparison</a> engine.</p>

                <p>We have a range of cheap parcel delivery options, including: <a href="delivery-services/next-day-delivery/index.html">next day delivery</a>, <a href="delivery-services/large-heavy-parcels/index.html">delivery of large or heavy parcels</a>, <a href="delivery-services/sameday-delivery/index.html">same day delivery</a>, or <a href="delivery-services/international-shipping/index.html">international parcel delivery</a>. View the links below htmlFor an idea of the delivery services we have on offer to some of our popular international destinations.</p>

                <ul>
                    <li><a href="international/usa/index.html">Send parcel to the USA</a></li>
                    <li><a href="international/france/index.html">Send parcel to France</a></li>
                    <li><a href="international/germany/index.html">Send parcel to Germany</a></li>
                    <li><a href="international/italy/index.html">Send parcel to Italy</a></li>
                    <li><a href="international/ireland/index.html">Send parcel to Ireland</a></li>
                </ul>
            </div>
        </div>

        <div className="home__integrations">
            <h3>Shopping Cart Integrations</h3>

            <p>Save time by directly integrating into major cart solutions.</p>

            <div className="js-horiz-scroller">
                <div className="horiz-scroller__mask">
                    <ul>
                        <li>
                            <a href="shopping-cart-integrations/index.html">
                                <img className="js-lazy-load" data-src={shopify} height="49" width="169" alt="shopify"/>
                                <noscript><img src={shopify} height="49" width="169" alt="shopify"/></noscript>
                            </a>
                        </li>
                        <li>
                            <a href="shopping-cart-integrations/index.html">
                                <img className="js-lazy-load" data-src={woocommerce} height="49" width="169" alt="woocommerce"/>
                                <noscript><img src={woocommerce} height="49" width="169" alt="woocommerce"/></noscript>
                            </a>
                        </li>
                        <li>
                            <a href="shopping-cart-integrations/index.html">
                                <img className="js-lazy-load" data-src={amazon} height="49" width="169" alt="amazon"/>
                                <noscript><img src="modules/home/templates/images/integrations/amazon.png" height="49" width="169" alt="amazon"/></noscript>
                            </a>
                        </li>
                        <li>
                            <a href="shopping-cart-integrations/index.html">
                                <img className="js-lazy-load" data-src={ebay} height="49" width="169" alt="ebay"/>
                                <noscript><img src={ebay} height="49" width="169" alt="ebay"/></noscript>
                            </a>
                        </li>
                        <li>
                            <a href="shopping-cart-integrations/index.html">
                                <img className="js-lazy-load" data-src={magento} height="49" width="169" alt="magento"/>
                                <noscript><img src={magento} height="49" width="169" alt="magento"/></noscript>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="horiz-scroller__nav"></div>
            </div>
        </div>

        <div className="home__businesses">
            <h2>Our Other <strong>Business Services</strong></h2>

            <div className="home__businesses-cont">
                <div className="home__business home__business--kong">
                    <h3>Kong easyCommerce</h3>

                    <p>The free and simple way to create a professional online store and grow your business.
                        Whether an entrepreneur or seasoned eCommerce pro, you'll find that everything from Kong's intuitive theme editor to our unique shipping profiles has been designed to be easy to use and incredibly powerful.
                    </p>

                    <div className="home__business-cta">
                        <a href="http://trykong.com/?utm_source=ParcelMonkey&utm_medium=PM-HP-Main&utm_content=FreeTrial&utm_campaign=PM_Homepage_Main" target="_blank" className="btn btn--v-3">Get Your Free Kong Store Now <span className="home__new-star"></span></a>
                        <a href="http://trykong.com/?utm_source=ParcelMonkey&utm_medium=PM-HP-Main&utm_content=FreeTrial&utm_campaign=PM_Homepage_Main" target="_blank">
                            <img className="js-lazy-load" data-src={kong_scr} alt="Kong Screenshot" height="196" width="483" />
                            <noscript><img src="modules/home/templates/images/kong-screenshot.png" alt="Kong Screenshot" height="196" width="483" /></noscript>
                        </a>
                    </div>
                </div>

                <div className="home__business home__business--cloud">
                    <h3>Cloud fulfilment</h3>

                    <p>
                      Cloud Fulfilment a scalable, affordable, end-to-end pick, pack and distribution service. You can outsource your storage, order fulfilment & returns processing to Cloud Fulfilment. You're able to monitor your inventory, orders and fulfilment operation in real time online, leaving you to concentrate on growing your business.
                    </p>

                    <div className="home__business-cta">
                        <a href="https://www.cloudfulfilment.co.uk/" target="_blank" className="btn btn--v-3">Click Here to find out more</a>
                        <a href="https://www.cloudfulfilment.co.uk/" target="_blank">
                            <img className="js-lazy-load" data-src={cloud_scr} alt="Kong Screenshot" height="196" width="483" />
                            <noscript><img src="modules/home/templates/images/cloud-screenshot.png" alt="Kong Screenshot" height="196" width="483" /></noscript>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
  }
}
const mapStateToProps = state => ({
    parcel: state.parcel.parcel
  });

export default connect(mapStateToProps, { getAParcel })(Main);