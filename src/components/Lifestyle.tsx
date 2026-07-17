export default function Lifestyle() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop)' }}
      ></div>
      <div className="absolute inset-0 bg-background/30 mix-blend-multiply z-10"></div>
      
      <div className="relative z-20 text-center mix-blend-difference">
        <h2 className="text-[10vw] font-bold leading-none text-transparent text-stroke-active">
          UNLEASH
        </h2>
        <h2 className="text-[10vw] font-bold leading-none text-transparent text-stroke">
          POTENTIAL
        </h2>
      </div>
    </section>
  );
}
