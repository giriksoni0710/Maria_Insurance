import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import MoneyIcon from '@material-ui/icons/AccountBalanceWalletSharp';

class HomePage extends Component{
    render(){
        return(
            <div>
                 <div class="banner">
                     
                <div class="overlay">
                    
                </div>
                <div class="bannertagline">
                <h3>this is the tagline<span>what are you saying</span><span>
                    i dont get it</span></h3>
                                    
                </div>
                
                 </div>
                 <div class="fourbenefits">
                    <MoneyIcon></MoneyIcon>
                 </div>

                 <div class="everystep">

              
                 </div>
                 <div class="mainform">
                     <div class="contactoverlay">
                 <Contact></Contact>
                 </div>
                 </div>
                 <Footer></Footer>
            </div>
        )
    }
}

export default HomePage