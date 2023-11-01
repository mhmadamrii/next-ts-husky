import React from 'react';

import Home from '@/app/(root)/dashboard/page';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// @ts-ignore
describe('Dashboard page', () => {
  it('Should render properly', () => {
    render(<Home />);

    const header = screen.getByRole('heading');
    const headerTxt = 'Dashboard page';
    expect(header).toHaveTextContent(headerTxt);
  });

  it('Should toggle the value when button is clicked', () => {
    render(<Home />);

    expect(screen.queryByText('Value: true')).toBeNull();

    const button = screen.getByText('Toggle Value');
    fireEvent.click(button);

    expect(screen.getByText('Value: true')).toBeInTheDocument();
  });

  it('Should render AnotherComp', () => {
    render(<Home />);

    const anotherCompText = screen.getByText('Example of another component');
    expect(anotherCompText).toBeInTheDocument();
  });
});
