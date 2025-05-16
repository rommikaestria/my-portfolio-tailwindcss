import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
      </header>
      <section className="mb-10">
        <div className="flex justify-center">
          <div className="w-full md:w-2/3">
            <div className="bg-white rounded-lg shadow-md border-0 p-6">
              <p className="text-lg mb-4">
                Hello! My name is{' '}
                <span className="font-semibold">Rommi Kaestria</span>, and I am
                a EduContent Creator with a passion for Coding. I have 12
                years of experience in House Development, specializing in
                PHP, Python, Javascript, Dart, SQL.
              </p>
              <p className="text-lg mb-4">
                I enjoy solving complex problems, learning new technologies,
                and collaborating with others to create impactful projects. My
                goal is to continuously grow as a professional and contribute
                to meaningful innovations.
              </p>
              <p className="text-lg">
                When I'm not working, I love Watching Movies, listening to
                lofi, watch sports like basketball and football, exploring new
                ideas, and connecting with like-minded individuals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-center mt-12 pt-6 border-t">
        <p>
          Feel free to reach out if you'd like to collaborate or learn more
          about me!
        </p>
      </footer>
    </div>
  );
};

export default About;
