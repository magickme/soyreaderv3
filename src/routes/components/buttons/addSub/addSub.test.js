import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import addSub from './addSub.svelte';

test('Add Subreddit button renders ', () => {
    render(addSub);
});

test('Add Subreddit text renders', () => {
    const { getByText } = render(addSub, { name: 'Add Subreddit' })
    expect(getByText('Add')).toBeInTheDocument()
});