import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import IconDemo from './lib/icon/icon.showCode';
import ButtonExample from './lib/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import {Layout, Aside, Header, Content, Footer} from './lib/layout/layout';
import './example.scss'
import './lib/layout/layout.example.scss'
// @ts-ignore
import logo from './lib/icons/logo.jpg'

ReactDom.render(
  <Router>
    <Layout className='site-page' style={{border: '1px solid blue'}}>
      <Header className='site-header' style={{border: '1px solid red'}}>
        <div className='logo'>
          <img src={logo} width="48" height="48" alt=""/>
          <span>RUI</span>
        </div>
      </Header>

      <Layout>
        <Aside className='site-aside' style={{border: '1px solid blue'}}>
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout</NavLink>
            </li>
          </ul>
        </Aside>

        <Content className='site-main' style={{border: '1px solid green'}}>
          <Routes>
            <Route path='/icon' element={<IconDemo/>} />
            <Route path='/button' element={<ButtonExample/>} />
            <Route path='/dialog' element={<DialogExample/>} />
            <Route path='/layout' element={<LayoutExample/>} />
          </Routes>
        </Content>
      </Layout>

      <Footer className='site-footer' style={{border: '1px solid red'}}>
        版权所有
      </Footer>
    </Layout>
  </Router>, document.querySelector('#root')
);