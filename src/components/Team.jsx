import React from 'react';
import teamImage from '../pages/images/team.png'; // Update with your image path

const Team = () => {
  return (
    <section className="flex flex-col items-center justify-center p-6 gap-8">
      <h2 className="text-4xl font-bold text-center ">Our Dedicated Team</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="text-center md:text-left">
          <p className=" text-lg md:text-xl leading-relaxed mb-6 text-gray-600">
            Passionate about unlocking the power of nature, our team is committed to harnessing the potential of medicinal plants. With a focus on innovation and sustainability, we strive to create a healthier world through herbal solutions.
          </p>
        </div>
      </div>
      <img
        src={teamImage}
        alt="Our Team"
        className=" object-cover "
      />
    </section>
  );
};

export default Team;
