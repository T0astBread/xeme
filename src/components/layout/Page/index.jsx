import React from "react"
import {Box, ScrollView} from "react-layout-components"
import styles from "./styles.css"

const Page = ({ top, topIsSticky = false, left, right, bottom, children, theme = "dark" }) => {
    return (
        <div className={`Page Page--theme-${theme}`} fit column>
            <div className={`Page__top Page__top--${topIsSticky ? "" : "not-"}sticky`}>
                {top}
            </div>
            <div className="Page__body" flexGrow="1">
                <div className="Page__left">
                    {left}
                </div>
                <div className="Page__main" flex="1 1 auto">
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