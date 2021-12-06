
import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../app';
import Form from '../components/form/index'

test('loads and displays the request method and the url', async () => {
    render(<App />);
    const button=screen.getByTestId('goBtn')
    const url=screen.getByTestId('urlText')
    fireEvent.click(button)
    const requestMethod = await waitFor(() => screen.getByTestId("request"));

    expect(requestMethod).toHaveTextContent('GET');
    expect(url).toHaveTextContent('testing purposes');
  });
  