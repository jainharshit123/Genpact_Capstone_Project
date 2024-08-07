import React from "react";
import Team from "../components/Team";
import VisionandMission from "../components/VisionandMission";

const sharedClassNames = {
  container: "p-6 bg-white text-gray-800",
  content: "max-w-4xl mx-auto my-12",
  title: "text-4xl md:text-5xl font-extrabold mb-8 text-center text-green-700",
  subtitle: "text-lg md:text-xl leading-relaxed mb-3 text-gray-600",
};

const About = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 mx-auto">
      <div className={sharedClassNames.content}>
        <h1 className={sharedClassNames.title}>
          <span className="inline-block transform hover:scale-105 transition-transform duration-300">
            Management of Medicinal Plants and Herbs
          </span>
        </h1>
        <p className={sharedClassNames.subtitle}>
          Welcome to our project dedicated to the sustainable management of
          medicinal plants and herbs. Our mission is to promote the cultivation,
          conservation, and utilization of these valuable resources.
        </p>
        {/* <p className={sharedClassNames.subtitle}>
          At Management of Medicinal Plants and Herbs, we strive to provide
          comprehensive information, research, and solutions for the
          preservation and responsible use of medicinal flora.
        </p> */}
      </div>

      <div className={sharedClassNames.content}>
        {" "}
        <Team />{" "}
      </div>

      <div className={sharedClassNames.content}>
        <VisionandMission />
      </div>

      <div className={sharedClassNames.content}>
        <div className="p-4 rounded-lg shadow-lg bg-white">
                   {" "}
          <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
                      Join us in our journey to explore the benefits of nature's
            pharmacy and contribute to the sustainable future of
            herbal medicine.          {" "}
          </h2>
                   {" "}
          <form className="space-y-4">
                       {" "}
            <div>
                           {" "}
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                                Name              {" "}
              </label>
                           {" "}
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Your name"
              />
                         {" "}
            </div>
                       {" "}
            <div>
                           {" "}
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                                Email              {" "}
              </label>
                           {" "}
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Your email"
              />
                         {" "}
            </div>
                       {" "}
            <div>
                           {" "}
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                                Message              {" "}
              </label>
                           {" "}
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Your message"
              ></textarea>
                         {" "}
            </div>
                       {" "}
            <div>
                           {" "}
              <button
                type="submit"
                className="mx-auto px-4 py-2 bg-green-600 text-white font-medium text-sm rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                                Send Message              {" "}
              </button>
                         {" "}
            </div>
                     {" "}
          </form>
                 {" "}
        </div>
      </div>
    </div>
  );
};

export default About;
