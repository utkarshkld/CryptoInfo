import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'

import {Layout,Typography,Space} from 'antd'
import { Navbar , Homepage, Exchanges,Cryptocurrencies,News,CryptoDetails} from './components'
import './App.css'
const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar></Navbar>
        </div>
        <div className='main'>
            <Layout>
                <div className='routes'>
                    <Routes>
                        <Route  path='/' element={<Homepage></Homepage>}></Route>
                        <Route path='/exchanges' element={<Exchanges></Exchanges>}></Route>
                        <Route  path='/cryptocurrencies' element={<Cryptocurrencies simplified={false}></Cryptocurrencies>}></Route>
                        <Route  path='/crypto/:coinId' element={<CryptoDetails></CryptoDetails>}></Route>
                        <Route  path='/news' element={<News></News>}></Route>
                    </Routes>
                </div>
            </Layout>
        
        <div className='footer'>
            <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
                Cryptoverse <br></br>
                All rights reserved
            </Typography.Title>
            <Space>
                <Link to='/'>Home</Link>
                <Link to='/exchanges'>Exchanges</Link>                
                <Link to='/news'>News</Link>
            </Space>
        </div>
        </div>
    
    </div>
  )
}

export default App
