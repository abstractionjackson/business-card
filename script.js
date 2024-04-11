
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
};