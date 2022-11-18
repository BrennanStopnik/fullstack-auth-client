const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className='footer'>
      <p>Copyright © {currentYear} Stopnik Inc.</p>
    </footer>
  );
}