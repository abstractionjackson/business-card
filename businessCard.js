class BusinessCard extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    const name = this.getAttribute('name')
    const title = this.getAttribute('title')
    const company = this.getAttribute('company')
    const phone = this.getAttribute('phone')

    this.shadowRoot.innerHTML = `
            <style>
                .card {
                    font-family: 'Helvetica', sans-serif;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: 1fr 2fr 1fr;
                    justify-items: center;
                    align-items: center;
                    max-width: 350px;
                    margin: 20px auto;
                    padding: 20px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    border-radius: 8px;
                    background-color: #fff;
                    position: relative;
                    height: 200px;
                }

                .phone {
                    grid-column: 1;
                    grid-row: 1;
                    justify-self: start;
                }

                .company {
                    grid-column: 2;
                    grid-row: 1;
                    justify-self: end;
                }

                .name {
                    grid-column: 1 / -1;
                    font-size: 24px;
                    color: black;
                }

                .title {
                    grid-column: 1 / -1;
                    font-size: 18px;
                    color: #444;
                }
            </style>
            <div class="card">
                <p class="phone">${phone}</p>
                <p class="company">${company}</p>
                <h1 class="name">${name}</h1>
                <p class="title">${title}</p>
            </div>
        `
  }
}

customElements.define('business-card', BusinessCard)
