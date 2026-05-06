import { Copy, ExternalLink, Send, Menu, X, Eye } from 'lucide-react';

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const CONTRACT_ADDRESS = "MOTHMAN_CA_PLACEHOLDER";

const SIGHTINGS = [
  "Just saw two glowing red eyes outside my window at 3 AM. Bullish.",
  "Mothman appeared in my bathroom mirror and whispered 'buy the dip.' I listened.",
  "He stole my catalytic converter AND my heart.",
  "Point Pleasant bridge is shaking. Mothman says it's just the chart going vertical.",
  "Bro is literally lamp-pilled. Respect.",
  "Cryptid analysts confirm: red eyes = red candles are OVER.",
  "Mothman doesn't rug pull. He just flies away dramatically.",
  "Saw him at Wendy's drive-thru at 2 AM. Wings didn't fit through the window.",
  "The prophecy is clear: those who hold $MOTH shall be spared when the bridge collapses.",
  "Local man reports Mothman helped him parallel park. 'Very polite for a cryptid.'",
  "Mothman visited my dreams and showed me a chart going parabolic. I woke up in a cold sweat.",
  "He's real, he's here, and he wants you to stop paperhanding.",
  "Mothman just aped into the LP. His wingspan alone is worth 10 SOL.",
  "I tried to take a photo but all I got was two red dots and a massive green candle.",
  "Legends say if you hold $MOTH long enough, Mothman personally delivers your lambo.",
];

function FloatingParticles() {
  const [particles] = useState(() =>
    Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 6 + 2,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 10,
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

function EyeGlow() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
      <div className="eyes-glow w-4 h-4 rounded-full bg-moth-glow absolute" style={{ top: '35%', left: '46%' }} />
      <div className="eyes-glow w-4 h-4 rounded-full bg-moth-glow absolute" style={{ top: '35%', left: '52%' }} />
    </div>
  );
}

