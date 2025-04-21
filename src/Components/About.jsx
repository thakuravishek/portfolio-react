import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a recent graduate specializing in Responsive Web Design with a
          strong foundation in HTML CSS JavaScript and modern frontend
          frameworks like React my passion for technology allows me to bring a
          fresh perspective to design whether it is crafting a dynamic user
          interface or ensuring a seamless mobile experience I am committed to
          delivering high quality results that enhance user interaction.
        </p>

        <br />

        <p className="text-xl">
          Proficient in creating responsive mobile first designs that improve
          user engagement hands-on experience with version control CSS
          preprocessors and cross browser compatibility. Strong interest in
          leveraging programming and gaming experiences to innovate within web
          development.
        </p>
      </div>
    </div>
  );
};

export default About;
