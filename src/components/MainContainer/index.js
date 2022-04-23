import Sidebar from "../Sidebar";
import "./_mainContainer.scss"

const MainContent = () => {
  return (
    <section className="main-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
