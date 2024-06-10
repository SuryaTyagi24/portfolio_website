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
          Hello!, I am Suryadev Tyagi, a dedicated Frontend Developer with 2 years of experience in web development. 
          My area of expertise lies in the creation of dynamic and responsive user interfaces utilizing HTML, CSS, JavaScript, jQuery, and contemporary frameworks such as React and Node.js.
           Proficiency in Data Structures and Algorithms using Java allows me to efficiently solve intricate problems. Furthermore, my expertise in Database Management Systems (DBMS) ensures the establishment of robust and optimized data solutions. 
          I am wholeheartedly committed to continuous learning and the delivery of high-quality work that enhances user experiences.
        </p>

        <br />

        <p className="text-xl">
          
        </p>
      </div>
    </div>
  );
};

export default About;