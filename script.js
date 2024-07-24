
customElements.define('business-card',
class extends HTMLElement {
    constructor() {
        super()

        const template = document.getElementById('business-card')
        const templatecontent = template.content

        this.attachShadow({mode: 'open'}).appendChild(templatecontent.cloneNode(true))
        
        // ensure that the content is editable (every contenteditable), and has the correct focus behavior
        const editable = this.shadowRoot.querySelectorAll('[contenteditable]')
        for (let i = 0; i < editable.length; i++) {
            addFocusBehavior(editable[i]) ;
        }

        // ensure that the content is editable (every slot), and has the correct focus behavior
        const slots = this.shadowRoot.querySelectorAll('slot')
        slots.forEach(slot => {
            slot.assignedNodes().forEach(node => {
                node.contentEditable = true
                addFocusBehavior(node) // user-added HTML needs event-listener
            })
        });

    }
})

function addFocusBehavior(element) {
    element.addEventListener('focus', function(e) {
        const range = document.createRange(); // Create a range
        range.selectNodeContents(e.target); // Select the entire contents of the element
    
        const sel = window.getSelection(); // Get the current selection
        sel.removeAllRanges(); // Remove any current selections
        sel.addRange(range); // Add the new range
    });
    element.addEventListener('DOMContentLoaded', function() {
        var contentEditableElement = element.querySelector('span[name="phone"]');
        console.log(contentEditableElement);
        // Prevent non-numeric characters
        contentEditableElement.addEventListener('keypress', function(e) {
            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                e.preventDefault();
            }
        });
    
        // Prevent pasting non-numeric content
        contentEditableElement.addEventListener('paste', function(e) {
            e.preventDefault();
            var text = (e.originalEvent || e).clipboardData.getData('text/plain');
            element.execCommand("insertHTML", false, text.replace(/\D/g, ''));
        });
    
        // Prevent multi-line
        contentEditableElement.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
            }
        });
    });
};
