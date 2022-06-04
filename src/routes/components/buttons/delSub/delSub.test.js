import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import delSub from './delSub.svelte';
test('Delete Subreddit button renders', () => {
    render(delSub);
});

/*test('Search bar placeholder text renders', () => {
    const { getByText } = render(delSub, { name: 'Delete Subreddit' })
    expect(getByText('Delete')).toBeInTheDocument()
}); */

/* test('should render', () => {
    const results = render(delSub, {
        props: { label: 'a button' }
    });

    expect(() => results.getByLabelText('a button')).not.toThrow();
})*/