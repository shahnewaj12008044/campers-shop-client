
import image1 from "./../../../assets/pictures/team/ceo.jpg";
import image2 from "./../../../assets/pictures/team/cfo.jpg";
import image3 from "./../../../assets/pictures/team/Hro.jpg";
import { MdEmail } from "react-icons/md";

const Team = () => {
  const data = [
    {
      name: "Alice Johnson",
      post: "Software Engineer",
      image: image1,
    },
    {
      name: "Bob Smith",
      post: "Project Manager",
      image: image2,
    },
    {
      name: "Charlie Brown",
      post: "UX Designer",
      image: image3,
    },
  ];

  return (
    <div className="md:container mx-auto my-4 px-8">
      <div className="border-l-4  border-l-lime-400 px-4 py-4 bg-white rounded-lg w-full sm:w-3/4 md:w-1/2 mb-4">
        <h2 className="text-xs sm:text-sm md:text-2xl font-bold text-[#020C29] mb-4">
          Team Members
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2">
        {data.map((item) => (
          <div className="w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative flex justify-center mt-6">
              <img
                src={item.image}
                alt={`${item.name}'s photo`}
                className="w-32 h-32 rounded-full border-4 border-gray-300 object-cover hover:border-[#020C29] transition-colors duration-300"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-gray-500">{item.post}</p>
              <div className="mt-4">
                <a
                  href="https://www.gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-2 btn-primary rounded-md gap-1 flex items-center">
                    <MdEmail className="size-6" />
                    Send Email
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
