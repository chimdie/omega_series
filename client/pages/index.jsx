import DefualtLayout, { siteTitle } from "./components/Layout";
import Link from "next/link";
const serises = [
  { title: "originals" },
  { title: "avater" },
  { title: "wandavision" },
  { title: "naruto" },
  { title: "one pices" },
];
export default function Home() {
  return (
    <div className="container mx-auto max-w-full">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-4 lg:gap-8 justify-evenly">
        {serises.map((serise, index) => (
          <Link href={`/${serise.title}`} key={index}>
            <div className="w-full p-2 border	border-dashed	border-purple-300 hover:border-solid rounded ">
              <div className="">
                <img
                  className="w-full h-60 rounded "
                  src="https://tailwindcss.com/_next/static/media/beach-house.dc0f86781422bcb8f89e64d49cd7adf6.jpg"
                  alt=""
                />
              </div>
              <div className="text-2xl font-light	truncate shadow-inner">
                {serise.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
Home.Layout = DefualtLayout;
