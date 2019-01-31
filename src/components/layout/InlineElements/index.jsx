import React from "react"
import "./styles.css"
import Align from "../Align";

const InlineElements = ({ children, padding, defaultAlignment = "center" }) => (
    <div className="InlineElements">
        {children.map(child => (
            <div className={`InlineElements__child`}
                style={{ paddingRight: padding }}>
                <Align alignment={defaultAlignment}>
                {child}
                </Align>
            </div>
        ))}
    </div>
)

export default InlineElements
