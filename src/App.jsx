import React from 'react'
import Header from './Header/Header'
import fetchApi from './services/Api'
import { useEffect, useState } from 'react';
import Converter from './Convert/Convert'

import "./App.css"

export default function App() {
  const [sum, setCurrencies] = useState([]);

  useEffect(() => {
    fetchApi().then(res => {
      const value = res.splice(0,3)
      setCurrencies(value)
      console.log(value);
    });
  }, []);
  return (
    <div>
      <Header sum={sum}/>
      <main>
        <Converter/>
      </main>
    </div>
  )
}


