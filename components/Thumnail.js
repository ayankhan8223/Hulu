import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
function Thumnail({ data }) {
  console.log(data);
  const baseUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      {console.log(data)}
      <Image
        layout="responsive"
        src={` ${baseUrl}${data.poster_path}`}
        width={1920}
        height={1080}
      />
      <div>
        <p className="truncate max-w-md p-2">{data.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {data.original_title || data.original_name}
        </h2>
        {/* <p>{`data.media_type? data.first_air_date||release_date <ThumbUpIcon/> :"" } </p> */}
        {data.media_type ? (
          <div className="flex items-center opacity-0 group-hover:opacity-100">
            <p className="mr-3">{data.first_air_date || data.release_date}</p>{" "}
            <h1 className="mr-3">⦿</h1> <ThumbUpIcon className="h-5 mx-2" />{" "}
            {data.vote_average}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Thumnail;
