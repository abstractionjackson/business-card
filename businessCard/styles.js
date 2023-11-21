// cardStyles.js
const cardStyles = {
  fontFamily: 'Helvetica, sans-serif',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '1fr 2fr 1fr',
  justifyItems: 'center',
  alignItems: 'center',
  maxWidth: '350px',
  margin: '20px auto',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  backgroundColor: '#fff',
  position: 'relative',
  height: '200px',
}

const textStyles = {
  phone: {
    gridColumn: '1',
    gridRow: '1',
    justifySelf: 'start',
  },
  company: {
    gridColumn: '2',
    gridRow: '1',
    justifySelf: 'end',
  },
  name: {
    gridColumn: '1 / -1',
    fontSize: '24px',
    color: 'black',
  },
  title: {
    gridColumn: '1 / -1',
    fontSize: '18px',
    color: '#444',
  },
}

export { cardStyles, textStyles }
