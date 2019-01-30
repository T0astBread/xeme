/* eslint-disable import/no-extraneous-dependencies */
import { render } from "react-dom"
import { Box } from "react-layout-components"
import HeaderBar from "./components/presentation/HeaderBar"
import HelloWorld from "./components/presentation/HelloWorld"
import Page from "./components/layout/Page"
import FillViewport from "./components/layout/FillViewport"
import styles from "./styles.css"

const root = document.getElementById("root")

render((
	<FillViewport>
		<Page
			top={
				<HeaderBar>
					<h1 style={{ color: "var(--primary-1)" }}>Hello world</h1>
				</HeaderBar>
			}
			topIsSticky={true}
			left={
				<Box width={400} style={{ backgroundColor: "var(--background-2)", borderRight: "1px solid var(--primary-1)" }} fit />
			}
			right={(
				<Box width={200} style={{ backgroundColor: "var(--background-2)", borderLeft: "1px solid var(--primary-1)" }} fit />
			)}
			bottom={(
				<Box fit height={100} style={{ backgroundColor: "var(--background-2)", borderTop: "1px solid var(--primary-1)" }} />
			)}>
			<HelloWorld />
			<div style={{ height: "5000px" }}>.</div>
		</Page>
	</FillViewport>
), root)
