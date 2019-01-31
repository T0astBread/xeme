import React from "react"
import {Box, ScrollView} from "react-layout-components"
import "./styles.css"
import "./colors.css"
import "./typography.css"

const Page = ({ top, topIsSticky = false, left, right, bottom, children, theme = "dark" }) => {
    return (
        <div className={`Page Page--theme-${theme}`}>
            <div className={`Page__top Page__top--${topIsSticky ? "" : "not-"}sticky`}>
                {top}
            </div>
            <div className="Page__body">
                <div className="Page__left">
                    {left}
                </div>
                <div className="Page__main">
                    {children}
                </div>
                <div className="Page__right">
                    {right}
                </div>
            </div>
            <div className="Page__bottom">
                {bottom}
            </div>
        </div>
    )
}
 
export default Page