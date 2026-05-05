import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Sword, Heart, Trees, Copy, Check, Users, Signal, Globe, MessageSquare } from 'lucide-react';

const IP = 'arisesmp.net';
const DISCORD_LINK = 'https://discord.gg/dBjdqMQUYe';

export default function App() {
  const [copied, setCopied] = useState(false);

  const copyIp = () => {
    navigator.clipboard.writeText(IP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://i.ibb.co/BKrZkgFT/8c66768c1beefba8260bcd0d5a7d5ed3.webp" 
              alt="Arise SMP Logo" 
              className="w-12 h-12 rounded-lg object-cover"
              referrerPolicy="no-referrer"
            />
            <span className="text-xl font-bold tracking-tight uppercase">Arise SMP</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/70">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#rules" className="hover:text-white transition-colors">Rules</a>
            <a href="#status" className="hover:text-white transition-colors">Status</a>
            <button 
              onClick={copyIp}
              className="px-5 py-2 bg-white text-black rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center gap-2 font-bold cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied!' : 'Join Now'}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1640499830574-129ae33618bf?q=80&w=2670&auto=format&fit=crop" 
            alt="Minecraft Landscape"
            className="w-full h-full object-cover opacity-40 scale-110 blur-[2px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Season 1 Is Live
            </span>
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
              Arise <span className="text-transparent border-t-2 border-b-2 border-white/20 [-webkit-text-stroke:1px_white]">SMP</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-medium">
              The ultimate Minecraft experience. Master survival, survive lifesteal, and dominate the PVP arena on our lag-free dedicated server.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <button 
                onClick={copyIp}
                className="group relative px-8 py-4 bg-orange-600 rounded-xl font-bold uppercase tracking-widest overflow-hidden transition-all hover:bg-orange-500 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <div className="relative z-10 flex items-center gap-3">
                  <Globe className="w-5 h-5" />
                  <span>{IP}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              
              <a 
                href={DISCORD_LINK}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center gap-3"
              >
                <div className="w-5 h-5 bg-[#5865F2] rounded-sm flex items-center justify-center">
                  <MessageSquare className="w-3 h-3 text-white fill-white" />
                </div>
                <span>Discord</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <div className="w-[1px] h-12 bg-white/20 mx-auto" />
        </motion.div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Core Gamemodes</h2>
            <div className="w-20 h-1.5 bg-orange-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Trees className="w-8 h-8" />}
              title="Survival"
              desc="Experience vanilla + mechanics with custom enchants, jobs, and an economy built for longevity."
              color="border-green-500/20"
              img="https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?q=80&w=2574&auto=format&fit=crop"
            />
            <FeatureCard 
              icon={<Heart className="w-8 h-8" />}
              title="Lifesteal"
              desc="Every kill grants a heart, every death costs one. High stakes, intense competition, zero mercy."
              color="border-red-500/20"
              img="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=2574&auto=format&fit=crop"
            />
            <FeatureCard 
              icon={<Sword className="w-8 h-8" />}
              title="Active PVP"
              desc="Competitive arenas, weekly tournaments, and custom kits designed for the most skilled warriors."
              color="border-blue-500/20"
              img="https://images.unsplash.com/photo-1614850553956-6f7cc8c37d45?q=80&w=2670&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* Server Stats */}
      <section id="status" className="py-32 bg-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            <StatItem icon={<Users className="text-orange-500" />} label="Total Players" value="30+" />
            <StatItem icon={<Signal className="text-green-500" />} label="Server Status" value="Online" />
            <StatItem icon={<Shield className="text-blue-500" />} label="DDoS Clean" value="99.9%" />
            <StatItem icon={<Globe className="text-purple-500" />} label="Version" value="1.21+" />
          </div>
        </div>
      </section>

      {/* Quick Rules */}
      <section id="rules" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-2">The Rules</h2>
            <p className="text-white/50 uppercase tracking-widest text-xs">Keep it fair, keep it fun</p>
          </div>

          <div className="space-y-6">
            <RuleItem number="01" title="Respect Everyone" desc="No harassment, discrimination, or excessive toxicity." />
            <RuleItem number="02" title="No Hacking" desc="Cheat clients, auto-clickers, and exploits will result in a permanent ban." />
            <RuleItem number="03" title="Griefing" desc="Griefing is allowed ONLY in the Lifesteal world. Survival is protected." />
            <RuleItem number="04" title="Lag Machines" desc="Any attempt to intentionally lag the server will be met with a IP ban." />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <img 
              src="https://i.ibb.co/BKrZkgFT/8c66768c1beefba8260bcd0d5a7d5ed3.webp" 
              alt="Arise SMP Logo" 
              className="w-10 h-10 rounded-lg object-cover"
              referrerPolicy="no-referrer"
            />
            <span className="font-bold uppercase tracking-tighter">Arise SMP</span>
          </div>

          <div className="flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Staff</a>
          </div>

          <div className="text-xs text-white/30 text-center md:text-right">
            © 2026 Arise SMP. Not an official Minecraft product. <br />
            Not approved by or associated with Mojang or Microsoft.
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc, color, img }: { icon: React.ReactNode, title: string, desc: string, color: string, img: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`group relative p-8 rounded-2xl bg-white/5 border ${color} hover:bg-white/10 transition-all duration-500 overflow-hidden`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
        <img src={img} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
      <div className="relative z-10">
        <div className="mb-6 p-3 w-fit rounded-xl bg-orange-500 text-black">
          {icon}
        </div>
        <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">{title}</h3>
        <p className="text-white/60 leading-relaxed font-medium">{desc}</p>
      </div>
    </motion.div>
  );
}

function StatItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div>
      <div className="flex justify-center mb-4 text-3xl opacity-80">{icon}</div>
      <div className="text-sm font-bold uppercase tracking-widest text-white/30 mb-1">{label}</div>
      <div className="text-3xl font-black tracking-tighter">{value}</div>
    </div>
  );
}

function RuleItem({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex gap-6 items-start hover:border-white/20 transition-colors">
      <span className="text-orange-500 font-mono font-bold">{number}</span>
      <div>
        <h4 className="font-bold uppercase tracking-tight mb-1">{title}</h4>
        <p className="text-sm text-white/50">{desc}</p>
      </div>
    </div>
  );
}
