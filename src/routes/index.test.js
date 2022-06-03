import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Index from './index.svelte';

test('shows h1 headline when rendered', () => {
    const { getByText } = render(Index, { name: 'h1' })
});
test('shows p when rendered', () => {
    const { getByText } = render(Index, { name: 'p' })
});