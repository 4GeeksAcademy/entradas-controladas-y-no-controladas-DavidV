import React from "react";

//import components
import EntradaSimple1 from "../components/EntradaSimple1"
import EntradaSimple2 from "../components/EntradaSimple2";


//create your first component
const Home = () => {
	return (
		<>
            <EntradaSimple1 />
			<EntradaSimple2 />
		</>
	);
};

export default Home;