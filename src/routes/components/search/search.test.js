import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Search from './search.svelte';
test('Search route renders', () => {
    render(Search);
});

test('Search bar placeholder text renders', () => {
    const { getByText } = render(Search, { name: 'Search Bar' })
    expect(getByText('Search Bar')).toBeInTheDocument()
});