import Typewriter from "typewriter-effect";
import "../App.css";

function Type() {
  return (
    <div className="homeGreet">
      <h2 className="homeGreetWelcome">Welcome! 👋🏻</h2>
      <h2 className="homeGreetStatic">
        I&apos;m{" "}
        <span className="typewriter-container">
          <Typewriter
            options={{
              strings: [
                "a Web Developer",
                "a Data Scientist",
                "a Project Manager",
                "a Facilitator & Speaker",
                "an Advocate",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 100,
            }}
          />
        </span>
      </h2>
    </div>
  );
}

export default Type;
