
const HeroSection = ({ children }) => (
  <section className='hero'>
    {children}
    <style jsx>{`
      .hero {
        padding: 152px 0 48px 0;
      }
    `}</style>
  </section>
);

export default HeroSection;
