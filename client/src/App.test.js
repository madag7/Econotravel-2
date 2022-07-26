import { render, screen } from '@testing-library/react';
import App from './App';
import WhoWeAre from './components/Footer/WhoWeAre';

describe ('test de home',()=>{
  beforeEach(()=>{
    render(<App />);
  })

  test('renders App mission component', () => {
    render(<WhoWeAre />);
    expect(screen.getByText("Misión")).toBeInTheDocument();
  });

  test('render travel title', () => {  
    const title = screen.getByText(/travel/i)

    expect(title).toBeInTheDocument();
  });

  test('render a heading', () => {
    const title = screen.getByRole('heading', {level: 2})
  });

  test('render a heading', () => {
    const title = screen.getByRole('button', {name: 'Contáctanos'})
  });


})
