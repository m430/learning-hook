import React, { useRef, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import {
  Demo1,
  Demo2,
  Demo3,
  Demo4,
  Demo5
} from '../src';
import Container from '../tools/Container';

function Story5() {
  let inputRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 3000);
  })

  return (
    <Demo5 ref={inputRef} />
  )
}

storiesOf('Hook', module)
  .add('useState', () => <Container><Demo1 /></Container>)
  .add('useEffect', () => <Container><Demo2 /></Container>)
  .add('useReducer', () => <Container><Demo3 /></Container>)
  .add('useRef', () => <Container><Demo4 /></Container>)
  .add('useImperativeHandle', () => <Container><Story5 /></Container>)