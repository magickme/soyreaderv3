import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import Layout from '../__layout.svelte';

describe('Nav component renders', () => {
    it('renders the top nav menu', () => {
        render(Layout);
        const topnav = screen.getByRole('navigation', { name: 'top-navbar' })
        expect(topnav).toBeInTheDocument();
    });
});