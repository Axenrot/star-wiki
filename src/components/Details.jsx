import { useParams } from "react-router-dom";
import axios from "axios";
import { characterURL, starshipURL } from "../client/utils/url";
import { useEffect, useState } from "react";

export default function Details({ pageType }) {
  const { id } = useParams();
  const [data, setData] = useState([]);

  async function getData() {
    await axios
      .get(`${pageType ? characterURL : starshipURL} + ${id}`)
      .then((res) => setData(res.data));
  }
  useEffect(() => {
    getData();
  }, []);

  return pageType ? (
    <div className="fadein grid grid-rows-6 grid-cols-4 overflow-hidden bg-semiblack bg-opacity-95 shadow-xl shadow-semiblack rounded-lg mb-[15vh] mt-10 min-h-[500px] select-none">
      <div
        id="BG"
        className="sm:h-full bg-characterdetail sm:bg-characterdetail-sm lg:bg-characterdetail-lg bg-no-repeat bg-bottom sm:bg-left bg-cover col-span-full row-span-1 sm:row-span-full sm:col-span-2 sm:order-2 select-none"
      />

      <div className="text-staryellow flex flex-col row-span-5 sm:row-span-full col-span-full sm:col-span-2 overflow-hidden">
        <h3 className="text-white font-starjedi px-3 sm:px-5 py-2 text-[20px] md:text-[30px] font-bold select-none">
          Character Details
        </h3>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Name:</dt>
          <dd className="italic text-end">{data.name}</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Homeland:</dt>
          <dd className="italic text-end">teste</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Birth year:</dt>
          <dd className="italic text-end">teste</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Gender:</dt>
          <dd className="italic text-end">teste</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Height:</dt>
          <dd className="italic text-end">teste</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Weight:</dt>
          <dd className="italic text-end">teste</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Hair color:</dt>
          <dd className="italic text-end">teste</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Eye color:</dt>
          <dd className="italic text-end">teste</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Skin color:</dt>
          <dd className="italic text-end">teste</dd>
        </div>
        <div className="text-lg px-3 py-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Movies:</dt>
          <div className="text-end">
            <dd className="italic text-end">teste</dd>
            <dd className="italic text-end">teste</dd>
            <dd className="italic text-end">teste</dd>
            <dd className="italic text-end">teste</dd>
          </div>
        </div>
        <div className="text-lg px-3 py-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Starship:</dt>
          <div className="text-end">
            <dd className="italic text-end">teste</dd>
            <dd className="italic text-end">teste</dd>
            <dd className="italic text-end">teste</dd>
            <dd className="italic text-end">teste</dd>
          </div>
        </div>
        <div className="text-lg px-3 py-2 sm:gap-4 sm:px-6">
          <dt className="font-bold">Vehicles:</dt>
          <div className="text-end">
            <dd className="italic text-end">teste</dd>
            <dd className="italic text-end">teste</dd>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="fadein grid grid-rows-6 grid-cols-4 overflow-hidden bg-semiblack bg-opacity-95 shadow-xl shadow-semiblack rounded-lg mb-[15vh] mt-10 min-h-[500px]">
      <div
        id="BG"
        className="bg-starshipdetail sm:bg-starshipdetail-sm lg:bg-starshipdetail-lg bg-no-repeat bg-bottom sm:bg-left bg-cover col-span-full row-span-1 sm:row-span-full sm:col-span-2 sm:order-2 select-none"
      />

      <div className="text-staryellow flex flex-col row-span-5 sm:row-span-full col-span-full sm:col-span-2 overflow-hidden">
        <h3 className="text-white font-starjedi px-3 sm:px-5 py-2 text-[20px] md:text-[30px] font-bold select-none">
          Starship Details
        </h3>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Name:</dt>
          <dd className="italic text-end">{data.name}</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Homeland:</dt>
          <dd className="italic text-end">teste</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Birth year:</dt>
          <dd className="italic text-end">teste</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Gender:</dt>
          <dd className="italic text-end">teste</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Height:</dt>
          <dd className="italic text-end">teste</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Weight:</dt>
          <dd className="italic text-end">teste</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Hair color:</dt>
          <dd className="italic text-end">teste</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Eye color:</dt>
          <dd className="italic text-end">teste</dd>
        </div>
        <div className="text-lg px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Skin color:</dt>
          <dd className="italic text-end">teste</dd>
        </div>
        <div className="text-lg px-3 py-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Movies:</dt>
          <div className="text-end">
            <dd className="italic text-end">teste</dd>
            <dd className="italic text-end">teste</dd>
            <dd className="italic text-end">teste</dd>
            <dd className="italic text-end">teste</dd>
          </div>
        </div>
        <div className="text-lg px-3 py-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="font-bold">Starship:</dt>
          <div className="text-end">
            <dd className="italic text-end">teste</dd>
            <dd className="italic text-end">teste</dd>
            <dd className="italic text-end">teste</dd>
            <dd className="italic text-end">teste</dd>
          </div>
        </div>
        <div className="text-lg px-3 py-2 sm:gap-4 sm:px-6">
          <dt className="font-bold">Vehicles:</dt>
          <div className="text-end">
            <dd className="italic text-end">teste</dd>
            <dd className="italic text-end">teste</dd>
          </div>
        </div>
      </div>
    </div>
  );
}
