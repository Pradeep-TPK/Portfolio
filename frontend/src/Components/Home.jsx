import Pic from "../Images/Pic.jpg";
const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <h1>Hi, I'm Pradeep</h1>
        <h3>Jr.Software Engineer</h3>
        <p>
          UI Designer with a passion for designing beautiful and functional user
          experiences. FrontEnd Developer who focuses on writing clean,elegant
          and efficient code.
        </p>
        <button>Hire Me</button>
        <button>Let's Talk</button>
      </div>
      <div className="img">
        <img src={Pic} alt="" height="500px" />
      </div>
    </div>
  );
};

export default Home;
