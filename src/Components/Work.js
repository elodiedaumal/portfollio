import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { portfolio } from "../utils/utils";

const Work = () => {
  const [filteredPortfolio, setFilteredPortfolio] = useState(portfolio);
  const [framework, setFramework] = useState("All");
  const [styling, setStyling] = useState("All");
  const [backend, setBackend] = useState("All");

  useEffect(() => {
    filterProjects();
  }, [framework, styling, backend]);

  const filterProjects = () => {
    let filtered = portfolio;

    if (framework !== "All") {
      filtered = filtered.filter((item) => item.tools.includes(framework));
    }
    if (styling !== "All") {
      filtered = filtered.filter((item) => item.tools.includes(styling));
    }
    if (backend !== "All") {
      filtered = filtered.filter((item) => item.tools.includes(backend));
    }

    setFilteredPortfolio(filtered);
  };
  return (
    <section
      id="portfolio"
      className=" flex flex-col gap-5 max-w-screen-xl p-5 md:px-10 mx-auto "
    >
      <h2 className="text-4xl text-left md:col-span-3 lg:col-span-4 sm:col-span-2">
        My <span className="text-sky-500">Work</span>
      </h2>
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="flex flex-col gap-3 md:flex-row lg:justify-between lg:w-full max-w-screen-lg  px-5">
          <div>
            <label className="font-semibold">Framework: </label>
            <select
              className="text-center py-1 rounded dark:bg-gray-800 "
              value={framework}
              onChange={(e) => setFramework(e.target.value)}
            >
              <option value="All">All</option>
              <option value="React">React</option>
              <option value="Next.js">Next.js</option>
              <option value="Wordpress">Wordpress</option>
            </select>
          </div>
          <div>
            <label className="font-semibold">Styling: </label>
            <select
              className="text-center py-1 rounded dark:bg-gray-800"
              value={styling}
              onChange={(e) => setStyling(e.target.value)}
            >
              <option value="All">All</option>
              <option value="CSS">CSS</option>
              <option value="Styled Components">Styled Components</option>
              <option value="Tailwind CSS">Tailwind CSS</option>
            </select>
          </div>
          <div>
            <label className="font-semibold">Backend: </label>
            <select
              className="text-center py-1 rounded dark:bg-gray-800"
              value={backend}
              onChange={(e) => setBackend(e.target.value)}
            >
              <option value="All">All</option>
              <option value="API">API</option>
              <option value="MongoDB">MongoDB</option>
            </select>
          </div>
        </div>
        <div className="md:pb-20 pb-10 grid   lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2  gap-10 md:gap-7  max-w-screen-xl justify-center mx-auto">
          {filteredPortfolio.map((app) => (
            <div
              key={app.id}
              className="hover:bg-gray-900/75 hover:h-full transition duration-500 hover:w-full hover:scale-105 relative "
            >
              <img
                src={app.image}
                alt={app.name}
                className="shadow-xl cursor-pointer dark:shadow-slate-50 dark:shadow-sm "
              />
              <div className="opacity-0 hover:opacity-100">
                <div className="grid gap-3 justify-items-center  absolute top-0 left-0 h-full w-full content-center bg-slate-900/80">
                  <p className="px-5 text-white font-bold">
                    {app.name} web with:
                    <ul className="font-thin">
                      {app.tools.map((tools, index) => (
                        <li key={index}>- {tools}</li>
                      ))}
                    </ul>
                  </p>
                  <Link
                    to={app.linkLive}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="text-sm bg-purple-600 text-white rounded-md py-1 w-28 h-10 hover:bg-gray-900/50">
                      See Live
                    </button>
                  </Link>
                  {app.linkGithub && (
                    <Link
                      to={app.linkGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="text-sm bg-purple-100  rounded-md py-1 w-28 h-10 hover:bg-white/50 text-gray-900">
                        View Code
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
