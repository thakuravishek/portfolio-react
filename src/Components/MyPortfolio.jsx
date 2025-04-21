import React from "react";
import foodDel from "../Assets/portfolio/food-del.png";
import geminiClone from "../Assets/portfolio/gemini-clone.png";
import dashboard from "../Assets/portfolio/dashboard.png";
import portfolioReact from "../Assets/portfolio/reactPortfolio.png";

const MyPortfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: foodDel,
      codeLink: "https://github.com/thakuravishek/food-del",
      demoLink: "https://food-del-alpha.vercel.app/",
    },
    {
      id: 2,
      src: geminiClone,
      codeLink: "https://github.com/thakuravishek/google-gemini-clone",
      demoLink: "https://google-gemini-clone-rho.vercel.app/",
    },
    {
      id: 3,
      src: dashboard,
      codeLink: "https://github.com/thakuravishek/adminDashboard",
      demoLink: "https://admin-dashboard-kappa-one-88.vercel.app/",
    },
    {
      id: 4,
      src: portfolioReact,
      codeLink: "https://github.com/thakuravishek/portfolio-react",
      demoLink: "https://github.com/thakuravishek/portfolio-react",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
