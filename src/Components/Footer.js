import React, {Component} from 'react';

import Facebook from '@material-ui/icons/Facebook';


class Footer extends Component {
    render(){
        return(
            <div>
               <footer style={{padding: '1rem', textAlign: 'left'}}>
    <div class="container">
        <div class="footer-top">
            <div class="row">
                
                <div class="col-md-6 col-lg-2 page-more-info">
                    <div class="footer-title">
                        <h4>Page links</h4>
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

              
                <div class="col-md-6 col-lg-4 open-hours">
                    <div class="footer-title">
                        <h4>Open hours</h4>
                        <ul class="footer-social">
                            <li><a href="" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="" target="_blank"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>

                        </ul>
                    </div>
                    <table class="table">
                        <tbody>
                            <tr>
                                <td><i class="far fa-clock"></i>Monday Thursday</td>
                                <td>9:00am - 5:00pm</td>
                            </tr>
                            <tr>
                                <td><i class="far fa-clock"></i>Friday</td>
                                <td>9:00am - 4:00pm</td>
                            </tr>
                            <tr>
                                <td><i class="far fa-clock"></i>Sturday</td>
                                <td>9:00am - 1:30pm</td>
                            </tr>
                            <tr>
                                <td><i class="far fa-clock"></i>Sunday</td>
                                <td>9:30am - 12:00pm</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="footer-logo">

                    {/* <table>
                        <tbody>
                            <tr>
                                <td><img src="https://i.ibb.co/vxc577d/dummy-logo3.jpg"></img></td>
                                <td><img src="https://i.ibb.co/vxc577d/dummy-logo3.jpg"></img></td>
                                <td><img src="https://i.ibb.co/vxc577d/dummy-logo3.jpg"></img></td>
                                <td><img src="https://i.ibb.co/vxc577d/dummy-logo3.jpg"></img></td>
                                <td><img src="https://i.ibb.co/vxc577d/dummy-logo3.jpg"></img></td>
                            </tr>
                        </tbody>
                    </table> */}
                    </div>
                </div>
            </div>
        </div>
        <hr></hr>
        <div class="footer-bottom">
            <div class="row">
                
                <div class="col-sm-8" style={{textAlign: 'center'}}>
                    <p>giriksoni @ 2020 All rights reserved</p>
                </div>
            </div>
        </div>
    </div>
    </footer>
            </div>
        )
    }
}

export default Footer