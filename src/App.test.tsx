import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders the App component correctly', function () {
    render(<App />);
  });

  test('renders Vite and React logos', () => {
    render(<App />);
    expect(screen.getByAltText('Vite logo')).toBeInTheDocument();
    expect(screen.getByAltText('React logo')).toBeInTheDocument();
  });

  test('renders initial count as 0', () => {
    render(<App />);
    expect(screen.getByText('count is 0')).toBeInTheDocument();
  });

  test('increments count when the button is clicked', () => {
    render(<App />);
    const button = screen.getByText('count is 0').closest('button');
    fireEvent.click(button!);
    expect(screen.getByText('count is 1')).toBeInTheDocument();
  });
});
