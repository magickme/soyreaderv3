import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Nav from './nav.svelte';

test('Nav route renders', () => {
    render(Nav);
});

test('Site title renders', () => {
    const { getByText } = render(Nav, { name: 'Soyreader' })
    expect(getByText('Soyreader')).toBeInTheDocument()
});