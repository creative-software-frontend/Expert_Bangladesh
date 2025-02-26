// import { Search } from "lucide-react"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
"use client"
import { Search, MapPin, X, Target } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"
import Image from "next/image"
export default function Banner2() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedCity, setSelectedCity] = useState("Gulshan")
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Find the right service</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6L9 17L4 12" />
            </svg>
          </div>
          <div>
            <div className="text-sm text-blue-600 font-medium">LIVE SERVICE</div>
            <div className="text-xl font-bold text-blue-800">4,477</div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div>
            <div className="text-sm text-blue-600 font-medium">ORDER </div>
            <div className="text-xl font-bold text-blue-800">17,640+</div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <div>
            <div className="text-sm text-blue-600 font-medium">COMPLETE SERVICE</div>
            <div className="text-xl font-bold text-blue-800">2,608</div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20M2 12h20" />
            </svg>
          </div>
          <div>
            <div className="text-sm text-blue-600 font-medium"> SERVICE PROVIDER</div>
            <div className="text-xl font-bold text-blue-800">361</div>
          </div>
        </div>
      </div>

      {/* Search Section */}
     
      <div className="bg-blue-700 p-6 rounded-lg mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <Button
            variant="outline"
            className="bg-white w-full md:w-auto flex justify-between items-center gap-2"
            onClick={() => setIsOpen(true)}
          >
            <MapPin className="w-5 h-5 text-[#E91E63]" />
            <span className="flex-1 text-left">{selectedCity}</span>
          </Button>
          <div className="flex-1">
            <Input type="text" placeholder="Search by keyword" className="w-full bg-white" />
          </div>
          {/* <div className="w-full md:w-64">
            <Select>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Organization Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="private">Private</SelectItem>
                <SelectItem value="public">Public</SelectItem>
                <SelectItem value="ngo">NGO</SelectItem>
              </SelectContent>
            </Select>
          </div> */}
          <Button className="bg-green-500 hover:bg-green-600">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-xl font-semibold">Select Your City</DialogTitle>
              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 p-4">
            {[
              { name: "Dhaka", image: "/placeholder.svg?height=50&width=50" },
              { name: "Chittagong", image: "/placeholder.svg?height=50&width=50" },
            ].map((city) => (
              <button
                key={city.name}
                className="p-6 border rounded-lg hover:border-[#E91E63] flex flex-col items-center gap-2"
                onClick={() => {
                  setSelectedCity(city.name)
                  setIsOpen(false)
                }}
              >
                <Image
                  src={city.image || "/placeholder.svg"}
                  alt={city.name}
                  width={50}
                  height={50}
                  className="w-12 h-12 object-contain"
                />
                <span className="text-[#E91E63] font-medium">{city.name}</span>
              </button>
            ))}
          </div>
          <Button
            variant="outline"
            className="mx-auto w-[300px] flex items-center gap-2 text-[#E91E63] border-[#E91E63]"
            onClick={() => {
              // Handle getting current location
              setIsOpen(false)
            }}
          >
            <Target className="w-5 h-5" />
            At my current location
          </Button>
        </DialogContent>
      </Dialog>
  

      {/* Location Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {[
          { name: "Dhaka", count: 2594 },
          { name: "Barishal", count: 34 },
          { name: "Khulna", count: 140 },
          { name: "Sylhet", count: 115 },
          { name: "Chattogram", count: 429 },
          { name: "Rajshahi", count: 108 },
          { name: "Rangpur", count: 65 },
          { name: "Mymensingh", count: 93 },
        ].map((location) => (
          <div key={location.name} className="px-4 py-2 bg-gray-100 rounded-full text-sm">
            {location.name} ({location.count})
          </div>
        ))}
      </div>

      {/* Quick Links Section */}
      <div className="grid md:grid-cols-[1fr_300px] gap-6">
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-xl font-semibold">Service Category</h2>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm">
                Functional
              </Button>
              <Button variant="outline" size="sm">
                Industrial
              </Button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Accounting/Finance (315)",
              "Production/Operation (132)",
              "Agro (Plant/Animal/Fisheries) (70)",
              "Bank/ Non-Bank Fin. Institution (72)",
              "Hospitality/ Travel/ Tourism (165)",
              "NGO/Development (202)",
              "Supply Chain/ Procurement (121)",
              "Commercial (78)",
              "Research/Consultancy (20)",
              "Hospitality/ Travel/ Tourism (165)",
              "NGO/Development (202)",
              "Supply Chain/ Procurement (121)",
              "Commercial (78)",
              "Research/Consultancy (20)",
              "Hospitality/ Travel/ Tourism (165)",
              "NGO/Development (202)",
              "Supply Chain/ Procurement (121)",
              "Commercial (78)",
              "Research/Consultancy (20)",
              "NGO/Development (202)",
              "Supply Chain/ Procurement (121)",
              "Commercial (78)",
              "Research/Consultancy (20)",
              "Research/Consultancy (20)",
            ].map((category) => (
              <div key={category} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 cursor-pointer">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
                {category}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-700 p-4 rounded-lg text-white">
          <h3 className="font-semibold mb-4">QUICK LINKS</h3>
          <div className="space-y-2">
            {[
              "Employer List (2606)",
              "New Jobs (360)",
              "Deadline Tomorrow (254)",
              "Internship Opportunity (54)",
              "Contractual Jobs (202)",
              "Part time Jobs (38)",
              "Overseas Jobs (65)",
              "Work From Home (61)",
              "Fresher Jobs (1311)",
            ].map((link) => (
              <div key={link} className="flex items-center gap-2 hover:text-blue-200 cursor-pointer">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                {link}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

