import React from "react"
import { Box } from "react-layout-components"
import styles from "./styles.css"

const Bevel = ({ top, bottom, left, right }) => {

    let directionClasses = []
    if (top) directionClasses.push("Bevel--top")
    if (bottom) directionClasses.push("Bevel--bottom")
    if (left) directionClasses.push("Bevel--left")
    if (right) directionClasses.push("Bevel--right")
    directionClasses = directionClasses.join(" ")

    return (
        <Box className={`Bevel ${directionClasses}`}>
            <Box className="Bevel__inner" />
        </Box>
    )
}

export default Bevel