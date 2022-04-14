import React from 'react'
import '../css/main.css';

class Footer extends React.Component{
    render(){
        return(
            <div>
                        <div className="container-fluid">
        <div className="row text-center justify-content-around p-sm-2 align-items-baseline p-md-3">
          <div className="col-md-4 col-12 col-sm-3">
            <section>
              <ul>
                <h2>MY ACCOUNT</h2>
                <li><a href="/" className="nav-link">Orders</a></li>
                <li><a href="/" className="nav-link">Returns/Refunds</a></li>
                <li><a href="/" className="nav-link">Frequently Asked Questions</a></li>
              </ul>
            </section>
          </div>
          <div className="col-md-4 col-12 col-sm-3">
            <section>
              <ul>
                <h2>CONTACT US</h2>
                <li><a href="/" className="nav-link">Customer Support</a></li>
                <li><a href="/" className="nav-link">Store Locator</a></li>
              </ul>
            </section>
            <section>
              <ul>
                <h2>ABOUT US</h2>
                <li><a href="/" className="nav-link">Official Brand Store</a></li>
                <li><a href="/" className="nav-link">About Us</a></li>
              </ul>
            </section>
          </div>
          <div className="col-md-4 col-12 col-sm-3">
            <section>
              <ul>
                <h2>SOCIAL</h2>
                <li><a href="/" className="nav-link">Facebook</a></li>
                <li><a href="/" className="nav-link">Twitter</a></li>
                <li><a href="/" className="nav-link">Youtube</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
        );
    }
}

export default Footer;

