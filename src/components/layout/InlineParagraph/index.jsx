import React from "react"
import { Box, Container } from "react-layout-components"
import "./styles.css"

const InlineParagraph = ({ fit, textAlignment = "center", textPadding = "2em", left, right, children }) => (
    <Box fit={fit} className="InlineParagraph">
        {left}
		  <Box className={`InlineParagraph__text-container InlineParagraph__text-container--align-${textAlignment}`}
		  		column
            flex="1">
            <div className="InlineParagraph__text-spacer-top" />
            <Container className="InlineParagraph__text"
                column
                padding={textPadding}>
                {children}
            </Container>
            <div className="InlineParagraph__text-spacer-bottom" />
        </Box>
        {right}
    </Box>
)

export default InlineParagraph
