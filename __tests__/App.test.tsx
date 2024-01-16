import 'react-native';
import React from 'react';
import App from '../App';
import {render} from '@testing-library/react-native';
import {it} from '@jest/globals';

let component = render(<App />);

describe('<App />', () => {
  beforeEach(() => {
    component = render(<App />);
  });

  it('Renderiza correctamente', () => {
    expect(component).toBeDefined();
  });
});
