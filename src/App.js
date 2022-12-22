import React, { useState, useMemo, useEffect } from 'react'
import './styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Posts from './pages/Posts'
import Navbar from './components/Navbar'

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="about" element={<About />}></Route>
				<Route path="*" element={<Posts />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
