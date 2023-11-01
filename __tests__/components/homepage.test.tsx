import Home from '@/app/(root)/home/page';
import { render, screen } from '@testing-library/react';

describe('Homepage', () => {
  it('should have homepage text', () => {
    render(<Home />);
    // screen.getByText('Homepage')
    expect(screen.getByText('Homepage')).toBeInTheDocument();
  });

  it('should have a button', () => {
    render(<Home />);
    // screen.getByRole('button', { name: 'Press' });
    expect(screen.getByRole('button', { name: 'Press' })).toBeInTheDocument();
  });

  it('should have input field with label Some label', () => {
    render(<Home />);
    // screen.getByRole('textbox');
    expect(screen.getByLabelText(/Some label/)).toBeInTheDocument();
  });

  it('should have input field with label Some label', () => {
    render(<Home />);
    // screen.getByRole('textbox');
    expect(screen.getByLabelText(/Some label/)).toBeInTheDocument();
  });

  it('should have input field with label with placeholder', () => {
    render(<Home />);
    // screen.getByRole('textbox');
    expect(screen.getByPlaceholderText(/search.../)).toBeInTheDocument();
  });
});
