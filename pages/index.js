import React from 'react'
import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    background: #fff;
    color: #333;
    font-family: Cardo, Gerogia, serif;
    font-size: 1.3em;
    line-height: 1.6em;

    margin: 0px;
    padding: 0px;
  }
`

const Article = styled.article`
  margin: 0 auto;
  max-width: 42em;
`

const Header = styled.header`
  display: flex;
  flex-direction: row-reverse;
  height: 108px;
  margin-bottom: 60px;

  opacity: 0;

  &:hover {
    transition: opacity 0.75s ease-in-out;
    opacity: 1;
  }
`

const List = styled.ul`
  align-self: center;
`

const Item = styled.li`
  list-style-type: none;
  display: inline-block;
  font-size: 1em;
  margin-left: 0.5em;
`

const Link = styled.a`
  color: #000;
  text-decoration: none;
  border-bottom: 1px solid #ccc;

  &:hover {
    background-color: #fdf9ec;
  }
`

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Content = styled.div`
  background: linear-gradient(100deg, #FF9269 15%,  #F76631 35%, #1778E9);
  background-clip: text;
  -webkit-background-clip: text;

  flex-grow: 0;
  flex-basis: 50%;
  text-decoration: none;

  h3 {
    line-height: 1.4em;
  }
  .intention {
    font-size: 1.15em;
    line-height: 1.4em;
  }

  abbr {
    cursor: help;
    text-decoration: none;
  }
  a {
    text-decoration: none;
    color: transparent;
  }
  strong {
    color: transparent;
  }

  .actions a {
    color: #000;
    border-bottom: 1px solid #ccc;

    &:hover {
      background-color: #fdf9ec;
    }
  }
`

export default () => (
  <Article>
    <Header>
      <List>
        <Item>
          <Link href='http://github.com/sebinsua'>GitHub</Link>
        </Item>
        <Item>
          <Link href='http://twitter.com/sebinsua'>@sebinsua</Link>
        </Item>
        <Item>
          <Link href='http://hire.duplo.tech'>~</Link>
        </Item>
        <Item>
          <Link href='http://duplo.tech'>ℬ</Link>
        </Item>
      </List>
    </Header>
    <Box>
      <Content />
      <Content>
        <h3>
          I'm{' '}
          <strong>Seb Insua</strong>,
          {' '}
          a consultant software engineer based in{' '}
          <abbr title='London, United Kingdom'>London</abbr>
          .
        </h3>
        <p className='intention'>
          I like to advise on how to maximise{' '}
          <strong>technical leverage</strong>
          {' '}while reducing exposure to{' '}
          <strong>execution costs</strong>.
        </p>
        <p>
          Knowing when not to solve a problem is as important as knowing how to solve it.
        </p>
        <p className='actions'>
          <a href='mailto:me@sebinsua.com'>Say hi</a>
          ,
          read{' '}
          <a href='http://duplo.tech'>one of my essays</a>
          ,
          look at my
          {' '}
          <a href='http://github.com/sebinsua'>GitHub</a>{' '}
          and <a href='http://twitter.com/sebinsua'>follow me on Twitter</a>.
        </p>
      </Content>
    </Box>
  </Article>
)
