import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import Search from './search.svelte';

describe('Search bar component renders', () => {
    it('renders component', () => {
            render(Search);
            const search = screen.getByRole('search', { name: 'search-bar' });
            expect(search).toBeInTheDocument();
        }),
        it('renders button', () => {
            render(Search);
            const button = screen.getByRole('button', { name: 'Add' })
            expect(button).toBeInTheDocument();
        });
});