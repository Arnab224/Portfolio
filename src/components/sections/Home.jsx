import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Arnab Mandal
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Enthusiastic and detail-oriented Full Stack Developer with solid knowledge of JavaScript, React.js, Node.js, Express.js,
and MongoDB. Recently completed hands-on projects involving user authentication, CRUD operations, REST APIs, and
responsive UI development using modern web technologies like Tailwind CSS and Bootstrap.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://drive.google.com/file/d/17uEJdo76aMQ4WhPIt-Y2ei_zlG8vTz1g/view?usp=sharing"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-black hover:text-blue-500 "
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10 "
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
