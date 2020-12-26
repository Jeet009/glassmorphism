import bruno from "./assets/cyberpunk.png";
function App() {
  return (
    <>
      <div className="background row">
        <div className="bg-left col-md-6"></div>
        <div className="bg-right col-md-6"></div>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="row">
            <div className="col-md-6 card-details">
              <div>
                <h2>Cyberpunk 2077</h2>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known,
                  <br /> is dummy text used in laying out print, graphic or web
                  designs.
                </p>
                <button className="btn btn-custom">Purchase Now</button>
              </div>
            </div>
            <div className="col-md-6 card-img">
              <img src={bruno} className="img-fluid" alt="..." />
            </div>
          </div>
          <footer className="footer">
            <div className="footer-container">
              <span className="fa fa-facebook-square"></span>
              <span className="fa fa-instagram"></span>
              <span className="fa fa-download"></span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
