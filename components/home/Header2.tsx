import Link from "next/link"
import Image from "next/image"
import logo from "@/assests/banner/logo.jpg"

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Sheba"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link
            href="/sheba-pay"
            className="px-6 py-2 rounded-full border border-[#E91E63] text-[#E91E63] hover:bg-[#E91E63]/5 transition-colors"
          >
            Sheba Pay
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-[#E91E63] transition-colors">
            All Services
          </Link>
          <Link href="/login" className="text-gray-700 hover:text-[#E91E63] transition-colors">
            Login
          </Link>
        </nav>
      </div>
    </header>
  )
}

