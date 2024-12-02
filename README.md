# HTML Forms Practice Exercise

This exercise will help you learn and practice creating HTML forms with various input types and proper styling. You'll implement a student registration form while following best practices for form structure, accessibility, and styling.

## Setup Instructions

1. Make sure you have Node.js installed on your computer
2. Clone this repository
3. Run `npm install` to install the dependencies
4. Open `index.html` in your code editor

## Exercise Structure

- `index.html`: This is where you'll write your code
- `styles.css`: Pre-written styles for your form (don't modify)
- `test/test.js`: Tests that will check your implementation
- `solution.html`: Reference implementation (look at this only after completing the exercise)

## Tasks

Your goal is to create a student registration form with various input types. The form has been broken down into 10 tasks:

1. Form Structure
2. Text Input
3. Email Input
4. Password Input
5. Radio Buttons
6. Checkbox
7. Select Dropdown
8. Textarea
9. File Input
10. Submit/Reset Buttons

## How to Complete the Exercise

1. **Read the Comments**: Each task in `index.html` has detailed comments explaining what you need to implement.

2. **Follow the Requirements**: Pay attention to:
   - Element IDs and names
   - Required attributes
   - Input types
   - Label associations
   - CSS classes for styling

3. **Run the Tests**: 
   ```bash
   npm test
   ```
   This will show you which requirements you've met and which ones you still need to implement.

4. **Work Incrementally**:
   - Complete one task at a time
   - Run the tests after each task
   - Fix any failures before moving to the next task

5. **Check Your Work**:
   - Make sure all form elements are properly labeled
   - Verify that required fields are marked as required
   - Test that the form looks good and is properly styled

## Tips for Success

1. **Use the Right Classes**:
   - `form-group` for input containers
   - `radio-group` for radio button groups
   - `checkbox-group` for checkbox groups
   - `button-group` for the buttons container

2. **HTML Best Practices**:
   - Always associate labels with inputs using the `for` attribute
   - Use semantic HTML elements
   - Include all required attributes
   - Follow proper nesting of elements

3. **Testing Strategy**:
   - Start with the basic form structure
   - Add one input at a time
   - Run tests frequently
   - Fix errors as they appear

4. **Common Issues to Watch For**:
   - Missing or incorrect IDs
   - Forgotten required attributes
   - Improper label associations
   - Missing CSS classes
   - Incorrect input types

## Completion Checklist

- [ ] Form has correct attributes (id, method, action)
- [ ] All inputs have proper IDs and names
- [ ] Required fields are marked as required
- [ ] Labels are properly associated with inputs
- [ ] Radio buttons share the same name attribute
- [ ] Select dropdown has all required options
- [ ] File input accepts only images
- [ ] All CSS classes are properly applied
- [ ] All tests pass
- [ ] Form is visually well-structured

## Additional Resources

- [MDN Web Docs - HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [MDN Web Docs - Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [HTML Form Elements Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#forms)

Good luck with the exercise! Remember to test frequently and work through the tasks one at a time.
