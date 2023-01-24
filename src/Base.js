import Header from "./Header";

const Base = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <div className="footer">
        &copy; Coded by:{" "}
        <a href="https://www.linkedin.com/in/amaan-ahmed-a1aa98141/">
          Amaan Ahmed
        </a>
        <span>Gaurav Kumar Jha</span>
        <span>Kartik Gupta</span>
        <div className="copy">&copy; 2023</div>
      </div>
    </>
  );
};

export default Base;
