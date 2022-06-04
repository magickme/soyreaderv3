import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import About from './about.svelte';

test('About route renders', () => {
    render(About);
});