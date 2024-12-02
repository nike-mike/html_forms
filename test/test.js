import { JSDOM } from 'jsdom';
import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('HTML Form Tests', () => {
    let dom;
    let document;

    before(() => {
        try {
            const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
            dom = new JSDOM(html);
            document = dom.window.document;
        } catch (error) {
            console.error('Make sure to create index.html in the root directory');
            throw error;
        }
    });

    describe('Form Structure', () => {
        it('should have a form element with correct attributes', () => {
            const form = document.querySelector('form');
            expect(form).to.exist;
            expect(form.getAttribute('method')).to.equal('post');
            expect(form.getAttribute('action')).to.equal('/submit');
            expect(form.getAttribute('id')).to.equal('studentForm');
        });

        it('should have proper container structure', () => {
            const container = document.querySelector('.container');
            expect(container).to.exist;
            expect(container.querySelector('h1')).to.exist;
        });
    });

    describe('CSS Classes', () => {
        it('should use form-group class for all form sections', () => {
            const formGroups = document.querySelectorAll('.form-group');
            expect(formGroups.length).to.be.at.least(8, 'Missing form-group class on some sections');
            
            // Check specific inputs have form-group parent
            const inputs = ['fullName', 'email', 'password', 'course', 'comments', 'profilePic'];
            inputs.forEach(id => {
                const input = document.getElementById(id);
                expect(input, `Input #${id} exists`).to.exist;
                expect(input.closest('.form-group'), `Input #${id} should be within .form-group`).to.exist;
            });
        });

        it('should use radio-group class for gender options', () => {
            const radioGroup = document.querySelector('.radio-group');
            expect(radioGroup).to.exist;
            expect(radioGroup.closest('.form-group')).to.exist;
            const radios = radioGroup.querySelectorAll('input[type="radio"]');
            expect(radios.length).to.equal(2);
        });

        it('should use checkbox-group class for newsletter subscription', () => {
            const checkboxGroup = document.querySelector('.checkbox-group');
            expect(checkboxGroup).to.exist;
            expect(checkboxGroup.closest('.form-group')).to.exist;
            expect(checkboxGroup.querySelector('#subscribe')).to.exist;
        });

        it('should use button-group class for submit/reset buttons', () => {
            const buttonGroup = document.querySelector('.button-group');
            expect(buttonGroup).to.exist;
            const buttons = buttonGroup.querySelectorAll('button');
            expect(buttons.length).to.equal(2);
        });
    });

    describe('Text Inputs', () => {
        it('should have a text input for full name', () => {
            const input = document.querySelector('input#fullName');
            expect(input).to.exist;
            expect(input.type).to.equal('text');
            expect(input.required).to.be.true;
            expect(input.closest('.form-group')).to.exist;
        });

        it('should have an email input', () => {
            const input = document.querySelector('input#email');
            expect(input).to.exist;
            expect(input.type).to.equal('email');
            expect(input.required).to.be.true;
            expect(input.closest('.form-group')).to.exist;
        });

        it('should have a password input', () => {
            const input = document.querySelector('input#password');
            expect(input).to.exist;
            expect(input.type).to.equal('password');
            expect(input.required).to.be.true;
            expect(input.closest('.form-group')).to.exist;
        });
    });

    describe('Radio Buttons', () => {
        it('should have radio buttons for gender selection', () => {
            const radioGroup = document.querySelector('.radio-group');
            expect(radioGroup).to.exist;
            
            const maleRadio = document.querySelector('input#male[type="radio"]');
            const femaleRadio = document.querySelector('input#female[type="radio"]');
            
            expect(maleRadio).to.exist;
            expect(femaleRadio).to.exist;
            expect(maleRadio.name).to.equal('gender');
            expect(femaleRadio.name).to.equal('gender');
            
            expect(radioGroup.contains(maleRadio)).to.be.true;
            expect(radioGroup.contains(femaleRadio)).to.be.true;
        });
    });

    describe('Checkbox', () => {
        it('should have a checkbox for newsletter subscription', () => {
            const checkboxGroup = document.querySelector('.checkbox-group');
            expect(checkboxGroup).to.exist;
            
            const checkbox = document.querySelector('input#subscribe[type="checkbox"]');
            expect(checkbox).to.exist;
            expect(checkbox.name).to.equal('subscribe');
            expect(checkboxGroup.contains(checkbox)).to.be.true;
        });
    });

    describe('Select Dropdown', () => {
        it('should have a select element with course options', () => {
            const formGroup = document.querySelector('select#course').closest('.form-group');
            expect(formGroup).to.exist;
            
            const select = document.querySelector('select#course');
            const options = select.querySelectorAll('option');
            
            expect(select).to.exist;
            expect(select.required).to.be.true;
            expect(options.length).to.be.at.least(3);
            
            const values = Array.from(options).map(opt => opt.value);
            expect(values).to.include('html');
            expect(values).to.include('css');
            expect(values).to.include('javascript');
        });
    });

    describe('Textarea', () => {
        it('should have a textarea for comments', () => {
            const formGroup = document.querySelector('textarea#comments').closest('.form-group');
            expect(formGroup).to.exist;
            
            const textarea = document.querySelector('textarea#comments');
            expect(textarea).to.exist;
            expect(textarea.rows).to.equal(4);
        });
    });

    describe('File Input', () => {
        it('should have a file input for profile picture', () => {
            const formGroup = document.querySelector('input#profilePic').closest('.form-group');
            expect(formGroup).to.exist;
            
            const fileInput = document.querySelector('input#profilePic[type="file"]');
            expect(fileInput).to.exist;
            expect(fileInput.accept).to.equal('image/*');
        });
    });

    describe('Buttons', () => {
        it('should have submit and reset buttons in button-group', () => {
            const buttonGroup = document.querySelector('.button-group');
            expect(buttonGroup).to.exist;
            
            const submitButton = buttonGroup.querySelector('button[type="submit"]');
            const resetButton = buttonGroup.querySelector('button[type="reset"]');
            
            expect(submitButton).to.exist;
            expect(resetButton).to.exist;
        });
    });

    describe('Labels', () => {
        it('should have labels for all form controls', () => {
            const labels = document.querySelectorAll('label');
            expect(labels.length).to.be.at.least(8);
            
            // Check if labels are properly associated with inputs
            const labelTargets = Array.from(labels).map(label => label.getAttribute('for'));
            expect(labelTargets).to.include('fullName');
            expect(labelTargets).to.include('email');
            expect(labelTargets).to.include('password');
            expect(labelTargets).to.include('course');
            expect(labelTargets).to.include('comments');
            expect(labelTargets).to.include('profilePic');
        });
    });
});
