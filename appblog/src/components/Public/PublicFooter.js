import React, {useEffect} from "react";
import { Link } from "react-router-dom";

function PublicFooter({footer,setFooter,footerContent,setFooterContent,user}) {

    // Inside the fetchProjects function
    const fetchFooterContent = async (id) => {
      try {
        const response = await fetch(`/api/Footercontent/${id}`);
        const data = await response.json();
        setFooterContent(data.content)
      } catch (error) {
        console.error("Error fetching Footer Content:", error);
      }
    };
    // Fetch work experience and education data on component mount
    useEffect(() => {
      fetchFooterContent(user._id);
    }, [user]);
   // Function to fetch the description items from the API
   const fetchfooterData = async () => {
    try {
      const response = await fetch("/api/get/footer");

      if (!response.ok) {
        throw new Error("Failed to fetch description items");
      }

      const data = await response.json();
      setFooter(data);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  // Fetch the description items when the component mounts
  useEffect(() => {
    fetchfooterData();
  }, []);

  return (
    <div>
      <div className="my-3">
        <hr />

        <footer className="text-black text-center text-lg-start">
          <div className="container p-4">
            <div
              className="row"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <div className="col-lg-12 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">Prashant Srivastav</h5>

                <p>
                {footerContent}
                </p>
              </div>
            </div>
          </div>

          <div className="follow">
            <div className="box">
              {footer.map((item, index) => (
                <a key={index} href={item.link} target="_blank">
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
            <Link className="text-black" to="/admin/signin">
              Prashant Srivastav
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default PublicFooter;