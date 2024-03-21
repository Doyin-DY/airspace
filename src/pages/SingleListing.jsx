import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { houseData } from "../data/houseData";
import { GiBed } from "react-icons/gi";
import { MdBathtub } from "react-icons/md";
import { PiToilet, PiWarehouse } from "react-icons/pi";

export default function SingleListing() {
  const params = useParams();
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const house = houseData.find((el) => el.id === params.id.toString());
    if (house) setData((prev) => ({ ...house }))
    setLoading(false)
  }, [params.id]);

   return (
    <main className="flex flex-col bg-primary">
      {data ? <section className="px-4 py-5">
        <h2 className="container mx-auto text-2xl md:text-4xl text-slate-800 pt-5 pb-3 leading-tight font-bold flex items-center gap-2"><PiWarehouse className="-scale-x-100"/>{data?.title}</h2>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 grid-rows-[repeat(3, 150px)] md:grid-rows-[repeat(2, 150px)] gap-4">
          <img src={data?.image[0]} alt={data?.title} className="col-span-2 row-span-2 object-cover h-full w-full rounded-md" />
          <img src={data?.image[1]} alt={data?.title} className="object-cover h-full w-full rounded-md" />
          <img src={data?.image[2]} alt={data?.title} className="object-cover h-full w-full rounded-md" />
        </div>
        <div className="container mx-auto flex flex-col py-4">
          <h3 className="text-lg md:text-3xl text-slate-800 font-semibold">Description</h3>
          <p className="text-base md:text-lg text-slate-600 font-medium">{data?.description}</p>

        <div className="flex items-center py-4 gap-4 text-slate-700 group-hover:text-white">
          <div className="flex items-center gap-[.15rem] text-base md:text-lg md:gap-2">
            <GiBed />
            <p className="opacity-70">
              {data?.bedroom} bedroom{data?.bedroom > 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex items-center gap-[.15rem] text-base md:text-lg md:gap-2">
            <MdBathtub />
            <p className="opacity-70">
              {data?.bathroom} bathroom{data?.bathroom > 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex items-center gap-2 text-base md:text-lg  md:gap-2">
            <PiToilet />
            <p className="opacity-70">
              {data?.restroom} restroom{data?.restroom > 1 ? "s" : ""}
            </p>
          </div>
        </div>
        </div>
      </section> :
        <section className="px-4 py-5">
          <h3 className="text-slate-800 text-xl md:text-2xl text-center py-5">{loading ? "Fetching House Details..." : "No Record Found"}</h3>
        </section>
      }
    </main>
  );
}
