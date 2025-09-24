export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#12161C]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <header className="flex items-center justify-between mb-16">
          <div className="flex items-center">
            <img 
              src="/veribite-text.svg" 
              alt="Veribite" 
              className="h-5 w-auto"
            />
            <img 
              src="/veribite-icon.svg" 
              alt="Veribite" 
              className="h-5 w-auto -ml-3"
            />
          </div>
          <a href="#waitlist" className="rounded-xl bg-[#2F70F7] px-4 py-2 text-white font-semibold">
            Join waitlist
          </a>
        </header>

        <section className="mt-16 grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-5xl font-extrabold leading-tight">Verify every bite.</h1>
            <p className="mt-4 text-lg text-[#6A7381]">
              Scan any supermarket product and get a personal <b>Go/No-Go</b> verdict in seconds —
              with clear reasons and healthier swaps.
            </p>
            <ul className="mt-6 space-y-2">
              <li>• Personalised allergen warnings</li>
              <li>• Your calorie & macro fit</li>
              <li>• Smart swaps when it&apos;s a No-Go</li>
              <li>• Shopping session tracking</li>
              <li>• Recipe generation from your completed basket</li>
              <li>• Basket analysis & nutrient recommendations (optional)</li>
            </ul>
            <a href="#waitlist" className="mt-8 inline-flex rounded-xl bg-[#2F70F7] px-5 py-3 text-white font-semibold">
              Get early access
            </a>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-[0_1px_2px_rgba(16,19,23,.06),0_8px_24px_rgba(16,19,23,.08)]">
            {/* Replace with a screenshot of your app later */}
            <img 
              src="/GoNoMockup.png" 
              alt="Veribite App Preview" 
              className="h-80 w-full rounded-xl object-cover object-top"
            />
            <p className="mt-3 text-sm text-[#6A7381]">App preview</p>
          </div>
        </section>

        <section id="waitlist" className="mt-20 rounded-2xl bg-white p-6 shadow">
          <h2 className="text-xl font-semibold">Get early access</h2>
            <p className="mt-1 text-[#6A7381]">We&apos;ll invite you as soon as Veribite is ready.</p>
          <form className="mt-4 flex flex-col gap-3 sm:flex-row" action="https://formspree.io/f/mkgvergo" method="POST">
            <input
              name="email"
              type="email"
              required
              placeholder="you@email.com"
              className="flex-1 rounded-xl border border-[#E6EAF0] px-4 py-3"
            />
            <button className="rounded-xl bg-[#2F70F7] px-5 py-3 text-white font-semibold sm:flex-shrink-0">Join</button>
          </form>
          <p className="mt-3 text-xs text-[#6A7381]">
            By joining, you agree to our <a className="underline" href="/privacy">Privacy Policy</a>.
          </p>
        </section>

        <footer className="mt-16 mb-8 pb-8 text-xs text-[#6A7381]">
          © {new Date().getFullYear()} Veribite. Not medical advice.
        </footer>
      </div>
    </main>
  );
}