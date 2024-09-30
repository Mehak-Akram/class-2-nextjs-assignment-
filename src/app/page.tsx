import Navbar from "./components/header";
import Image from "next/image";
import profile from "../../image/profile.jpeg";

export default function hi() {
  return (
    <div>
      <Navbar />
      <div className="first">
        <div className="leftSection">
          Hi, it's <span className="brown">Mehak</span>
          <div>
            and I am passionate
            <span className="brown">
              <br />
              Front-end Developer
            </span>
          </div>
          <p>
            As a front-end developer with a strong foundation in{" "}
            <span className="brown">HTML</span>,{" "}
            <span className="brown">CSS</span>,
            <br />
            <span className="brown">JavaScript</span>, and{" "}
            <span className="brown">TypeScript</span>with a focus on{" "}
            <span className="brown">Nextjs</span> and{" "}
            <span className="brown">Tailwind CSS</span>,
            <br /> I focus on writing clean, efficient, and maintainable code
          </p>
        </div>
        <div className="rightSection">
          <Image src={profile} alt="profile-pic"></Image>
        </div>
      </div>
    </div>
  );
}
