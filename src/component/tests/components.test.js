import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavigationMenu from '../Navbar';
import MyCalculator from '../Calculator';
import Home from '../Home';
import Quote from '../Quote';

it('Check if navigation menu renders correctly', () => {
  const navTree = renderer.create(
    <MemoryRouter>
      <NavigationMenu />
    </MemoryRouter>,
  ).toJSON();
  expect(navTree).toMatchSnapshot();
});

test('Check if calculator component renders correctly', () => {
  const calcComponent = renderer.create(
    <MemoryRouter>
      <MyCalculator />
    </MemoryRouter>,
  ).toJSON();
  expect(calcComponent).toMatchSnapshot();
});

test('Check if Home component renders correctly', () => {
  const homeComponent = renderer.create(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  ).toJSON();
  expect(homeComponent).toMatchSnapshot();
});

test('Check if Quote component renders correctly', () => {
  const quoteComponent = renderer.create(
    <MemoryRouter>
      <Quote />
    </MemoryRouter>,
  ).toJSON();
  expect(quoteComponent).toMatchSnapshot();
});
