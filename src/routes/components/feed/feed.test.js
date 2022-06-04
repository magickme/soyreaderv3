import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Feed from './feed.svelte';
test('Subreddit feed renders', () => {
    render(Feed);
});

test('Subreddit feed title renders', () => {
    const { getByText } = render(Feed, { name: 'Subreddit feed' })
    expect(getByText('/r/all')).toBeInTheDocument()
});