import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { MantineProvider, Text,Badge, Button } from '@mantine/core';
import Search from './components/Search';
import { Paginate } from './components/Paginate';
import CreateCoupon from './components/CreateCoupon';
import Table from './components/Table';


function App() {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {/* <Text>Welcome to Mantine!</Text> */}
      {/* <Search/> */}
      <Table />
      {/* <CreateCoupon/> */}
      {/* <Paginate/> */}
    </MantineProvider>
  )
}

export default App
