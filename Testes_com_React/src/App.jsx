import "./App.css";
import LinkTree from "./Componentes/LinkTree";

// import Lista from "./Componentes/Lista";

function App() {
	// const link = ["Instagram", "Facebook", "Youtube", "Snapchat"];

	return (
		<>
			{/* <h1 className="text-center text-3xl text-bold mb-6">Renderização de listas</h1> */}
			{/* <Lista items={link}/> */}
			<section className="section">
				<h1 className="title">Hello World</h1>
				<p className="subtitle">My React app with Bulma CSS</p>
				<p className="text-5xl font-bold">OK</p>
				<button className="button is-danger mt-4 rounded-full">Click here</button>
			</section>
			<LinkTree />
		</>
	);
}

export default App;
