import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import Search from './search.svelte';

describe('Search bar component renders', () => {
    beforeEach(() => {
        render(Search);
    });
    it('renders component', () => {
        const search = screen.getByRole('search', { name: 'search-bar' });
        expect(search).toBeInTheDocument();
    });
    it('renders button', () => {
        const button = screen.getByRole('button', { name: 'Add' })
        expect(button).toBeInTheDocument();
    });
});