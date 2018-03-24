import React, {Component} from "react";

class Footer extends Component {
    render() {
        return (
            <footer className="footer fdn">

                <div className="footer-main-links flex-vertical-align">
                    <div className="row padding-s-left padding-s-right">
                        <div className="small-3 columns">
                            <div className="footer-subtitle">Order Support</div>
                            <ul>
                                <li><a href="/en-CA/secure/contact-us.aspx?NVID=footer;order%20support;contact%20us;en">Contact
                                    Us</a></li>
                                <li><a
                                    href="/profile/checkorderstatus.aspx?NVID=footer;order%20support;track%20order;en">Track
                                    an Order</a></li>
                                <li><a
                                    href="/en-CA/delivery-returns.aspx?NVID=footer;order%20support;shipping%20delivery;en">Shipping &amp; Delivery</a>
                                </li>
                                <li><a
                                    href="/en-CA/help/returns-and-exchanges/hc1075.aspx?NVID=footer;order%20support;returns%20exchanges;en">Returns &amp; Exchange</a>
                                </li>
                                <li><a
                                    href="/en-CA/reserveandpickup.aspx?NVID=footer;order%20support;reserve%20pickup;en">Reserve &amp; Pickup</a>
                                </li>
                                <li><a href="/en-CA/help.aspx?NVID=footer;order%20support;help%20centre;en">Help
                                    Centre</a></li>
                                <li><a
                                    href="/en-CA/help/best-buy-marketplace-information/hc8343.aspx?NVID=footer;whatis%20marketplace;en">What
                                    is Marketplace?</a></li>
                            </ul>
                        </div>
                        <div className="small-3 columns">
                            <div className="footer-subtitle">Product Support</div>
                            <ul>
                                <li><a
                                    href="/en-CA/help/how-do-i-select-my-preferred-stores-to-check-store-stock-availability/hc8219.aspx?NVID=footer;product%20support;store%20stock;en">Store
                                    Stock Availability</a></li>
                                <li><a href="/en-CA/parts-central.aspx?NVID=footer;product%20support;part%20store;en">Part
                                    Store</a></li>
                                <li><a
                                    href="/en-CA/best-buy-services.aspx?NVID=footer;product%20support;installation%20repairs;en">Installation &amp; Repairs</a>
                                </li>
                                <li><a
                                    href="/en-ca/help/geek-squad-terms-and-conditions/hc8321.aspx?HelpCategoryId=Best%20Buy%20Services&CategoryName=Services&ReferringPageTitle=Help%20Category%20List&NVID=footer;product%20support;protection%plans;en">Geek
                                    Squad Terms & Conditions</a></li>
                                <li><a
                                    href="/en-CA/help/lowest-price-guarantee/hc1001.aspx?NVID=footer;product%20support;price%20protection;en">Price
                                    Protection</a></li>
                                <li><a
                                    href="/en-CA/help/free-shipping-on-orders-over-25/hc8249.aspx?NVID=footer;product%20support;free%20shipping;en">Free
                                    Shipping*</a></li>
                                <li><a
                                    href="/en-CA/productrecall.aspx?NVID=footer;product%20support;product%20recall;en">Product
                                    Recall</a></li>
                                <li><a
                                    href="/en-CA/trade-in-program.aspx?NVID=footer;product%20support;trade-In%20Program;en">Trade-In
                                    Program</a></li>
                                <li><a
                                    href="/en-CA/electronics-recycling.aspx?NVID=footer;product%20support;electronics%20recycling;en">Electronics
                                    Recycling</a></li>
                            </ul>
                        </div>
                        <div className="small-3 columns">
                            <div className="footer-subtitle">Corporate Info</div>
                            <ul>
                                <li><a
                                    href="/en-CA/about-best-buy-canada.aspx?NVID=footer;corporate%20info;about%20bestbuy;en">About
                                    Best Buy Canada</a></li>
                                <li><a href="/en-CA/careers.aspx?NVID=footer;corporate%20info;careers;en">Careers</a>
                                </li>
                                <li><a href="/en-CA/sitemap-overview.aspx?NVID=footer;corporate%20info;site%20map;en">Site
                                    Map</a></li>
                                <li><a
                                    href="/en-CA/Pressroom/PressRoomInfo.aspx?NVID=footer;corporate%20info;pressroom;en">Pressroom</a>
                                </li>
                                <li><a
                                    href="/en-CA/bby-for-kids.aspx?NVID=footer;corporate%20info;best%20buy%20forx`%20kids;en">Best
                                    Buy for Kids</a></li>
                                <li><a
                                    href="/en-CA/sponsor.aspx?NVID=footer;corporate%20info;sponsorship%20opportunities;en">Sponsorship
                                    Opportunities</a></li>
                                <li><a
                                    href="/en-CA/marketplace.aspx?NVID=footer;corporate%20info;selling%20marketplace;en">Selling
                                    on Marketplace</a></li>
                                <li>

                                    <select onchange="window.location.href=this.value"
                                            className="bby-select footer-location-select font-xxs">
                                        <option value="">More Best Buy Sites</option>
                                        <option value="http://www.bestbuy.com/">Best Buy USA</option>
                                        <option value="http://www.bestbuy.com.mx/">Best Buy Mexico</option>
                                        <option
                                            value="http://www.bestbuy.ca/en-CA/category/best-buy-mobile/20006.aspx">Best
                                            Buy Mobile
                                        </option>
                                        <option value="http://www.bestbuy.ca/en-CA/category/geek-squad/22042a.aspx">Geek
                                            Squad
                                        </option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                        <div className="small-3 columns">
                            <div className="footer-subtitle">Legal</div>
                            <ul>
                                <li><a
                                    href="/en-CA/help/terms-and-conditions/hc8140.aspx?NVID=footer;legal;terms;en">Terms &amp; Conditions</a>
                                </li>
                                <li><a href="/en-CA/help/conditions-of-use/hc8137.aspx?NVID=footer;legal;conditions;en">Conditions
                                    of Use</a></li>
                                <li><a href="/en-CA/help/online-policies/hc8136.aspx?NVID=footer;legal;policies;en">Online
                                    Policies</a></li>
                                <li><a href="/en-CA/help/privacy-policy/hc1139.aspx?NVID=footer;legal;privacy;en">Privacy
                                    Policy</a></li>
                                <li><a
                                    href="/en-CA/help/privacy-policy/hc1139.aspx?NVID=footer;legal;safe%20shopping;en#howweprotectyourinformation">Safe
                                    Shopping</a></li>
                                <li><a href="/en-ca/help/accessibility-policy/hc8336.aspx">Accessibility Policy</a></li>
                            </ul>

                            <div className="footer-subtitle margin-l-top">Mobile Apps</div>
                            <ul>
                                <li><a href="/en-ca/bestbuyapps.aspx?NVID=footer;mobile%20app;android;en"><i
                                    className="footer-app-icon icon-android margin-xs-right"></i>Android App</a></li>
                                <li><a href="/en-ca/bestbuyapps.aspx?tab=2&NVID=footer;mobile%20app;iphone;en"><i
                                    className="footer-app-icon icon-apple margin-xs-right"></i>iPhone App</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-social-bar core-components">
                    <div className="row padding-s-left padding-s-right">
                        <div className="small-12 columns">
                            <ul className="footer-social-bar-links margin-xs-top margin-xs-bottom inline-list">
                                <li><a href="https://blog.bestbuy.ca/" className="footer-logo-blog" target="_blank">
                                    <img src="https://images.bbycastatic.ca/sf/assets/images/footer/social/plugin.svg"
                                         width="24" alt="Plug-in Blog"/></a></li>
                                <li><a href="https://www.facebook.com/BestBuyCanada" className="footer-logo-facebook"
                                       target="_blank">
                                    <img src="https://images.bbycastatic.ca/sf/assets/images/footer/social/facebook.svg"
                                         width="24" alt="Facebook"/></a></li>
                                <li><a href="https://www.youtube.com/user/CanadaBestBuy" className="footer-logo-youtube"
                                       target="_blank">
                                    <img src="https://images.bbycastatic.ca/sf/assets/images/footer/social/youtube.svg"
                                         width="24" alt="Youtube"/></a></li>
                                <li><a href="https://www.linkedin.com/company/best-buy" className="footer-logo-linkedin"
                                       target="_blank">
                                    <img src="https://images.bbycastatic.ca/sf/assets/images/footer/social/linkedin.svg"
                                         width="24" alt="LinkedIn"/></a></li>
                                <li><a href="https://www.instagram.com/bestbuycanada/" className="footer-logo-instagram"
                                       target="_blank">
                                    <img
                                        src="https://images.bbycastatic.ca/sf/assets/images/footer/social/instagram.svg"
                                        width="24" alt="Instagram"/></a></li>
                                <li><a href="https://www.pinterest.com/bestbuycanada/" className="footer-logo-pinterest"
                                       target="_blank">
                                    <img
                                        src="https://images.bbycastatic.ca/sf/assets/images/footer/social/pinterest.svg"
                                        width="24" alt="Pinterest"/></a></li>
                                <li><a href="https://twitter.com/bestbuycanada" className="footer-logo-twitter"
                                       target="_blank">
                                    <img src="https://images.bbycastatic.ca/sf/assets/images/footer/social/twitter.svg"
                                         width="24" alt="Twitter"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-accessibility-links flex-vertical-align">
                    <div className="row padding-s-left padding-s-right flex-vertical-align">
                        <div className="small-6 columns">
                    <span className="colour-medium-grey font-xxxs">Give us a call at 1-866-BEST-BUY (237-8289) &copy; 2018 Best Buy Canada ltd.<br/>
                        All rights reserved. For personal, non-commercial use only.</span>
                        </div>
                        <div className="small-6 columns">
                            <ul className="inline-list right">
                                <li><a
                                    href="javascript:popUpHelpDetails('/en-CA/help/what-is-mastercard-securecode/HC8350.aspx');"
                                    className="footer-logo-master-card">
                                    <img
                                        src="https://images.bbycastatic.ca/sf/assets/images/footer/master-card-secure-code.svg"
                                        width="62" alt="Master Card Secure Code"/></a></li>
                                <li><a
                                    href="javascript:popUpHelpDetails('/en-CA/help/what-is-verified-by-visa/hc1125.aspx');"
                                    className="footer-logo-visa">
                                    <img
                                        src="https://images.bbycastatic.ca/sf/assets/images/footer/disclaimer/visa-en.svg"
                                        width="46" alt="Verified by Visa"/></a></li>
                                <li><a href="javascript:popUpHelpDetails('/en-CA/help/paypal-information/hc8296.aspx');"
                                       className="footer-logo-paypal">
                                    <img
                                        src="https://images.bbycastatic.ca/sf/assets/images/footer/disclaimer/paypal.svg"
                                        width="74" alt="PayPal"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;

