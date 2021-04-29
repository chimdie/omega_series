import DefualtLayout, { siteTitle } from "../../components/Layout";
import Image from "next/image";
import faker from "faker";

const episodes = [
  {
    id: "episode 1",
  },
  {
    id: "episode 2",
  },
  {
    id: "episode 3",
  },
  {
    id: "episode 4",
  },
  {
    id: "episode 5",
  },
  {
    id: "episode 6",
  },
];

export default function sea() {
  return (
    <div className="container max-w-full">
      <div className="grid grid-cols-1 gap-x-32 sm:grid-cols-3">
        <div className="col-span-2">
          <div className="relative w-fill h-40 md:h-96 rounded shadow-md">
            <Image
              className="rounded"
              src="/copy-ninja.jpeg"
              alt="copy ninja"
              layout="fill"
            />
          </div>
          <div className="font-bold capitalize text-center leading-4 text-gray-700 mt-3">
            {faker.lorem.word()}
          </div>
          <div className="font-normal leading-6 text-gray-400 mt-3 p-3">
            {faker.lorem.paragraphs()}
          </div>
        </div>

        <div>
          <div className="text-center font-bold text-gray-700">
            All Episodes In The Season
          </div>
          <div>
            {episodes.map((episode, index) => (
              <div
                key={index}
                className="border	border-dashed hover:border-solid	border-purple-300 rounded p-2 mb-4"
              >
                <div className="font-bold text-lg capitalize leading-4 text-gray-700">
                  {episode.id}
                </div>
                <div className="font-normal text-gray-400">
                  {faker.lorem.words()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
sea.Layout = DefualtLayout;
