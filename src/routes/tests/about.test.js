import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import About from '../about.svelte';

describe('About page renders', () => {
    it('renders page', () => {
            render(About);
            const aboutPage = screen.getByRole('article', { 'name': 'about-page' });
            expect(aboutPage).toBeInTheDocument();
        }),
        it('renders headline', () => {
            render(About)
            const header = screen.getByRole('heading', { 'name': 'About Soyreader' });
            expect(header).toBeInTheDocument();
        })
});