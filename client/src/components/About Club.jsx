import React, { useState } from 'react';


function App() {
	const [count, setCount] = useState(0)
	return (
		<div className="App rounded-2 row d-flex justify-content-center align-items-center vanishIn">
			<div className="col-md-12 m-2">
				<h1 className="col-md-12 text-center mb-3">About Club</h1>
				<div className="col-md-12 m-1">
					<div className="col-md-6 d-flex justify-content-center align-item-center">
						<img src="" alt="" />
					</div>
					<div className="col-md-6 d-flex justify-content-center align-item-center">
						<h1 className="col-md-12 m-1 text-center">
							
						</h1>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App