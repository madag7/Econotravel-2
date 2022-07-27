import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';


beforeEach(()=>{
  render(<App />);
})
describe ('test de home',()=>{

  test('render "Travel" title', () => {  
    const title = screen.getByText(/travel/i)

    expect(title).toBeInTheDocument();
  });

  test('render a heading', () => {
    const title = screen.getByRole('heading', {level: 2})
  });

  test('render a button', () => {
    const btn = screen.getByRole('button', {name: 'Contáctanos'})
  });
})



