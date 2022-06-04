import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Index from './index.svelte';

test('Index route renders', () => {
    render(Index);
});