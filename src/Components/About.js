import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-screen-xl mx-auto  p-5 leading-relaxed md:px-10 md:mb-20 dark:bg-gray-900 dark:text-zinc-50 "
    >
      <h2 className="text-4xl  py-5">
        About <span className="text-sky-500">Me</span>
      </h2>
      <p className="mb-2">
        I'm a <strong>junior full-stack developer</strong> with a varied
        background. Before diving into coding, I worked with{" "}
        <strong>WordPress</strong>, designing a good number of websites and
        logos. Before that, I was in the R&D field as a{" "}
        <strong>chemistry technician</strong>, focusing on glass chemistry. Both
        experiences taught me the importance of details and{" "}
        <strong>problem-solving.</strong>
      </p>
      <p className="mb-2">
        While I started with a <strong>keen interest in frontend</strong> – the
        visual and interactive parts of websites – I've since grown to
        appreciate the mechanics of the <strong>backend</strong> too. Both
        aspects are like two sides of a coin, and knowing them makes me better
        at creating complete solutions. I've gotten hands-on with tools like
        <strong>React.js, Node.js, and MySQL, among others.</strong>
      </p>

      <p>
        I aim for clear, <strong>effective code</strong>, always trying to stick
        to best practices. I've also had some experience with{" "}
        <strong>Gitflow and Agile</strong>
        methods. Teamwork's great – I've found that good solutions often come
        from <strong>good collaboration.</strong> I'm looking forward to diving
        deeper into full-stack development and collaborating on new challenges.
      </p>
    </section>
  );
};

export default About;
