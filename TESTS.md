# jest-library

Working through testing SvelteKit with Jest and Testing Library.

## Priority Tests

### Queries Accessible to Everyone

+ getByRole. 
    - name, description, role, state
    - https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#roles
+ getByText.
    - Find text - div, span, p
    - Can use regex, {exact: false}, etc
+ getByLabelText.
    - Form fields
- getByDisplayValue.
    - Current value of filled in form
+ getByPlaceholderText.
    - Don't use unless necessary

### Semantic Queries (HTML5 / ARIA selectors)
+ getByAltText
+ getByTitle

### Test IDs
+ getByTextId

