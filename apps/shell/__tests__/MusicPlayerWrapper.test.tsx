import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockMusicPlayerWrapper } from '../src/test-utils/mocks';

describe('MusicPlayerWrapper Component', () => {
  it('renders the music player container', () => {
    render(<MockMusicPlayerWrapper />);
    
    const container = screen.getByTestId('music-player-container');
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('music-player-mfe');
  });

  it('renders the music player title', () => {
    render(<MockMusicPlayerWrapper />);
    
    const title = screen.getByText(/lecteur de musique/i);
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('text-xl', 'font-semibold', 'mb-4');
  });

  it('renders the music player iframe', () => {
    render(<MockMusicPlayerWrapper />);
    
    const iframe = screen.getByTestId('music-player-iframe');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', 'http://localhost:5173');
    expect(iframe).toHaveAttribute('title', 'Music Player MFE');
  });

  it('applies correct styling to the container', () => {
    render(<MockMusicPlayerWrapper />);
    
    const container = screen.getByTestId('music-player-container');
    expect(container).toHaveClass('music-player-mfe');
  });

  it('applies correct styling to the iframe', () => {
    render(<MockMusicPlayerWrapper />);
    
    const iframe = screen.getByTestId('music-player-iframe');
    expect(iframe).toHaveClass(
      'w-full',
      'h-96',
      'border-0',
      'rounded-lg'
    );
  });
});
