import React from 'react'
import { estate_home2, estate_home5, estate_sky } from '../assets/images'
import { PiAlarm, PiWarehouse } from "react-icons/pi"
import { Container } from 'postcss'
import { Link } from 'react-router-dom'
import FeaturedSlide from '../components/FeaturedSlide'

export default function Home() {
  return (
    <main className="flex flex-col bg-white p-4">
      <section className="container mx-auto flex flex-col md:flex-row-reverse gap-4 md:items-center">
        <aside className="flex-1 relative h-72 md:h-full min-h-[288px] md:min-h-[500px] w-full rounded-lg overflow-hidden">
          <img src={estate_sky} alt="" className="absolute h-full w-full top-0 left-0 object-cover" />
        </aside>
        <aside className="flex-1 flex flex-col gap-3 py-5 md:py-10">
          <h2 className="text-slate-800 font-semibold text-2xl sm:text-3xl md:text-4 md:xl leading-snug">Airspace is on a Mission to Change the View of Real Estate</h2>
          <p className="text-slate-700 text-base sm:text-lg text-justify leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempora quae nihil dolores, odio voluptatum non quas natus odit, quidem rerum ipsam accusamus quam. Praesentium, harum? Tempore hic nam deserunt?</p>
          <div className="flex flex-col xl:flex-row xl:gap-6">
            <div className="bg-white drop-shadow-xl hover:shadow-2xl rounded-md p-4 mt-4 flex items-center gap-4">
              <div className="h-8 md:h-12 w-8 md:w-12 rounded-full grid place-items-center bg-orange-500 flex-shrink-0 text-slate-800 text-2xl md:text-3xl">
                <PiWarehouse />
              </div>
              <div className="flex flex-col">
                <h4 className="text-slate-800 font-semibold text-xl md:text-2xl">Modern Villa</h4>
                <p className="text-slate-700 text-xs sm:text-sm text-justify leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga qui porro ut magnam possimus blanditiis!</p>
              </div>
            </div>
            <div className="bg-white drop-shadow-xl hover:shadow-2xl rounded-md p-4 mt-4 flex items-center gap-4">
              <div className="h-8 md:h-12 w-8 md:w-12 rounded-full grid place-items-center bg-orange-500 flex-shrink-0 text-slate-800 text-2xl md:text-3xl">
                <PiAlarm />
              </div>
              <div className="flex flex-col">
                <h4 className="text-slate-800 font-semibold text-xl md:text-2xl">Secure Payment</h4>
                <p className="text-slate-700 text-xs sm:text-sm text-justify leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga qui porro ut magnam possimus blanditiis!</p>
              </div>
            </div>
          </div>
        </aside>
      </section>
      <section className="relative py-20 md:pt-40 px-4 from-slate-700 to-slate-950 bg-gradient-to-b -mx-4 mt-10">
        <img src={estate_home5} alt="" className="absolute top-0 left-0 w-full h-full object-cover opacity-40" />
        <div className="relative z-5 container mx-auto flex flex-col md:flex-row md:justify-between gap-6 py-10 md:pt-20">
          <div className="relative">
            <h3 className="bg-white w-max pr-6 p-2 rounded-md rounded-bl-none text-slate-700 text-lg sm:text-2xl font-semibold capitalize">We are here</h3>
            <h3 className="bg-white pr-6 p-2 pt-0 rounded-none rounded-br-md text-slate-700 text-lg sm:text-2xl font-semibold capitalize w-max">For you.</h3>
            <div className="bg-white pt-0 pr-4 p-2 rounded-none rounded-br-md rounded-bl-md text-slate-700 text-lg sm:text-2xl font-semibold capitalize w-max flex">
              {
                Array(4).fill(1).map((_, i) => <div key={i} className='h-4 md:h-6 w-4 md:w-6 rounded-full relative bg-orange-500 grid place-items-center border border-slate-300 -ml-1'></div>)
              }
            </div>
          </div>
          <div className="relative max-w-xs">
            <div className="flex gap-4 justify-around text-white pb-4">
              <div className="flex flex-col text-center">
                <h5 className="font-bold text-2xl sm:text-3xl">170+</h5>
                <p className="text-sm sm:text-base">Apartments Available</p>
              </div>
              <div className="flex flex-col text-center">
                <h5 className="font-bold text-2xl sm:text-3xl">73+</h5>
                <p className="text-sm sm:text-base">Condos Erected</p>
              </div>
            </div>
            <div className="grid gap-3 md:gap-5 grid-cols-2 md:grid-cols-3">
              {
                ["Furniture", "Home", "Rent", "100%", "Brand", "Pool"].map((el, i) => <div className='bg-slate-600/60 hover:bg-slate-700 text-white text-center py-1 px-4 rounded-[2rem]' key={i}>{el}</div>)
              }
            </div>
          </div>
        </div>
      </section>
      <section className="md:flex md:flex-col gap-6 mx-24 mt-10">
        <div className='md:flex gap-20'>
          <div className='mb-4 flex-1'>
            <p className='text-orange-500 font-bold text-lg tracking-normal mt-1'>Discover Our Services</p>
            <h1 className='text-slate-800 text-4xl font-bold mt-4'>What We Are Providing</h1>
            <p className='mt-8 text-slate-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut neque accusantium hic distinctio dolores natus eius eos delectus voluptas. Odio? Lorem ipsum dolor sit amet.</p>
            <p className='mt-6 text-slate-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit vero corporis aut? Quidem et, autem accusamus deleniti est quaerat magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, corrupti!</p>
          </div>
          <img src={estate_home2} alt="" className='md:flex-1 md:w-5 w-full h-full object-cover rounded-2xl mt-1' />
        </div>
        <div className="md:flex mt-10 gap-20">
          <img src={estate_home5} alt="" className='md:flex-1 object-cover rounded-2xl mt-1 md:w-5 w-full md:h-full' />
          <div className="mb-4 flex-1">
            <p className="font-bold text-slate-800 mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloremque possimus, saepe hic ipsa sunt?</p>
            <p className="mt-6 text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum blanditiis adipisci molestias laborum veritatis amet a, error quo aliquid ratione cum doloremque odio repellendus exercitationem qui, veniam libero asperiores non earum nisi beatae pariatur esse? Labore necessitatibus asperiores explicabo in?</p>
            <p className="mt-1 text-slate-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo consequuntur laboriosam deserunt itaque harum accusamus odio? Deleniti facere ex architecto?</p>
          </div>
        </div>
      </section>
      <section className='bg-[#f7faff] -mx-4'>
        <div className="container mx-auto flex flex-col gap-6 py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col">
              <h4 className="text-lg md:text-2xl font-semibold text-slate-800 capitalize">Discover our featured properties</h4>
              <p className="text-slate-700 text-base sm:text-sm text-justify leading-relaxed">Discover best deals for your ideal dream house</p>
            </div>
            <Link to="/properties" className='py-2 md:py-3 px-6 md:px-10 w-max border border-solid border-slate-700 text-slate-700 text-sm md:text-base rounded-full'>See More</Link>
          </div>
          <div className="py-8 w-full">
            <FeaturedSlide />
          </div>
        </div>
      </section>

    </main>
  )
}
