import React from "react";
import Nav from "./Nav.js";
import Footer from "./Footer.js";
export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="mt-3" style={{minHeight:"80vh"}}>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}