import { jobOpeningData } from "../data/jobdata";

const ListSection = () => {
  console.log("length", jobOpeningData);
  return (
    <div>
      <h1 className="font-bold text-center text-2xl my-5 uppercase">
        React job openings
      </h1>
      <div id="container" className="grid grid-cols-3">
        {jobOpeningData.map((jobData) => {
          return (
            <JobCard
              jobrole={jobData.job}
              company={jobData.company}
              skills={jobData.skills}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListSection;

function JobCard({ jobrole, company, skills }) {
  return (
    <div
      id="card1"
      className="w-11/12 my-3 text-white rounded-xl p-2 mx-auto bg-blue-600 "
    >
      <h3 className="font-bold text-2xl">{jobrole}</h3>
      <p>{company}</p>
      <ul className="flex items-center mt-2 gap-x-4">
        {skills.map((skill) => (
          <li className="p-1 bg-blue-800 rounded-xl ">{skill}</li>
        ))}
      </ul>
      <button className="bg-green-600 mt-5 px-8 py-2 rounded-xl">Apply</button>
    </div>
  );
}
