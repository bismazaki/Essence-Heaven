"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="relative w-full h-[300px]">
        <Image
          className="object-cover w-full md:h-[700]"
          src="/EmeraldBanner.png"
          alt="Perfume banner"
          width={1000} // Set the width of the image
          height={400} // Set the height of the image
        />
      </div>

      {/* Section Content */}
      <div className="container mx-auto px-4 md:px-8">
        <section className="text-gray-600 body-font relative desktop-section">
          <div className="py-12">
            <div className="flex justify-between items-center">
              <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-green-900 font-serif">
                OUR BEST SELLER
              </h1>
              <Link href="/See-all">
                <span className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-green-900 underline">
                  See all
                </span>
              </Link>
            </div>

            <div className=" mt-5 flex flex-wrap -m-4">
              {/* Card 1 */}
              <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
                <div className="h-full min-h-[200px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    className="w-full h-auto object-cover object-center"
                    src="https://images.unsplash.com/photo-1458538977777-0549b2370168?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Perfume Image"
                    width={500}
                    height={400}
                  />
                  <div className="p-6">
                    <h2 className="text-xs font-medium text-gray-400 mb-1">Perfume</h2>
                    <h1 className="text-lg font-medium text-gray-900 mb-3">Midnight Embrace</h1>
                    <p className="leading-relaxed mb-3">
                      A rich and luxurious blend of dark chocolate, amber, and vanilla, perfect for an evening of mystery.
                    </p>
                    <p className="text-xl font-semibold text-gray-900 mb-3">$69.99</p>
                    <div className="flex items-center flex-wrap">
                      <a className="inline-flex items-center">
                        <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 w-full sm:w-auto">
                          Buy Now
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
                <div className="h-full min-h-[200px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    className="w-full h-auto object-cover object-center"
                    src="https://images.unsplash.com/photo-1593487568720-92097fb460fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcmZ1bWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
                    alt="Perfume Image"
                    width={400}
                    height={200}
                  />
                  <div className="p-6">
                    <h2 className="text-xs font-medium text-gray-400 mb-1">Perfume</h2>
                    <h1 className="text-lg font-medium text-gray-900 mb-3">Solar Breeze</h1>
                    <p className="leading-relaxed mb-3">
                      A refreshing citrusy fragrance with a hint of sea salt, perfect for sunny days and beach vibes.
                    </p>
                    <p className="text-xl font-semibold text-gray-900 mb-3">$59.99</p>
                    <div className="flex items-center flex-wrap">
                      <a className="inline-flex items-center">
                        <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 w-full sm:w-auto">
                          Buy Now
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div className="w-full h-[200px] sm:h-[250px] lg:h-[300px]"> {/* Restrict height explicitly */}
                    <Image
                      className="w-full h-full object-cover object-center"
                      src="https://media.istockphoto.com/id/625879534/photo/female-hands-holding-perfume.jpg?s=612x612&w=0&k=20&c=yMW85uo_c1pc6ckr0DwvGZfJIoGBSU2HKNhKluSt55w="
                      alt="Perfume Image"
                      width={400}
                      height={200}
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xs font-medium text-gray-400 mb-1">Perfume</h2>
                    <h1 className="text-lg font-medium text-gray-900 mb-3">Velvet Noir</h1>
                    <p className="leading-relaxed mb-3">
                      A deep, sultry fragrance with notes of rose, musk, and smoky oud—perfect for a romantic evening.
                    </p>
                    <p className="text-xl font-semibold text-gray-900 mb-3">Rs899.99</p>
                    <div className="flex items-center flex-wrap">
                      <a className="inline-flex items-center">
                        <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 w-full sm:w-auto">
                          Buy Now
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>


              {/* Card 4 */}
              <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
                <div className="h-full min-h-[200px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    className="w-full h-auto object-cover object-center"
                    src="https://media.istockphoto.com/id/2129926252/photo/concept-of-fragrant-flavored-perfume-close-up.jpg?s=612x612&w=0&k=20&c=u0O7TW1dBUE_T1BWMKo2bVXhkJt7It5VUzUhonOQe0I="
                    alt="Perfume Image"
                    width={400}
                    height={200}
                  />
                  <div className="p-6">
                    <h2 className="text-xs font-medium text-gray-400 mb-1">Perfume</h2>
                    <h1 className="text-lg font-medium text-gray-900 mb-3">Eternal Blossom</h1>
                    <p className="leading-relaxed mb-3">
                      A delicate floral fragrance with notes of jasmine, rose, and lily of the valley, enveloped in a soft, musky base. Perfect for those who love timeless elegance and a gentle, romantic scent.
                    </p>
                    <p className="text-xl font-semibold text-gray-900 mb-3">$79.99</p>
                    <div className="flex items-center flex-wrap">
                      <a className="inline-flex items-center">
                        <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 w-full sm:w-auto">
                          Buy Now
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 5 */}
              <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
                <div className="h-full min-h-[200px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    className="w-full h-auto object-cover object-center"
                    src="https://media.istockphoto.com/id/1325377628/photo/perfume-glass-bottle-on-golden-podium-with-soap-water-bubbles-mock-up-banner-beauty-skin-care.jpg?s=612x612&w=0&k=20&c=s-lpWtxIvJCnwZ3BxaoV4gDEy_byDiOYaxqTXZrWHj8="
                    alt="Perfume Image"
                    width={400}
                    height={200}
                  />
                  <div className="p-6">
                    <h2 className="text-xs font-medium text-gray-400 mb-1">Perfume</h2>
                    <h1 className="text-lg font-medium text-gray-900 mb-3">Midnight Reverie</h1>
                    <p className="leading-relaxed mb-3">
                      A captivating fragrance that blends the depth of dark vanilla, amber, and a touch of smoky cedarwood. This scent evokes the mystery and allure of the night, perfect for those who cherish bold and enchanting aromas.
                    </p>
                    <p className="text-xl font-semibold text-gray-900 mb-3">$89.99</p>
                    <div className="flex items-center flex-wrap">
                      <a className="inline-flex items-center">
                        <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 w-full sm:w-auto">
                          Buy Now
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 6 */}
              <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
                <div className="h-full min-h-[200px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    className="w-full h-auto object-cover object-center"
                    src="https://media.istockphoto.com/id/2150147067/photo/a-bottle-of-perfume-on-a-background-of-sand.jpg?s=612x612&w=0&k=20&c=-prbMbSy9JbgmIxseJ-cHVsWu3V_YNlVbub4u_2BZvc="
                    alt="Perfume Image"
                    width={400}
                    height={200}
                  />
                  <div className="p-6">
                    <h2 className="text-xs font-medium text-gray-400 mb-1">Perfume</h2>
                    <h1 className="text-lg font-medium text-gray-900 mb-3">Golden Aura</h1>
                    <p className="leading-relaxed mb-3">
                      A warm, sensual fragrance featuring notes of golden amber, exotic vanilla, and a hint of sandalwood. A luxurious scent that radiates elegance and sophistication, designed for those who love a rich and enveloping perfume experience.
                    </p>
                    <p className="text-xl font-semibold text-gray-900 mb-3">Rs3700.99</p>
                    <div className="flex items-center flex-wrap">
                      <a className="inline-flex items-center">
                        <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 w-full sm:w-auto">
                          Buy Now
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* Tailwind CSS for desktop-specific adjustments */}
      <style jsx>{`
        @media (min-width: 1024px) {
          .desktop-section {
            margin-top: 450px; /* Adjust this value to separate the section from the banner */
          }
        }
      `}</style>
    </div>
  );
}
