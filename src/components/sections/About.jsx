import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "TailwindCSS",
    "JavaScript",
    "JQuery",
    "React",
  ];

  const backendSkills = ["Node.js", "SQL", "PostgreSQl", "API", "Express.js", "MongoDB"];

  const tools =["Git", "Github", "Figma", "kibana", "Postman"]

  const platform = ["Mac", "Windows", "Linux"]

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>


              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>


              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Platform</h3>
                <div className="flex flex-wrap gap-2">
                  {platform.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>


            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-8">

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.Tech in Computer Science & Engineering </strong> - Lovely Professional University
                  (2017-2021)
                </li>
              </ul>
            </div>

            {/* <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Product Support Engineer {" "}
                  </h4>
                  <h4>
                  Signzy (Deployed as a Vendor via ResourceDekho) (2023 - Present)
                  </h4>

                  <div className="p-4">
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                Provided advanced technical support and remediation for over 500 software-related issues reported by customers,
                achieving a 95% issue resolution rate within SLA timeframes.
                  </li>
                  <li>
                  Led and mentored a team of product support engineers, ensuring timely and effective resolution of technical
                  issues.
                  </li>
                  <li>
                  Managed escalations, troubleshooting complex product-related problems, and providing advanced technical guidance.
                  </li>

                  <li>
                  Collaborated with development, QA, and product teams to identify and resolve recurring issues, enhancing
                  product reliability.
                </li>
              </ul>
              </div>

                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Intern at DEF Startups (2019){" "}
                  </h4>
                  <p>
                    Assisted in building front-end components and integration
                    REST APIs
                  </p>
                </div>
              </div>
            </div> */}
          </div>

          <div className="gap-6 mt-8">


          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
          
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              
              <div className="grid grid-cols-1 ">
              <div className=" space-y-4 text-gray-300">
                <div className="hover:-translate-y-1 transition-all">
                  <h4 className="font-semibold" >
                    {" "}
                    Product Support Engineer <span className=" md:ml-85 text-right">(2023 - Present)</span>
                  </h4>
                  <h4 >
            
                  Signzy (Deployed as a Vendor via ResourceDekho)
                  </h4>

                  <div className="p-5 mb-4">
                          <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                            Provided advanced technical support and remediation for over 500 software-related issues reported by customers,
                            achieving a 95% issue resolution rate within SLA timeframes.
                              </li>
                              <li>
                              Led and mentored a team of product support engineers, ensuring timely and effective resolution of technical
                              issues.
                              </li>
                              <li>
                              Managed escalations, troubleshooting complex product-related problems, and providing advanced technical guidance.
                              </li>

                              <li>
                              Collaborated with development, QA, and product teams to identify and resolve recurring issues, enhancing
                              product reliability.
                            </li>
                              </ul>
                      </div>

                  </div>

                  </div>

                  <div className=" space-y-4 text-gray-300">
                <div className="hover:-translate-y-1 transition-all">
                  <h4 className="font-semibold" >
                    {" "}
                    Programmer Analyst Tainee <span className=" md:ml-85 text-right">(2021 - 2022)</span>
                  </h4>
                  <h4 >
            
                  Cognizant
                  </h4>

                  <div className="p-5">
                          <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                            Develop, test, and maintain software applications as per project requirements.
                            </li>
                            <li>
                            Participate in coding, debugging, and troubleshooting software issues.
                            </li>

<li>
Participated in user acceptance tests of new software releases, identifying and flagging 50+ critical bugs and
usability issues.
</li>
<li>
Assisted in the creation of user documentation for a range of software products, boosting user self-service
capabilities by 25%.
                            </li>
                              </ul>
                      </div>

                  </div>

                  </div>
              
            </div> 
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
