import App from '../App';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('ButtonCounter component', () => {
  it('increments count when button is clicked', () => {
    render(<App />);
    screen.debug();
    expect(screen.getByText(/Count is 0/)).toBeInTheDocument();

    const button = screen.getByText('Increment');
    fireEvent.click(button);
    expect(screen.getByText(/Count is 1/)).toBeInTheDocument();
  })
})