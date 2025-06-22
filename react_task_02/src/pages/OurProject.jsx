import Button from "../components/Button";
import { projects } from "../data/DataList";

export default function OurProject() {
  return (
    <main className="w-screen p-4 lg:p-8">
      <div className="flex flex-col items-center w-4/5 m-auto p-6">
        <div className="place-self-start mb-6">
          <h1 className="text-gray-500">
            Our <br />
            <span className="font-bold text-4xl text-black">Project</span>
          </h1>
        </div>
        <div>
          <hr className="my-2 text-gray-300" />
          {projects.map((project) => (
            <section
              key={project.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6  bg-gray-100"
            >
              <div>
                <img src={project.src} alt={project.title} key={project.id}/>
              </div>
              <div key={project.id} className="p-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1 md:mb-6 md:my-4">
                    {project.title}
                  </h3>
                </div>
                <div className="md:my-8">
                  <p>{project.text}</p>
                </div>
                <Button label="View More" onClick={() => {}} />
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
