/* eslint-disable import/no-extraneous-dependencies */
import { render } from "react-dom"
import { Page as FillViewport, Box, ScrollView } from "react-layout-components"
import HelloWorld from "./components/presentation/HelloWorld"
import Page from "./components/presentation/Page"
import styles from "./styles.css"

const root = document.getElementById("root")

render((
	<FillViewport>
		<Page
			top={
				<Box fit style={{ backgroundColor: "yellow" }}>
					<h1>Hello world</h1>
				</Box>
			}
			topIsSticky={false}
			left={
				<Box width={400} style={{ backgroundColor: "red" }} />
			}
			right={(
				<Box width={200} style={{ backgroundColor: "green" }} />
			)}
			bottom={(
				<Box fit height={100} style={{ backgroundColor: "violet" }} />
			)}>
			<HelloWorld />
			{/* <div style={{ height: "5000px" }}>.</div> */}
		</Page>
	</FillViewport>
), root)
