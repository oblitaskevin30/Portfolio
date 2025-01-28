import { useLocation } from 'react-router-dom';

export const ProjectsDetails = () => {
  const location = useLocation();
  const { project } = location.state || {}; 

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white bg-gray-900 px-6 pt-20">
        <p>No project data available.</p>
      </div>
    );
  }

  const { imgSrc, title, description, tags, projectLinkFront, projectLinkBack } = project;

  return (
    <div className="flex items-center justify-center min-h-screen  text-white px-6 pt-20"> 
      <div className="max-w-3xl w-full bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <img src={imgSrc} alt={title} className="w-full h-auto mb-4 rounded-md" />
        <p className="mb-4">{description || "No description available for this project."}</p>
        <div className="mb-4">
          <strong>Tags:</strong>
          <ul className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-gray-700 text-sm py-1 px-2 rounded-lg"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <a
          href={projectLinkFront}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mx-4 my-2 rounded transition"
        >
          View Front Code
        </a>
        <a
          href={projectLinkBack}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-700 hover:bg-blue-600 text-white py-2 px-4 mx-4 my-2 rounded transition"
        >
          View Back Code
        </a>
        <a
          href="/"
          rel="noopener noreferrer"
          className="inline-block bg-green-800 hover:bg-blue-600 text-white py-2 px-4 mx-4 my-2 rounded transition"
        >
          Back to projects
        </a>
      </div>
    </div>
  );
};
