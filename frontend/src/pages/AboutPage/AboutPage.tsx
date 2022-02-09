import React from 'react'
import Layout from 'ui/organisms/Layout/Layout'
import './AboutPage.scss'
import Photo1 from "./resources/1.jpg";
import Photo2 from "./resources/2.jpg";
import Photo3 from "./resources/3.jpg";
import Photo4 from "./resources/4.jpg";
import Photo5 from "./resources/5.jpg";
const AboutPage = ():React.ReactElement => {
    return (
        <Layout>
        </Layout>
    )
}

export default AboutPage
interface MyName {
    id: number,
    city: string
}
const counter:number = 5;
const getName =():string => {
    return "hai";
}