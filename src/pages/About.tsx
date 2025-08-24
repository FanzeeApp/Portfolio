import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-50">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          I am a passionate <span className="font-semibold">Full Stack Developer</span> 
          with a strong focus on building scalable, secure, and user-friendly web 
          applications. With expertise in <span className="text-blue-600">React.js, 
          Next.js, NestJS, PostgreSQL, and TypeScript</span>, I specialize in turning 
          complex ideas into simple, functional, and elegant digital solutions. 
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Over the years, I have worked on <span className="font-semibold">startup 
          projects, AI-powered platforms, and e-commerce solutions</span>. My 
          approach is always driven by clean code, strong architecture, and modern 
          design principles. I enjoy solving real-world problems with technology 
          and delivering value to businesses and users alike.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Beyond coding, I am passionate about <span className="font-semibold">
          entrepreneurship, innovation, and continuous learning</span>. My goal 
          is to contribute to impactful projects that make a difference and to 
          grow as a professional while helping others succeed.
        </p>
      </div>
    </div>
  );
};

export default React.memo(About);
