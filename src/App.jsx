import { useState } from 'react'

import './App.css'
import { Table } from './components/table'
import { Backlog } from './components/dragAndDrop/Backlog'

function App() {

  return (
    <>
      <Table/>
      <Backlog/>
    </>
  )
}

export default App