export default function App() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSighting, setCurrentSighting] = useState("SCANNING FOR MOTHMAN ACTIVITY...");
  const [isShaking, setIsShaking] = useState(false);

  const copyCA = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { console.warn('Copy failed'); }
  };

  const newSighting = () => {
    let next;
    do { next = SIGHTINGS[Math.floor(Math.random() * SIGHTINGS.length)]; } while (next === currentSighting && SIGHTINGS.length > 1);
    setCurrentSighting(next);
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 400);
  };

  // Scrollspy for navbar opacity
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="min-h-screen bg-moth-black text-moth-light font-mono selection:bg-moth-red selection:text-moth-black">
      {/* Marquee */}
      <div className="marquee-container border-b-2 border-moth-ember">
        <div className="marquee-track">
          <span className="marquee-content">
            HE'S REAL ☽ POINT PLEASANT NEVER FORGETS ☽ RED EYES IN THE FOG ☽ $MOTH ON SOLANA ☽ THE PROPHECY IS NIGH ☽ LAMP LOVERS UNITE ☽ CRYPTID SZN ☽&nbsp;
          </span>
          <span className="marquee-content" aria-hidden="true">
            HE'S REAL ☽ POINT PLEASANT NEVER FORGETS ☽ RED EYES IN THE FOG ☽ $MOTH ON SOLANA ☽ THE PROPHECY IS NIGH ☽ LAMP LOVERS UNITE ☽ CRYPTID SZN ☽&nbsp;
          </span>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`flex justify-between items-center p-4 md:p-6 border-b border-moth-fog/50 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-moth-black/95 backdrop-blur-lg' : 'bg-moth-black/70 backdrop-blur-sm'}`}>
        <div className="flex items-center gap-2">
          <Eye className="text-moth-red w-7 h-7 eyes-glow" />
          <span className="font-creepy text-2xl tracking-widest">
            <span className="text-moth-red">MOTH</span><span className="text-moth-light">MAN</span>
          </span>
        </div>
        <div className="hidden md:flex gap-6 items-center text-sm">
          <a href="#lore" className="hover:text-moth-red transition-colors uppercase tracking-wider">The Lore</a>
          <a href="#sightings" className="hover:text-moth-red transition-colors uppercase tracking-wider">Sightings</a>
          <a href="#memes" className="hover:text-moth-red transition-colors uppercase tracking-wider">Memes</a>
          <a href="https://x.com/MothManOnSol" target="_blank" rel="noopener noreferrer" className="hover:text-moth-red transition-colors flex items-center gap-1 uppercase tracking-wider"><XIcon className="w-4 h-4" /> Twitter</a>
          <a href="https://t.me/mothmanonsol" target="_blank" rel="noopener noreferrer" className="hover:text-moth-red transition-colors flex items-center gap-1 uppercase tracking-wider"><Send className="w-4 h-4" /> Telegram</a>
        </div>
        <div className="flex gap-3 items-center">
          <a href="https://pump.fun/" target="_blank" rel="noopener noreferrer" className="hidden sm:block">
            <button className="bg-moth-red text-moth-black px-4 py-2 font-bold uppercase hover:bg-moth-glow transition-colors border-2 border-moth-glow font-creepy tracking-wider text-lg">
              BUY $MOTH
            </button>
          </a>
          <button className="md:hidden p-2 text-moth-light hover:text-moth-red transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-moth-dark border-b-2 border-moth-fog p-6 flex flex-col gap-4 sticky top-[73px] z-40">
          <a href="#lore" className="hover:text-moth-red transition-colors uppercase font-bold" onClick={() => setMobileMenuOpen(false)}>The Lore</a>
          <a href="#sightings" className="hover:text-moth-red transition-colors uppercase font-bold" onClick={() => setMobileMenuOpen(false)}>Sightings</a>
          <a href="#memes" className="hover:text-moth-red transition-colors uppercase font-bold" onClick={() => setMobileMenuOpen(false)}>Memes</a>
          <a href="https://x.com/MothManOnSol" target="_blank" rel="noopener noreferrer" className="hover:text-moth-red transition-colors flex items-center gap-2 uppercase font-bold"><XIcon className="w-4 h-4" /> Twitter</a>
          <a href="https://t.me/mothmanonsol" target="_blank" rel="noopener noreferrer" className="hover:text-moth-red transition-colors flex items-center gap-2 uppercase font-bold"><Send className="w-4 h-4" /> Telegram</a>
          <a href="https://pump.fun/" target="_blank" rel="noopener noreferrer" className="bg-moth-red text-moth-black px-4 py-2 font-bold uppercase text-center hover:bg-moth-glow transition-colors border-2 border-moth-glow font-creepy text-lg">BUY $MOTH</a>
        </div>
      )}

      <main>
        {/* HERO */}
        <section className="min-h-[90vh] flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
          <FloatingParticles />
          <div className="fog-layer" />
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(220,38,38,0.15) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="z-10 flex flex-col items-center"
          >
            {/* Hero Image */}
            <div className="relative mb-6 film-grain rounded-xl">
              <img src="/mothman-hero.png" alt="Mothman" className="w-48 h-48 md:w-64 md:h-64 object-contain relative z-[1] rounded-xl" />
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-creepy mb-4 uppercase leading-none text-center">
              <span className="cryptid-title">
                {"MOTHMAN".split("").map((char, i) => (
                  <span key={i} className="cryptid-letter">{char}</span>
                ))}
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-2 text-moth-red font-creepy tracking-[0.3em] uppercase">
              $MOTH on Solana
            </p>
            <p className="text-base md:text-lg mb-8 max-w-xl text-moth-mist font-mono">
              He's real. He's watching. And he's extremely bullish.
            </p>

            {/* Contract Address */}
            <div className="bg-moth-card/80 p-3 border-2 border-moth-red/40 flex flex-col sm:flex-row items-center gap-3 mb-10 backdrop-blur-sm rounded-lg max-w-full">
              <span className="text-moth-mist font-mono break-all text-sm">{CONTRACT_ADDRESS}</span>
              <button onClick={copyCA} className="bg-moth-red hover:bg-moth-glow text-moth-black px-4 py-2 flex items-center gap-2 transition-colors font-bold rounded text-sm whitespace-nowrap">
                <Copy className="w-4 h-4" />
                {copied ? 'COPIED!' : 'COPY CA'}
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md">
              <a href="https://pump.fun/" target="_blank" rel="noopener noreferrer" className="flex-1">
                <button className="w-full bg-moth-red border-2 border-moth-glow text-moth-black px-6 py-4 font-creepy text-xl uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-moth-glow transition-all shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:shadow-[0_0_50px_rgba(255,51,51,0.5)]">
                  BUY ON PUMP.FUN <ExternalLink className="w-5 h-5" />
                </button>
              </a>
              <a href="#sightings" className="flex-1">
                <button className="w-full bg-moth-card border-2 border-moth-fog text-moth-light px-6 py-4 font-creepy text-xl uppercase tracking-wider flex items-center justify-center gap-2 hover:border-moth-red hover:text-moth-red transition-all">
                  VIEW SIGHTINGS <Eye className="w-5 h-5" />
                </button>
              </a>
            </div>
          </motion.div>
        </section>

        {/* LORE */}
        <section id="lore" className="py-20 px-6 bg-moth-dark border-y-2 border-moth-fog/30 relative overflow-hidden scroll-mt-20">
          <div className="fog-layer opacity-30" />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <h2 className="text-4xl md:text-5xl font-creepy text-moth-light uppercase">
                  The <span className="text-moth-red">Legend</span>
                </h2>
                <div className="space-y-4 text-moth-mist font-mono text-sm leading-relaxed">
                  <p className="border-l-2 border-moth-red pl-4">{">"} November 1966 — Point Pleasant, West Virginia. Locals report a winged creature with glowing red eyes stalking the night.</p>
                  <p className="border-l-2 border-moth-red/60 pl-4">{">"} December 1967 — The Silver Bridge collapses. 46 lives lost. Mothman was trying to warn us all along.</p>
                  <p className="border-l-2 border-moth-red/40 pl-4">{">"} 2026 — He returns. Not to warn of bridges, but of paper hands. The prophecy continues on Solana.</p>
                  <p className="text-moth-red font-bold text-base mt-6 font-creepy tracking-wider">{">"} THOSE WHO HOLD SHALL BE SPARED.</p>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-moth-black border-2 border-moth-red/30 p-6 font-mono text-moth-red/80 text-xs sm:text-sm leading-tight whitespace-pre text-center rounded-lg shadow-[0_0_40px_rgba(220,38,38,0.1)]">
{`
    ╱▔▔▔╲   ╱▔▔▔╲
   ╱ ◉  ◉ ╲╱ ◉  ◉ ╲
  ╱    ╱╲    ╱╲    ╲
 ╱   ╱    ╲╱    ╲   ╲
╱___╱      ╲╲____╲___╲
     ╲  ◉◉  ╱
      ╲    ╱
       ╲  ╱
   ▁▁▁▁╲╱▁▁▁▁
  ╱            ╲
 ╱  HE WATCHES  ╲
╱________________╲`}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SIGHTING GENERATOR */}
        <section id="sightings" className="py-20 px-6 bg-moth-black border-y-2 border-moth-red/20 relative overflow-hidden scroll-mt-20">
          <FloatingParticles />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-creepy text-moth-light mb-4 uppercase">
              Sighting <span className="text-moth-red">Report</span>
            </h2>
            <p className="text-moth-mist mb-8 font-mono text-sm">
              Intercepted transmissions from the field. Click to decode the next one.
            </p>

            <div className="bg-moth-card border-2 border-moth-red/30 p-2 rounded-lg shadow-[0_0_40px_rgba(220,38,38,0.08)]">
              <motion.div
                animate={isShaking ? { x: [-4, 4, -4, 4, 0], backgroundColor: ["#1a1a2e", "#2a0000", "#1a1a2e"] } : {}}
                transition={{ duration: 0.4 }}
                className="p-8 border border-dashed border-moth-fog/50 min-h-[140px] flex items-center justify-center rounded bg-moth-card"
              >
                <p className="text-xl md:text-2xl font-bold italic text-moth-light/90">"{currentSighting}"</p>
              </motion.div>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4">
              <button
                onClick={newSighting}
                className="bg-moth-red text-moth-black px-8 py-4 font-creepy text-xl uppercase tracking-wider hover:bg-moth-glow transition-all shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:shadow-[0_0_50px_rgba(255,51,51,0.5)] rounded-lg"
              >
                NEW SIGHTING 👁️
              </button>

              <div className="flex flex-wrap justify-center gap-3 w-full max-w-sm">
                <button
                  onClick={() => {
                    const text = encodeURIComponent(`"${currentSighting}"\n\n$MOTH 🦋👁️`);
                    window.open(`https://x.com/intent/tweet?text=${text}`, '_blank');
                  }}
                  className="flex-1 min-w-[90px] bg-moth-card text-moth-light px-3 py-2 font-bold uppercase text-sm hover:bg-moth-red hover:text-moth-black transition-all border border-moth-fog/50 rounded flex items-center justify-center gap-2"
                >
                  <XIcon className="w-4 h-4" /> Tweet
                </button>
                <button
                  onClick={() => window.open('https://t.me/mothmanonsol', '_blank')}
                  className="flex-1 min-w-[90px] bg-moth-card text-moth-light px-3 py-2 font-bold uppercase text-sm hover:bg-moth-red hover:text-moth-black transition-all border border-moth-fog/50 rounded flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> TG
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* MEME GALLERY */}
        <section id="memes" className="py-20 px-6 bg-moth-dark border-y-2 border-moth-fog/30 scroll-mt-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-creepy text-moth-light mb-4 uppercase text-center">
              The <span className="text-moth-red">Evidence</span>
            </h2>
            <p className="text-moth-mist text-center mb-12 font-mono text-sm">Documented sightings. The truth is out there.</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { src: '/meme1.png', alt: 'Mothman Epstein meme' },
                { src: '/meme2.jpg', alt: 'Mothman catalytic converter sticker' },
                { src: '/meme3.png', alt: 'Moth lamp meme' },
                { src: '/meme4.jpg', alt: 'Mothman roadside sighting' },
                { src: '/meme5.png', alt: 'Mothman terrorize townsfolk' },
                { src: '/mothman-hero.png', alt: 'Mothman mascot' },
              ].map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, rotate: Math.random() > 0.5 ? 1 : -1 }}
                  className="bg-moth-card border-2 border-moth-fog/30 rounded-lg overflow-hidden hover:border-moth-red/50 transition-colors group"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-48 md:h-56 object-cover group-hover:brightness-110 transition-all"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW TO BUY */}
        <section className="py-20 px-6 bg-moth-black border-y-2 border-moth-red/20 relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-creepy text-moth-light mb-12 uppercase text-center">
              How to <span className="text-moth-red">Summon</span>
            </h2>

            <div className="space-y-6">
              {[
                { step: '1', title: 'Get a Solana Wallet', desc: 'Download Phantom or Solflare. Even Mothman uses Phantom.' },
                { step: '2', title: 'Load SOL', desc: 'Buy SOL on an exchange and send it to your wallet. Fund the prophecy.' },
                { step: '3', title: 'Go to Pump.Fun', desc: 'Search for $MOTH or paste the contract address. The red eyes will guide you.' },
                { step: '4', title: 'HODL', desc: 'Those who hold shall be spared. Paper hands get haunted.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-moth-red text-moth-black font-creepy text-2xl flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-moth-light font-creepy tracking-wider">{item.title}</h3>
                    <p className="text-moth-mist text-sm font-mono">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t-2 border-moth-fog/30 bg-moth-dark p-8 text-center">
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://x.com/MothManOnSol" target="_blank" rel="noopener noreferrer" className="text-moth-mist hover:text-moth-red transition-colors uppercase font-bold flex items-center gap-1 text-sm"><XIcon className="w-5 h-5" /> Twitter</a>
          <a href="https://t.me/mothmanonsol" target="_blank" rel="noopener noreferrer" className="text-moth-mist hover:text-moth-red transition-colors uppercase font-bold flex items-center gap-1 text-sm"><Send className="w-5 h-5" /> Telegram</a>
          <a href="https://pump.fun/" target="_blank" rel="noopener noreferrer" className="text-moth-mist hover:text-moth-red transition-colors uppercase font-bold flex items-center gap-1 text-sm"><ExternalLink className="w-5 h-5" /> Pump.Fun</a>
        </div>
        <p className="text-moth-mist/50 text-xs max-w-2xl mx-auto font-mono">
          $MOTH is a memecoin created for entertainment purposes only. Mothman sightings are not financial advice. No bridges were harmed in the making of this token. Cryptids are not registered financial advisors. Protect your capital.
        </p>
        <p className="text-moth-red/30 text-xs mt-4 font-creepy tracking-widest">HE WATCHES. HE WAITS. HE HODLS.</p>
      </footer>
    </div>
  );
}
