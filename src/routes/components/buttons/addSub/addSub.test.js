import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import AddSub from './addSub.svelte';

describe('Add subreddit button', () => {
    it('renders button', () => {
        render(AddSub);
        const button = screen.getByRole('button', { name: 'Add' })
        expect(button).toBeInTheDocument();
    });
});