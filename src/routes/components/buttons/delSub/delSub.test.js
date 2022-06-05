import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import DelSub from './delSub.svelte';

describe('Delete subreddit button renders', () => {
    it('renders button', () => {
        render(DelSub);
        const button = screen.getByRole('button', { name: 'Delete' });
        expect(button).toBeInTheDocument();
    })
})