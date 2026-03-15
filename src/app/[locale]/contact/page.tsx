import ContactBackground from '@/components/animations/ContactBackground';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden text-foreground flex flex-col">
      {/* Animated background */}
      <ContactBackground />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-16 lg:px-24 xl:px-32 pt-36 lg:pt-40 pb-16 lg:pb-24 w-full max-w-[1600px] mx-auto min-h-screen">

        {/* Left: Typography (desktop only) */}
        <div className="hidden lg:flex flex-col justify-center flex-1 pr-16 max-w-3xl pointer-events-none">
          <div className="inline-block px-4 py-2 border border-primary-500/30 rounded-full text-primary-400 text-xs tracking-widest uppercase mb-8 backdrop-blur-sm self-start">
            Initiate Contact
          </div>
          <h1 className="text-6xl xl:text-8xl font-serif leading-[1.1] mb-8 text-foreground">
            Let&apos;s shape <br />
            the{" "}
            <span className="text-gradient italic">vision</span> <br />
            together.
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-transparent mb-8 rounded-full" />
          <p className="text-xl xl:text-2xl text-foreground/60 max-w-xl font-light leading-relaxed">
            Reach out to discuss data architecture, AI strategy, or enterprise-scale digital transformation.
          </p>
        </div>

        {/* Right: Form */}
        <div className="w-full lg:w-auto flex justify-end xl:mr-12">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
