import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Aside from './aside';
import Footer from './footer';
import './layout.example.scss'

export default function () {
  return (
    <div>
      <div>
        <h1>example 1</h1>
        <Layout>
          <Header className='x'>header</Header>
          <Content className='y'>content</Content>
          <Footer className='x'>footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>example 2</h1>
        <Layout>
          <Header className='x'>header</Header>
          <Layout>
            <Aside className='z'>aside</Aside>
            <Content className='y'>content</Content>
          </Layout>
          <Footer className='x'>footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>example 3</h1>
        <Layout>
          <Header className='x'>header</Header>
          <Layout>
            <Content className='y'>content</Content>
            <Aside className='z'>aside</Aside>
          </Layout>
          <Footer className='x'>footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>example 4</h1>
        <Layout>
          <Aside className='z'>aside</Aside>
          <Layout>
            <Header className='x'>header</Header>
            <Content className='y'>content</Content>
            <Footer className='x'>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};