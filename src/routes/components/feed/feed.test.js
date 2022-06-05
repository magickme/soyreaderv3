import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import Feed from './feed.svelte';

describe('Subreddit feed component renders', () => {
    it('renders component', () => {
        render(Feed);
        const subreddit = screen.getByRole('feed', {
            name: 'subreddit-feed'
        });
        expect(subreddit).toBeInTheDocument();
    });
    it('renders button', () => {
        render(Feed);
        const button = screen.getByRole('button', { name: 'Delete' });
        expect(button).toBeInTheDocument();
    })
});