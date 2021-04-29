import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import faker from "faker";
import Navbar from "./components/Navbar";

export async function getServerSideProps({ query }) {
  // Fetch data from external API
  var obj = [];
  for (var i = 1; i < 20; i++) {
    obj.push({
      id: i,
      title: faker.lorem.word(),
      description: faker.lorem.paragraph(),
    });
  }
  // Pass data to the page via propsimport Link from "next/link";
  return { props: { obj, search: query.query ? query.query : "" } };
}

export default function Search({ obj, search }) {
  const [searchInput, setSearchInput] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push(`/Search/?query=${searchInput}`);
  };
  const handleChange = (e) => {
    try {
      setSearchInput(e.target.value);
    } catch (err) {
      console.log(err);
    }
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    // console.log("e.keyCode : ", e);

    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };
  useEffect(() => {
    const data = router.query;
    const searchedQuery = data.query;
    if (searchedQuery) {
      setSearchInput(searchedQuery);
    }
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <form
          className="flex items-center justify-center p-5 mt-5"
          onSubmit={handleSubmit}
        >
          <div
            className="flex shadow-lg rounded-lg align-middle items-center	 relative bg-white h-14 
          border border-solid border-purple-100 pl-6"
          >
            {/* <div className="align-middle"> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              role="img"
              className="icon fill-current search-icon"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
              ></path>
            </svg>
            {/* </div> */}
            <div className="pl-6 pr-2">
              <input
                type="text"
                placeholder="Search"
                className="border-0 outline-none h-full px-2"
                name="searchInput"
                value={searchInput}
                onChange={handleChange}
                onKeyPress={handleKeypress}
              />
            </div>
          </div>
        </form>
        {/* <div className="flex items-center justify-center p-5 w-100 h-10">
          <p>{searchInput}</p>
        </div> */}

        <div className=" my-10">
          <h3 className="text-center text-indigo-900 font-extrabold	text-4xl mb-2">
            {search}
          </h3>
          <div className="text-center text-gray-500">
            Search results for {search}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-8 justify-around p-4">
          {obj.map((episode, index) => (
            <div
              className="w-full p-2 border	border-dashed	border-purple-300 rounded "
              key={index}
            >
              <div className="">
                <img
                  className="w-full h-60 rounded "
                  src="https://tailwindcss.com/_next/static/media/beach-house.dc0f86781422bcb8f89e64d49cd7adf6.jpg"
                  alt=""
                />
              </div>
              <div className="text-2xl font-light	truncate shadow-inner">
                {episode.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
