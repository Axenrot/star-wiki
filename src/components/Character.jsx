import { useEffect } from "react";
import axios from "axios";

export default function Character({ url }) {
  let data = [];
  useEffect(() => {
    axios.get(url).then((response) => (data = response.data));
  }, []);

  const characterDetail = (
    <div className="fadein grid grid-rows-4 grid-cols-3 overflow-hidden bg-semiblack bg-opacity-95 shadow-xl shadow-semiblack rounded-lg mb-[15vh] mt-10 min-h-[500px]">
      <div
        onClick={() => console.log(data)}
        id="BG"
        className="row-span-1 sm:row-span-full sm:h-full bg-characterdetail sm:bg-characterdetail-sm lg:bg-characterdetail-lg bg-no-repeat bg-bottom sm:bg-left bg-cover col-span-3 sm:col-span-1 sm:order-3"
      />

      <div className="flex flex-col row-span-3 sm:row-span-full col-span-full sm:col-span-2 overflow-hidden">
        <h3 className="text-staryellow underline px-3 sm:px-5 py-2 text-[20px] md:text-[30px] text-white text-start font-bold select-none">
          Character Details
        </h3>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">
            teste{data.name}
          </dd>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">
            teste{data.name}
          </dd>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">
            teste{data.name}
          </dd>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">
            teste{data.name}
          </dd>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">
            teste{data.name}
          </dd>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">
            teste{data.name}
          </dd>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">
            teste{data.name}
          </dd>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">
            teste{data.name}
          </dd>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">
            teste{data.name}
          </dd>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">
            teste{data.name}
          </dd>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">
            teste{data.name}
          </dd>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">
            teste{data.name}
          </dd>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">
            teste{data.name}
          </dd>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">
            teste{data.name}
          </dd>
        </div>
      </div>
    </div>
  );

  const starshipDetail = (
    <div className="fadein grid grid-rows-4 grid-cols-3 overflow-hidden bg-semiblack bg-opacity-95 shadow-xl shadow-semiblack rounded-lg mb-[15vh] mt-10 min-h-[500px]">
      <div
        onClick={() => console.log(data)}
        id="BG"
        className="row-span-1 sm:row-span-full sm:h-full bg-starshipdetail sm:bg-starshipdetail-sm lg:bg-starshipdetail-lg bg-no-repeat bg-bottom sm:bg-left bg-cover col-span-3 sm:col-span-1 sm:order-3"
      />

      <div className="flex flex-col row-span-3 sm:row-span-full col-span-full sm:col-span-2 overflow-hidden">
        <h3 className="text-staryellow underline px-3 sm:px-5 py-2 text-[20px] md:text-[30px] text-white text-start font-bold select-none">
          Starship Details
        </h3>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">Manufacturer</dd>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">
            teste{data.name}
          </dd>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">
            teste{data.name}
          </dd>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">
            teste{data.name}
          </dd>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">
            teste{data.name}
          </dd>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">
            teste{data.name}
          </dd>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">
            teste{data.name}
          </dd>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">
            teste{data.name}
          </dd>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">
            teste{data.name}
          </dd>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">
            teste{data.name}
          </dd>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">
            teste{data.name}
          </dd>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">
            teste{data.name}
          </dd>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">
            teste{data.name}
          </dd>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">
            teste{data.name}
          </dd>
        </div>
        <div className="px-3 py-2 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow text-xl text-start">
            teste{data.name}
          </dd>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {characterDetail}
      {starshipDetail}
    </>
  );
}
