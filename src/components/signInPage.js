import React, {Component} from "react";
import Header from "./header";
import Footer from "./footer";
import SignInForm from "./signInForm";

class SignInPage extends Component {
    render(){
        return(
            <div>
                <Header/>
                <SignInForm/>
                <Footer/>
            </div>
        )
    }
}
export default  SignInPage;