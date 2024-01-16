import 'react-native';
import React from 'react';
import Home from '../src/screens/Home/Home';
import {
  act,
  render,
  waitFor,
  RenderAPI,
  fireEvent,
} from '@testing-library/react-native';
import {it} from '@jest/globals';
import PokemonCard from '../src/components/PokemonCard';

let component = render(<Home />);
describe('<Home />', () => {
  beforeEach(() => {
    /*global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve({
                "count": 1302,
                "next": "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
                "previous": null,
                "results": [
                    {
                        "name": "bulbasaur",
                        "url": "https://pokeapi.co/api/v2/pokemon/1/"
                    },
                    {
                        "name": "ivysaur",
                        "url": "https://pokeapi.co/api/v2/pokemon/2/"
                    },
                ]
            })
        }),
        ) as jest.Mock;*/
    component = render(<Home />);
  });

  it('Renderiza correctamente la Pokemon List', () => {
    expect(component).toBeDefined();
    expect(component.getByTestId('loading-pokemon')).toBeDefined();
    expect(component.queryAllByTestId('pokemon-container').length).toEqual(0);
  });

  /*it("Renderiza los elementos despues de llamar a la API", () => {
        act(() => {

        })
        waitFor(() => expect(component.getByTestId("pokemon-container")).toBeDefined());
    });*/
});
