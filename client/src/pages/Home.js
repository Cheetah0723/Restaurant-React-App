import React, {Component} from 'react';
import CustomParallax from '../components/CustomParallax'
import home_top from '../assets/home_top.jpg'
import home_sitting from '../assets/home_sitting.jpg'
import home_kitchen from '../assets/home_kitchen.jpg'
import KitchenNames from "../components/KitchenNames";
import HomeCards from "../components/HomeCards";
import CustomContainer from "../components/CustomContainer";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <CustomParallax title='home cuisine' text="Voted IDC's Best Thai Restaurant" img={home_top} height={800}/>
                <CustomContainer/>
                <CustomParallax title='eat together'
                                text='Every plate achieves that elusive, cuisine-defining balance of sweet, salty, and sour — even dessert.'
                                img={home_sitting} buttonText='Button' height={600}/>
                <HomeCards/>
                <CustomParallax title='the kitchen' img={home_kitchen} height={800}/>
                <KitchenNames/>
            </React.Fragment>
        );
    }
}

export default Home;