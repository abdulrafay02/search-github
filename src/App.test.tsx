import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Search Github', () => {
    render(<App />);
    const linkElement = screen.getByText(/Search Github/);
    expect(linkElement).toBeInTheDocument();
});
