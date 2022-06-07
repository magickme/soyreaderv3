import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import Footer from './footer.svelte';

describe('footer component renders', () => {
    it('renders footer', () => {
        render(Footer);
        const foot = screen.getByRole('contentinfo', {
            name: 'footer'
        });
        expect(foot).toBeInTheDocument();
    });
});