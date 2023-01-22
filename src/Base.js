import Header from "./Header";

const Base = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <div className="footer">
        &copy; 2021{" "}
        <a href="https://www.linkedin.com/in/amaan-ahmed-a1aa98141/">
          Amaan Ahmed
        </a>
      </div>
    </>
  );
};

export default Base;
