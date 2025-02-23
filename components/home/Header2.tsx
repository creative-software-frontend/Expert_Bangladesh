import Image from "next/image"
import Link from "next/link"
import { ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header2() {
  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="relative bg-[#FFF8F0] px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/placeholder.svg?height=80&width=120"
              alt="Hospitality workers"
              width={120}
              height={80}
              className="hidden sm:block"
            />
            <div className="flex items-center gap-4">
              <h1 className="text-[#8B4513] text-xl sm:text-2xl font-bold">
                HOSPITALITY &<br />
                CHEF JOB FAIR
              </h1>
              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-sm">Powered by:</span>
                <Image src="/placeholder.svg?height=30&width=80" alt="bdjobs" width={80} height={30} />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-red-600 text-white px-4 py-2 rounded">
              <span className="text-xl font-bold">26</span> February
            </div>
            <Link href="/register" className="text-[#8B4513] font-bold text-lg hover:underline">
              Register &gt;
            </Link>
          </div>
          <button className="absolute right-2 top-2 text-gray-600 hover:text-gray-800">
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-[#2D3E50] text-white px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <nav className="flex items-center">
            <Link href="/jobs" className="px-6 py-3 bg-[#3B5998] hover:bg-[#4B69A8]">
              JOBS
            </Link>
            <Link href="/my-bdjobs" className="px-6 py-3 hover:bg-[#3B5998]">
              MY BDJOBS
            </Link>
            <Link href="/e-learning" className="px-6 py-3 hover:bg-[#3B5998]">
              E-LEARNING
            </Link>
            <Link href="/tender" className="px-6 py-3 hover:bg-[#3B5998]">
              TENDER/EOI
            </Link>
            <Link href="/recruiter" className="px-6 py-3 bg-[#4A5568] hover:bg-[#5A6578]">
              Recruiter
            </Link>
            <Link href="/post-job" className="px-6 py-3 bg-[#48BB78] hover:bg-[#58CB88]">
              POST A JOB
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-gray-300">
              <Image src="/placeholder.svg?height=20&width=20" alt="YouTube" width={20} height={20} />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Image src="/placeholder.svg?height=20&width=20" alt="Facebook" width={20} height={20} />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Image src="/placeholder.svg?height=20&width=20" alt="Google" width={20} height={20} />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Image src="/placeholder.svg?height=20&width=20" alt="LinkedIn" width={20} height={20} />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Image src="/placeholder.svg?height=20&width=20" alt="Instagram" width={20} height={20} />
            </Link>
            <div className="border-l border-gray-600 pl-4 flex gap-2">
              <Button variant="outline" size="sm" className="text-white">
                ENG
              </Button>
              <Button variant="outline" size="sm" className="text-white">
                বাংলা
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="bg-white shadow px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/placeholder.svg?height=40&width=120" alt="bdjobs.com" width={120} height={40} />
            <span className="text-xs text-gray-600">LARGEST JOB SITE IN BANGLADESH</span>
          </Link>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="font-bold">bdjobs</span>
              <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">PRO</span>
              <span className="bg-red-600 text-white text-xs px-1 rounded">new</span>
            </div>
            <Link href="/video-cv" className="hover:text-blue-600">
              Video CV
            </Link>
            <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
              Career Resources
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-2">
              <Link href="/sign-in" className="hover:text-blue-600">
                Sign in
              </Link>
              <span>or</span>
              <Link href="/create-account" className="hover:text-blue-600">
                Create Account
              </Link>
            </div>
            <Button variant="outline">Contact Us</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

