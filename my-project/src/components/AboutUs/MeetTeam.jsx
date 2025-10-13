import React from "react";
import member1 from "../../assets/meetteam.jpg";
import member2 from "../../assets/meetteam.jpg";
import member3 from "../../assets/meetteam.jpg";
import member4 from "../../assets/meetteam.jpg";

const MeetTeam = () => {
  const team = [
    { name: "Amit Sharma", role: "Project Manager", image: member1 },
    { name: "Neha Patel", role: "UI/UX Designer", image: member2 },
    { name: "Rahul Mehta", role: "Frontend Developer", image: member3 },
    { name: "Sneha Kapoor", role: "Backend Engineer", image: member4 },
    { name: "Amit Sharma", role: "Project Manager", image: member1 },
    { name: "Neha Patel", role: "UI/UX Designer", image: member2 },
    { name: "Rahul Mehta", role: "Frontend Developer", image: member3 },
    { name: "Sneha Kapoor", role: "Backend Engineer", image: member4 },
  ];

  return (
    <div className="w-full bg-white dark:bg-gray-900 py-12">
      <h2 className="text-4xl font-semibold text-center text-gray-800 dark:text-white mb-8">
        Meet Our <span className="text-[#EE2C3C]">Team</span>
      </h2>

      {/* Marquee Section */}
      <div className="overflow-hidden mt-12">
        <div className="flex animate-marquee">
          {[...team, ...team].map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg border-4 border-[#EE2C3C]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-gray-800 dark:text-white text-center">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Style */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            display: flex;
            animation: marquee 25s linear infinite;
          }

          /* Remove gaps completely between cards */
          .animate-marquee > div {
            margin-right: 0;
          }
        `}
      </style>
    </div>
  );
};

export default MeetTeam;
