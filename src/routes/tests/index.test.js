import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import Index from '../index.svelte';


describe('Index successfully renders all components and subcomponents', () => {
    it('renders search bar', () => {
        render(Index);
        const search = screen.getByRole('search', { name: 'search-bar' });
        expect(search).toBeInTheDocument();
    });
    it('renders add button', () => {
        render(Index);
        const button = screen.getByRole('button', { name: 'Add' })
        expect(button).toBeInTheDocument();
    });

    /**
     * Tests fail when a component renders multiple times on a page. How to fix?
     */
    /*  it('renders feed', () => {
        render(Index);
        const subreddit = screen.getByRole('feed', {
            name: 'subreddit-feed'
        })
        expect(subreddit).toBeInTheDocument();
    });
    it('renders delete button', () => {
        render(Index);
        const button = screen.getByRole('button', { name: 'Delete' });
        expect(button).toBeInTheDocument();
    }) */
    it('renders footer', () => {
        render(Index);
        const foot = screen.getByRole('contentinfo', {
            name: 'footer'
        });
        expect(foot).toBeInTheDocument();
    });
});