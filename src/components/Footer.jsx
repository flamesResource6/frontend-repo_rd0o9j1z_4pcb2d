export default function Footer() {
  return (
    <footer className="py-8 bg-black text-white/60 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Decoding The Unseen. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}
