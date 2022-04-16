import { render, screen } from '@testing-library/react';
import Hero from '../src/components/Hero';

describe('Hero', () => {
  it('renders a heading', () => {
    render(<Hero />);

    const heading = screen.getByRole('heading', {
      name: /ridwan nurul ikhsan/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
