import React from "react"
import { Box } from "react-layout-components"
import Bevel from "../Bevel"
import styles from "./styles.css"

const HeaderBar = ({ children }) => {
    return (
        <Box fit className="HeaderBar">
            {children}
            <Bevel bottom />
        </Box>
    )
}

export default HeaderBar