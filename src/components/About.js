import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Anis, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. My background is Hospitality and
              Management and for the last 12 years I worked in Local and
              International Hospitality Properties . I have been looking for a
              new direction and the challenges of 2020 have provided the
              opportunity for change. Since starting of 2020 I have fully
              submerged myself into study of the Full Stack Web Development
              Courses like freecode Camp, team treehouse Frontend web
              Development, Udemy Complet web Development course and Coursera.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
