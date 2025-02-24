"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { Button } from "@/components/ui/button"
import { useCallback } from "react"
import img1 from "@/assests/service/1.webp"
import img2 from "@/assests/service/2.webp"
import img3 from "@/assests/service/3.webp"
import img4 from "@/assests/service/4.webp"

const services = [
  {
    title: "Plumbing & Sanitary Services",
    image:img1,
  },
  {
    title: "House Shifting Services",
    image:img2,
  },
  {
    title: "Home Cleaning",
    image: img3,
  },
  {
    title: "Gas Stove/Burner Services",
    image: img4,
  },
  {
    title: "Home Cleaning",
    image: img3,
  },
  {
    title: "Gas Stove/Burner Services",
    image: img4,
  },
  // Add more services as needed
]

export default function Service() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    skipSnaps: false,
    dragFree: true,
  })

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">For Your Home</h2>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex-[0_0_300px] min-w-0">
                <div className="group cursor-pointer">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute -right-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full border border-gray-200 bg-white shadow-md hover:bg-gray-50"
          onClick={scrollNext}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}

