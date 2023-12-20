# Pale Nimbus

A Business Card Web Component

![wcbc-rwd](https://im3.ezgif.com/tmp/ezgif-3-d78a74be96.gif)

## Features

### Content

- Avatar
- Name
- Title
- Company
- Social
  - LinkedIn
    - QR

### Styles

- Responsive Web Design (RWD)

### Interactivity

- QR

## Example

The `example` directory features a Jinja template that renders _Pale Nimbus_ to a simple HTML document. You can run the example package to build the document, swapping in your own content, and use as desired.

### Prerequisites

- Python
- Flask

### Install

- create a Python virtual environment
- install Flask
  `pip install -r requirements.txt`

### Develop

- update the slotted child elements in `templates/index.html` to make `business-card` your own!

### Run

`flask --app example run`

## Notes

A deep dive into the project's technical aspects

### Styling at the Component Level

- template markup includes a style tag that doesn’t leak from the shadow DOM
  - were you to place the same tag in the standard DOM, CSS therein would apply to subsequent elements (in a cascade, of sorts).
  - encapsulated in an instance of the with shadow DOM, those styles apply only to sibling markup
  - it is possible to bring the CSS in from a separate location, using a link tag
  - local CSS will not apply to elements loaded via the slot attribute. In other words, styles defined in the global CSS apply to slotted elements. The shadow CSS floats around their markup, like a magical cloud. _Expelliarmus_!
    - Potter nerds, help a brother out.
- take the above into consideration when deciding what areas of the component should receive content from an attr., and what from a slot.
  - how much control do you want to give the user?
  - how much complexity do you want to abstract off their shoulders?

### A Note about Slotting

When you slot elements into the markup, the actual `slot` element remains in the shadow DOM. If you inspect the DOM, you’ll see the slotted element as child of your custom element, above which the shadow DOM appears with the slot elements and any default content. This, unlike many templating languages that swap out the default.

Structurally, this looks disorienting, as a container like `figure` may appear on the shadow DOM, and its slotted child `img` on the normal DOM, ie. outside. Furthermore, the `slot` element will appear on the shadow DOM as a child of `figure`. That is all.
