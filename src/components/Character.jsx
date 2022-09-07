import { useEffect } from "react";
import axios from "axios";

export default function Character({ url }) {
  let data = [];
  useEffect(() => {
    axios.get(url).then((response) => (data = response.data));
  }, []);

  const characterDetail = (
    <div className="fadein grid grid-rows-4 grid-cols-3 overflow-hidden bg-semiblack bg-opacity-95 shadow-xl shadow-semiblack rounded-lg mb-[15vh] mt-10 min-h-[500px] border">
      <div
        id="TITLE"
        className="row-span-1 sm:row-span-full sm:h-full bg-characterdetail sm:bg-characterdetail-sm lg:bg-characterdetail-lg bg-no-repeat bg-center-top sm:bg-left bg-contain sm:bg-cover col-span-3 sm:col-span-1 border sm:order-3"
      ></div>

      <div className="row-span-3 sm:row-span-full col-span-full sm:col-span-2 overflow-hidden border border-red-500">
        <h3 className=" text-[20px] md:text-[30px] text-white text-center w-full h-full select-none">
          Character Details
        </h3>
        <div className="px-4 py-5 grid grid-cols-2 sm:gap-4 sm:px-6 border-b border-darkgray">
          <dt className="text-lg font-bold text-staryellow">Name</dt>
          <dd className="text-staryellow sm:col-span-2 text-xl text-end">
            Gender
          </dd>
        </div>
      </div>
    </div>
  );

  return characterDetail;
}
