import React from "react";
import { Navbar } from "../../components/navbar/navbar";
import { HomeLayout } from  "../../layout/home/home_layout"
import { Hero } from "../../components/hero/hero";
import { Footer } from "../../components/footer/footer";
import { TextBanner } from "../../components/text_banner/text_banner";
import { BestsellersWidget } from "../../components/products/bestsellers_widget/bestsellers_widget";


export const HomeScreen = () => {
    return (
        <div>
            <Navbar/>
            <HomeLayout>
                <Hero/>
                <TextBanner><p>Welcome to the magical world of Happy Colors!</p></TextBanner>  
                <BestsellersWidget/>
            </HomeLayout>
            <Footer/>
        </div>
    )
}