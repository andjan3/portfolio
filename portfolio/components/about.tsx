import Image from "next/image";
import aboutImg from "../app/assets/about.jpg";

export const About = () => {
  return (
    <section className="w-[100vw] p-16">
      <h3 className="font-text">ABOUT</h3>
      <div className="flex justify-between">
        <div className="w-[50%]">
          <h3 className="big-heading mb-6 mt-6 ">ALWAYS CURIOUS.</h3>
          <div className="flex flew-col flex-wrap gap-4">
            <h3 className="text-[24px] bold">
              A person with a strong interest in usability and an
              accessibility-oriented perspective in the development and creation
              of web applications. The combination of problem-solving skills and
              the ability to craft visually appealing creations is one of the
              key reasons why I chose to specialize in front-end development.{" "}
            </h3>

            <div>
              <h3 className="text-[18px] font-semibold ">Technical</h3>
              <p className="font-paragraph-about">
                Right now you can find me hacking away primarily with Nextjs,
                Storyblok, React and in general anything JavaScript /
                TypeScript, HTML and CSS related.
              </p>

              <h3 className="text-[18px] mt-4 font-semibold">Personal</h3>
              <p className="font-paragraph-about">
                In my spare time, I immerse myself in mini-projects to fuel my
                growth as a front-end developer. Beyond coding, I find joy in
                staying active through activities such as boxing and badminton.
                Additionally, I cherish moments spent catching up with friends
                and family whenever possible.
              </p>
            </div>
          </div>
        </div>
        <Image src={aboutImg} alt="" className="w-[40%] h-[500px]" />
      </div>
      <hr className="w-[5%] border-t-2 border-gray-400 mt-10"></hr>
    </section>
  );
};
