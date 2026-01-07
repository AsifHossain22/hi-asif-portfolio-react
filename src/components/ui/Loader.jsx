import logo from "../../assets/logos/hi-asif-logo.png";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-inner">
        <img
          src={logo}
          alt="Loading Hi ASIF's Portfolio"
          className="loader-logo"
        />
        <span className="loader-ring" />
      </div>
    </div>
  );
};

export default Loader;
