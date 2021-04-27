import React from 'react'

export const Footer = () => {
    return (
   <div className="cotainer-sm bg-primary ">
    <div className="footer-clean bg-primary">
    <footer>
        <div className="container text-white">
            <div className="row justify-content-center">
                <div className="col-sm-4 col-md-3 item">
                    <h3>Services</h3>
                    <ul>
                        <li>Web design</li>
                        <li>Development</li>
                        <li>Hosting</li>
                    </ul>
                </div>
                <div className="col-sm-4 col-md-3 item">
                    <h3>About</h3>
                    <ul>
                        <li>Company</li>
                        <li>Team</li>
                        <li>Legacy</li>
                    </ul>
                </div>
                <div className="col-sm-4 col-md-3 item">
                    <h3>Careers</h3>
                    <ul>
                        <li>Job openings</li>
                        <li>Employee success</li>
                        <li>Benefits</li>
                    </ul>
                </div>
                <div className="col-lg-3 item social">
                    <p className="copyright">Student Connect © 2021</p>
                </div>
            </div>
        </div>
    </footer>
</div>
</div>
    )
}

export default Footer;
