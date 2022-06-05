import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import Nav from './nav.svelte';

describe('Nav component renders', () => {
    beforeEach(() => {
        render(Nav);
    });
    it('renders the top nav menu', () => {
        const topnav = screen.getByRole('navigation', { name: 'top-navbar' })
        expect(topnav).toBeInTheDocument();
    });
    it('has site title header', () => {
        const header = screen.getByRole('link', { name: 'Soyreader' })
        expect(header).toBeInTheDocument();
    });
    it('has link to About page', () => {
        const about = screen.getByRole('link', { name: 'About' });
        expect(about).toBeInTheDocument();
    });
});