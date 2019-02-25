import React from "react"
import "./styles.css"

const NoPad = ({ children, sides = ["top", "left", "bottom", "right"], noPadding = true, noMargin = true }) => (
    <div className={"NoPad " + sides.map(side => `NoPad--side-${side}`).join(" ") +
        (noPadding ? " NoPad--no-padding " : "") +
            (noMargin ? "NoPad--no-margin" : "")}>
        {children}
    </div>
)

export default NoPad
