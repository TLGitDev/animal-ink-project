require('@testing-library/jest-dom');

// Configuration globale pour les tests
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock pour window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock pour IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock pour AudioContext
global.AudioContext = jest.fn().mockImplementation(() => ({
  createMediaElementSource: jest.fn(),
  createAnalyser: jest.fn(),
  createGain: jest.fn(),
  createOscillator: jest.fn(),
  createBufferSource: jest.fn(),
  createBuffer: jest.fn(),
  decodeAudioData: jest.fn(),
  sampleRate: 44100,
  currentTime: 0,
  state: 'running',
  resume: jest.fn(),
  suspend: jest.fn(),
  close: jest.fn(),
}));
