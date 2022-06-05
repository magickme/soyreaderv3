import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import Feed from './feed.svelte';

describe('Subreddit feed component renders', () => {
    beforeEach(() => {
        render(Feed);
    });
    it('renders component', () => {
        const subreddit = screen.getByRole('feed', {
            name: 'subreddit-feed'
        });
        expect(subreddit).toBeInTheDocument();
    });
    it('renders button', () => {
        const button = screen.getByRole('button', { name: 'Delete' });
        expect(button).toBeInTheDocument();
    });
});