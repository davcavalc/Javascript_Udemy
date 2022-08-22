import "./App.css";
import LinkTree from "./Componentes/LinkTree";

// import Lista from "./Componentes/Lista";

function App() {
	// const link = ["Instagram", "Facebook", "Youtube", "Snapchat"];

	return (
		<>
			{/* <h1 className="text-center text-3xl text-bold mb-6">Renderização de listas</h1> */}
			{/* <Lista items={link}/> */}
			<LinkTree />
		</>
	);
}

export default App;
