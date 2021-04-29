import DefualtLayout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const seasons = [
  { id: "season 1", link: "season-1" },
  { id: "season 2", link: "season-2" },
  { id: "season 3", link: "season-3" },
  { id: "season 4", link: "season-4" },
  { id: "season 5", link: "season-5" },
  { id: "season 6", link: "season-6" },
];
export default function AllSonsons() {
  const router = useRouter();
  return (
    <div className="container  max-w-full">
      <div className="grid sm:grid-cols-1 md:grid-cols-2  gap-1 md:gap-6 lg:gap-8 content-center">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  xl:grid-cols-3 gap-2 lg:gap-3 justify-evenly">
            {seasons.map((season, index) => (
              <Link href={`/${router.query.series}/${season.link}`} key={index}>
                <a className="w-full p-2 border	border-dashed hover:border-solid	border-purple-300 rounded">
                  <div>{season.id}</div>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className=" order-first md:order-last">
          <div className="border hover:border-purple-700 rounded border-dashed p-1  md:w-2/4">
            <div className="relative w-full h-80 md:h-96 ">
              <Image
                className="rounded"
                src="/copy-ninja.jpeg"
                alt="copy ninja"
                layout="fill"
              />
              <div
                className="absolute bottom-2.5 border border-gray-700 border-dashed border-r-0 border-l-0
             p-5 text-white bg-gray-800 w-full bg-opacity-70"
              >
                {router.query.series}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
AllSonsons.Layout = DefualtLayout;
