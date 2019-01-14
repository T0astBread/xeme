import React from "react"
import {Box, ScrollView} from "react-layout-components"
import "./styles.css"
import "./colors.css"
import "./typography.css"

const Page = ({ top, topIsSticky = false, left, right, bottom, children, theme = "dark" }) => {
    return (
        <Box className={`Page Page--theme-${theme}`} fit column>
            <Box className={`Page__top Page__top--${topIsSticky ? "" : "not-"}sticky`}>
                {top}
            </Box>
            <Box className="Page__body" flexGrow="1">
                <Box className="Page__left">
                    {left}
                </Box>
                <div className="Page__main">
                    {children}
                </div>
                <Box className="Page__right">
                    {right}
                </Box>
            </Box>
            <Box className="Page__bottom">
                {bottom}
            </Box>
        </Box>
    )
}
 
export default Page