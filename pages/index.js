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
      <Content>
        <em>I am currently available for work.</em>
      </Content>
      <Content>
        Hey! I'm <strong>Seb Insua</strong>, a full-stack engineer.
      </Content>
    </Box>
  </Article>
)
