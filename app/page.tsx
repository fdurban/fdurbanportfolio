import Image from "next/image";
import Grid from "@/components/Grid";
import TypeWriter from "@/components/TypeWriter";
import Logos from "@/components/Logos";
import ContactForm from "@/components/ContactForm";
import MainText from "@/components/ui/MainText/MainText";
export default function Home() {
  return (
    <>
      <div className="bg-anti_flash_white text-vanilla p-4 content-center">
        <section className="flex flex-col md:flex-row md:items-center justify-around h-screen">
          <article className="lg:w-1/3">
            <TypeWriter></TypeWriter>
            <p className="text-dark_green lg:text-2xl">
              I&apos;m a passionate full-stack developer with expertise in
              building modern, responsive web applications. I love crafting
              intuitive user experiences and solving complex problems.
            </p>
          </article>
          <Image
            src="/IMG_8108.JPG"
            width={428}
            height={648}
            alt="Photo of Fernando Durban"
            className="rounded-xl"
          />
        </section>
        <section className="mt-12 min-h-screen" id="projects">
          <MainText>Projects</MainText>
          <Grid />
        </section>
        <section id="skills">
          <MainText>Skills</MainText>
          <div className="flex justify-between flex-wrap gap-10 xl: mx-8">
            <Logos></Logos>
          </div>
        </section>
        <section id="aboutme">
          <MainText>About Me</MainText>
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-lg lg:text-xl text-penn_blue text-center leading-relaxed">
              Hi, I&apos;m Fernando Durban, a passionate technology enthusiast
              and web developer. I completed my Bachelor&apos;s degree in
              Business Administration and Management at IE University in Madrid.
              Following my passion for technology, I ventured into a new career
              path by joining the Ironhack Bootcamp in Madrid, where I
              specialized in Full Stack development. During my time at Ironhack,
              I honed my skills in web development using the MERN stack
              (MongoDB, Express.js, React.js, and Node.js), enabling me to
              create comprehensive projects from backend to frontend.
            </p>
            <p className="text-lg lg:text-xl text-penn_blue text-center my-6 leading-relaxed">
              Feel free to connect with me on{" "}
              <a
                href="https://www.linkedin.com/in/fernando-durban-brizio-3861741b7/"
                className="text-xanthous underline"
              >
                Linkedin
              </a>{" "}
              to discuss potential collaborations. Looking forward to connecting
              with you soon!
            </p>
          </div>
        </section>
        <section id="contact">
          <ContactForm></ContactForm>
        </section>
      </div>
    </>
  );
}
