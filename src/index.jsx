/* eslint-disable import/no-extraneous-dependencies */
import {render} from "react-dom"
import {Page as FillViewport, Box, ScrollView} from "react-layout-components"
import HeaderBar from "./components/presentation/HeaderBar"
import Link from "./components/presentation/Link"
import HelloWorld from "./components/presentation/HelloWorld"
import Page from "./components/layout/Page"
import styles from "./styles.css"

const root = document.getElementById("root")

render((
	<FillViewport>
		<Page
			top={
				<HeaderBar>
					<h1>Hello world</h1>
				</HeaderBar>
			}
			topIsSticky={false}
			left={
				<Box width={250} style={{
					backgroundColor: "var(--background-2)",
					borderRight: "1px solid var(--primary-2)"
				}} />
			}
			right={(
				<Box width={200} style={{
					backgroundColor: "var(--background-2)",
					borderLeft: "1px solid var(--primary-2)"
				}} />
			)}
			bottom={(
				<Box fit height={100} style={{
					backgroundColor: "var(--background-2)",
					borderTop: "1px solid var(--primary-2)"
				}} />
			)}>
			<div>
				<section>
					<h1>Heading 1</h1>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptate, repellendus harum tempore sit aliquam deleniti mollitia, alias sapiente voluptatum ad? Assumenda mollitia laudantium a molestias nobis molestiae cupiditate quas.</p>
					<HelloWorld />
				</section>
				<section>
					<h2>Heading 2</h2>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptate, repellendus harum tempore sit aliquam deleniti mollitia, alias sapiente voluptatum ad? Assumenda mollitia laudantium a molestias nobis molestiae cupiditate quas.</p>
				</section>
				<section>
					<h3>Heading 3</h3>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptate, repellendus harum tempore sit aliquam deleniti mollitia, alias sapiente voluptatum ad? Assumenda mollitia laudantium a molestias nobis molestiae cupiditate quas.</p>
				</section>
				<section>
					<h4>Heading 4</h4>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptate, repellendus harum tempore sit aliquam deleniti mollitia, alias sapiente voluptatum ad? Assumenda mollitia laudantium a molestias nobis molestiae cupiditate quas.</p>
				</section>
				<section>
					<h5>Heading 5</h5>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptate, repellendus harum tempore sit aliquam deleniti mollitia, alias sapiente voluptatum ad? Assumenda mollitia laudantium a molestias nobis molestiae cupiditate quas.</p>
				</section>
				<section>
					<h6>Heading 6</h6>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptate, repellendus harum tempore sit aliquam deleniti mollitia, alias sapiente voluptatum ad? Assumenda mollitia laudantium a molestias nobis molestiae cupiditate quas.</p>
				</section>
			</div>
		</Page>
	</FillViewport>
), root)
