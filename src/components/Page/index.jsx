import React from "react"
import styles from "./styles.css"

const Page = ({ children, theme = "dark" }) => {
    return (
        <div className={`Page Page--theme-${theme}`}>
            {children}
        </div>
    )
}
 
export default Page