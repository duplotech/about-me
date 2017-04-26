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

const PageWrapper = styled.article`
  margin: 0 auto;
  max-width: 42em;
`

const Header = styled.header`
  display: flex;
  flex-direction: row-reverse;
  height: 108px;
  margin-bottom: 50px;

  opacity: 0;
  &:hover {
    transition: opacity 0.75s ease-in-out;
    opacity: 1;
  }

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`

const HeaderActions = styled.ul`
  align-self: center;

  li {
    list-style-type: none;
    display: inline-block;
    font-size: 1em;
    margin-left: 0.5em;

    a {
      color: #000;
      text-decoration: none;
      border-bottom: 1px solid #ccc;

      &:hover {
        background-color: #fdf9ec;
      }
    }
  }
`

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const Pitch = styled.div`
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
  strong {
    color: transparent;
  }

  @media (max-width: 768px) {
    flex-grow: initial;
    flex-basis: initial;
    padding: 1em;
  }

  @media (max-width: 480px) {
    padding: 0.5em;
  }
`

const Action = styled.a`
  color: #000;
  border-bottom: 1px solid #ccc;
  text-decoration: none;

  &:hover {
    background-color: #fdf9ec;
  }
`

export default () => (
  <PageWrapper>
    <Header>
      <HeaderActions>
        <li>
          <a href='http://github.com/sebinsua'>GitHub</a>
        </li>
        <li>
          <a href='http://twitter.com/sebinsua'>@sebinsua</a>
        </li>
        <li>
          <a href='http://hire.duplo.tech'>~</a>
        </li>
        <li>
          <a href='http://duplo.tech'>ℬ</a>
        </li>
      </HeaderActions>
    </Header>
    <MainWrapper>
      <Pitch>
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
        <p>
          <Action href='mailto:me@sebinsua.com'>Say hi</Action>
          ,
          read{' '}
          <Action href='http://duplo.tech'>one of my essays</Action>
          ,
          look at my
          {' '}
          <Action href='http://github.com/sebinsua'>GitHub</Action>{' '}
          and{' '}
          <Action href='http://twitter.com/sebinsua'>
            follow me on Twitter
          </Action>
          .
        </p>
      </Pitch>
    </MainWrapper>
  </PageWrapper>
)
