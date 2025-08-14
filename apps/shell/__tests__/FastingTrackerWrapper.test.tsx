import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockFastingTrackerWrapper } from '../src/test-utils/mocks';

describe('FastingTrackerWrapper Component', () => {
  it('renders the fasting tracker container', () => {
    render(<MockFastingTrackerWrapper />);
    
    const container = screen.getByTestId('fasting-tracker-container');
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('fasting-tracker-mfe');
  });

  it('renders the fasting tracker title', () => {
    render(<MockFastingTrackerWrapper />);
    
    const title = screen.getByText(/suivi du jeûne/i);
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('text-xl', 'font-semibold', 'mb-4');
  });

  it('renders the fasting tracker content', () => {
    render(<MockFastingTrackerWrapper />);
    
    const content = screen.getByText('Fasting Tracker MFE');
    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('text-gray-500');
  });

  it('applies correct styling to the container', () => {
    render(<MockFastingTrackerWrapper />);
    
    const container = screen.getByTestId('fasting-tracker-container');
    expect(container).toHaveClass('fasting-tracker-mfe');
  });
});
