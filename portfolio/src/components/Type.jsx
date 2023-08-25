import Typewriter from "typewriter-effect";
import "../App.css"; // Assuming you have a CSS file for styling

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
                "Xin Yi Li",
                "a Web Developer",
                "a UX/UI Designer",
                "a Data Scientist",
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
