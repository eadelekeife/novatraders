import React from "react"
import Footer from "./footer"
import Navigation from "./nav"

interface DisplayInterface {
    children: React.ReactElement
}

const DisplayLayout = (props: DisplayInterface) => {
    return (
        <>
            <Navigation />
            {props.children}
            <Footer />
        </>
    )
}

export default DisplayLayout;