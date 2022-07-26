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

})