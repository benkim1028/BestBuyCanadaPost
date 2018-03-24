import React, {Component} from "react";

class Header extends Component {
    render() {
        return (
            <header id="global-header"
                    className="container full-header-container core-components core-utilities core-base bby-style-wrapper fdn"
                    data-ng-controller="BbyHeaderController as headerVm" data-headroom
                    data-classes='{"notTop":"scrolled"}' data-click-outside="headerVm.leaveMenu()">
                <nav className="row utility-toolbar">
                    <div className="columns small-12">
                        <ul className="utility-toolbar-links left inline-list">
                            <li>
                                <a id="ctl00_MasterHeader_ctl00_uchead_linkBBForBusiness"
                                   className="utility-toolbar-link"
                                   rel="nofollow"
                                   href="/en-CA/best-buy-for-business.aspx?NVID=utility%20lnk;best%20buy%20business;lnk;c1;r1;en">
                                    Best Buy for Business</a>
                            </li>
                            <li>
                                <a id="ctl00_MasterHeader_ctl00_uchead_linkBlogForum" className="utility-toolbar-link"
                                   rel="nofollow" href="http://blog.bestbuy.ca">Best Buy Blog</a>
                            </li>
                        </ul>
                        <ul className="utility-toolbar-links right inline-list">
                            <li>
                                <a id="ctl00_MasterHeader_ctl00_uchead_linkFindAStore" className="utility-toolbar-link"
                                   rel="nofollow"
                                   href="/en-CA/stores/store-locator.aspx?NVID=utility%20lnk;store%20locator;lnk;c3;r1;en">Find
                                    a Store</a>
                            </li>
                            <li>
                                <a id="ctl00_MasterHeader_ctl00_uchead_linkOrderStatus" className="utility-toolbar-link"
                                   rel="nofollow"
                                   href="/profile/checkorderstatus.aspx?NVID=utility%20lnk;order%20history;lnk;c4;r1;en">Order
                                    Status</a>
                            </li>
                            <li>
                                <a id="ctl00_MasterHeader_ctl00_uchead_linkHelpCentre" className="utility-toolbar-link"
                                   rel="nofollow" href="/en-CA/help.aspx?NVID=utility%20lnk;help%20centre;lnk;c5;r1;en">Help
                                    Centre</a>
                            </li>
                            <li>

                                <a id="ctl00_MasterHeader_ctl00_uchead_languageToggle_french"
                                   className="utility-toolbar-link" href="/fr-CA/home.aspx">Français</a>
                            </li>
                            <li className="welcome">


                                <div id="welcomejs">
	<span id="NotRecognized" style={{display: "none"}}>
		<a id="ctl00_MasterHeader_ctl00_uchead_ucWelcome_linkSignIn" className="utility-toolbar-link"
           href="/profile/signin.aspx?ReturnURL=/DefaultPage.aspx">Sign In</a>
	</span>
                                    <span id="Recognized" style={{display: "none"}}>
	    <span id="ctl00_MasterHeader_ctl00_uchead_ucWelcome_lblGreeting">Hi</span>
	    <input name="ctl00$MasterHeader$ctl00$uchead$ucWelcome$HfdFirstNameLength" type="hidden"
               id="ctl00_MasterHeader_ctl00_uchead_ucWelcome_HfdFirstNameLength" value="9"/>
	    <span id="FirstNameLabel"></span>!
		<a id="ctl00_MasterHeader_ctl00_uchead_ucWelcome_linkSignOut" className="utility-toolbar-link"
           href="/profile/signout.aspx?">Sign Out</a>
	</span>
                                </div>

                            </li>
                            <li className="margin-s-right">


                                <a className="utility-toolbar-link my-account-link" id="my-account-link"
                                   data-ng-click="headerVm.toggleCurrentMenuItem('myAccount')"
                                   data-ng-className="{active:headerVm.isCurrentMenu('myAccount')}"><span
                                    className="underlined-text">My Account</span><i
                                    className="margin-xxs-left icon-bby-triangle-down"></i></a>
                                <ul id="my-account-dropdown" className="my-account-dropdown"
                                    data-ng-show="headerVm.isCurrentMenu('myAccount')"
                                    data-ng-className="{open:headerVm.isCurrentMenu('myAccount')}"
                                    data-click-outside="headerVm.toggleCurrentMenuItem('myAccount')"
                                    data-outside-if-not="my-account-link">
                                    <li><a rel="nofollow"
                                           href="/profile/createaccount.aspx?NVID=my%20account;create%20account;lnk;c1;r1;en"
                                           id="utility-toolbar-create-account">Create an Account</a></li>
                                    <li><a rel="nofollow"
                                           href="/profile/accountsummary.aspx?NVID=my%20account;account%20summary;lnk;c1;r2;en">Account
                                        Summary</a></li>
                                    <li><a rel="nofollow"
                                           href="/order/orderhistory.aspx?NVID=my%20account;order%20history;lnk;c1;r3;en">My
                                        Orders</a></li>
                                    <li><a rel="nofollow"
                                           href="/en-CA/bbycard.aspx?NVID=my%20account;bby%20card;lnk;c1;r4;en">My Best
                                        Buy Credit Card</a></li>
                                </ul>


                            </li>
                        </ul>
                    </div>
                </nav>

                <nav className="main-navigation-container-scrolled-placeholder"></nav>

                <nav className="main-navigation-container">
                    <div className="row main-navigation">
                        <div className="columns navigation-links-column">
                            <ul className="navigation-links inline-list">
                                <li>

                                    <a id="ctl00_MasterHeader_ctl00_uchead_HypHeaderLogo" href="/" className="block">
                                        <img src="https://images.bbycastatic.ca/sf/images/common/main-logo.svg"
                                             className="margin-top-one block" width="60" alt="Best Buy Logo"/>
                                    </a>

                                </li>

                                <li>
                                    <a className="navigation-link" id="shop-menu-link"
                                       data-ng-click="headerVm.toggleCurrentMenuItem('shop')"
                                       data-ng-className="{active:headerVm.isCurrentMenu('shop')}">
                                        Shop</a>
                                </li>

                                <li>
                                    <a className="navigation-link" id="brands-menu-link"
                                       data-ng-click="headerVm.toggleCurrentMenuItem('brands')"
                                       data-ng-className="{active:headerVm.isCurrentMenu('brands')}">
                                        Brands</a>
                                </li>

                                <li>
                                    <a className="navigation-link" id="deals-menu-link"
                                       data-ng-click="headerVm.toggleCurrentMenuItem('deals')"
                                       data-ng-className="{active:headerVm.isCurrentMenu('deals')}">
                                        Deals</a>
                                </li>
                            </ul>
                        </div>
                        <div className="columns navigation-search-form-column foundation-form">
                            <div className="row navigation-search-form postfix-radius collapse">
                                <div id="ctl00_MasterHeader_ctl00_uchead_GlobalSearchUC_PnlSearch"
                                     className="small-12 columns"
                                     onkeypress="javascript:return WebForm_FireDefaultButton(event, &#39;ctl00_MasterHeader_ctl00_uchead_GlobalSearchUC_BtnSubmitSearch&#39;)">

                                    <div className="row collapse">
                                        <div className="small-11 columns">
                                            <input
                                                name="ctl00$MasterHeader$ctl00$uchead$GlobalSearchUC$TxtSearchKeyword"
                                                maxlength="200"
                                                id="ctl00_MasterHeader_ctl00_uchead_GlobalSearchUC_TxtSearchKeyword"
                                                title="Search Best Buy" className="navigation-search-box" type="search"
                                                Placeholder="Search Best Buy" autocomplete="off"
                                                data-ng-focus="headerVm.toggleCurrentMenuItem(&#39;search&#39;)"
                                                data-ng-blur="headerVm.leaveMenu()"/>
                                            <input name="ctl00$MasterHeader$ctl00$uchead$GlobalSearchUC$Path"
                                                   type="hidden"
                                                   id="ctl00_MasterHeader_ctl00_uchead_GlobalSearchUC_Path"
                                                   className="hidden-search-filter"/>
                                        </div>
                                        <div className="small-1 columns">
                                            <a id="ctl00_MasterHeader_ctl00_uchead_GlobalSearchUC_BtnSubmitSearch"
                                               className="button postfix navigation-search-button">
                                                <i className="icon-search"></i>
                                            </a>
                                        </div>
                                    </div>

                                </div>


                                <div className="widget-search-extend">
                                    <ul className="search-autocomplete"></ul>
                                    <ul className="search-history"></ul>
                                </div>
                            </div>
                        </div>
                        <div className="columns small-1">
        <span id="UpdQc">

    <a href="/order/basket.aspx?" title="Cart" className="navigation-cart-button">
        <i className="icon-cart-icon"></i>

        <span className="navigation-cart-circle">
            <span id="ctl00_MasterHeader_ctl00_uchead_QC_CIC" className="navigation-cart-quantity"></span>
        </span>
    </a>





        </span>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;