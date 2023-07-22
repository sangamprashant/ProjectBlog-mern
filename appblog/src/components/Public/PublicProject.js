import React, { useState , useRef, useEffect} from "react";

function PublicProject() {
  const [showAllWeb, setShowAllWeb] = useState(false);
  const [showAllAndroid, setShowAllAndroid] = useState(false);
  const [isInitiallyRendered, setIsInitiallyRendered] = useState(false);

  const toggleShowAllWeb = () => {
    setIsInitiallyRendered(true)
    setShowAllWeb((prevState) => !prevState);
  };

  const toggleShowAllAndroid = () => {
    setIsInitiallyRendered(true)
    setShowAllAndroid((prevState) => !prevState);
  };

  const androidRef = useRef(null);
  const webRef = useRef(null);

  useEffect(() => {
    if (isInitiallyRendered&&!showAllAndroid && androidRef.current) {
      androidRef.current.scrollIntoView({ behavior: "smooth" });
      setIsInitiallyRendered(false)
    }
  }, [showAllAndroid]);

  useEffect(() => {
    if (isInitiallyRendered&&!showAllWeb && webRef.current) {
      webRef.current.scrollIntoView({ behavior: "smooth" });
      setIsInitiallyRendered(false)
    }
  }, [showAllWeb]);

  const webData = [
    { name: "Web Project 1", email: "web.project1@example.com" },
    {
      name: "Web Project 2",
      email: "web.project2@example.comdf dfb erb erb er ",
    },
    { name: "Web Project 3", email: "web.project3@example.com" },
    { name: "Web Project 4", email: "web.project4@example.com" },
    { name: "Web Project 4", email: "web.project4@example.com" },
    { name: "Web Project 4", email: "web.project4@example.com" },
    { name: "Web Project 4", email: "web.project4@example.com" },
    { name: "Web Project 4", email: "web.project4@example.com" },
    // Add other data for web cards here
  ];

  const androidData = [
    { name: "Android Project 2", email: "android.project2@example.com" },
    {
      name: "Android Project 3",
      email: "android.project3@example.com sgt er er",
    },
    {
      name: "Android Project 3",
      email: "android.project3@example.com sgt er er",
    },
    {
      name: "Android Project 3",
      email: "android.project3@example.com sgt er er",
    },
    // Add other data for Android cards here
  ];

  return (
    <div className=" ">
      <div className="card p-3 my-2" ref={androidRef}>
        <div className="d-flex justify-content-between align-items-center">
          <h3 style={{ whiteSpace: "nowrap" }}>
            <i className="fa fa-briefcase"></i> Android Projects
          </h3>
          <h3>{androidData.length}</h3>
        </div>

        <div className="row">
          {androidData
            .slice(0, showAllAndroid ? androidData.length : 3)
            .map((item, index) => (
              <div className="col-xl-4 col-lg-6 mb-4" key={index}>
                <div className="card">
                  <div className="card-body">
                    <div className=" align-items-center">
                      <img
                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                        alt=""
                        style={{ width: "200px", height: "200px" }}
                      />
                      <div className="">
                        <p className="fw-bold mb-1">{item.name}</p>
                        <p className="text-muted mb-0">{item.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {androidData.length > 3 && (
          <div className="text-center">
            <button className="btn btn-primary" onClick={toggleShowAllAndroid}>
              {showAllAndroid ? "See Less" : "See More"}
            </button>
          </div>
        )}
      </div>
      <div className="card p-3 my-2" ref={webRef}>
        <div className="d-flex justify-content-between align-items-center">
          <h3 style={{ whiteSpace: "nowrap" }}>
            <i className="fa fa-briefcase"></i> Web Projects
          </h3>
          <h3>{webData.length}</h3>
        </div>
        <div className="row">
          {webData
            .slice(0, showAllWeb ? webData.length : 3)
            .map((item, index) => (
              <div className="col-xl-4 col-lg-6 mb-4" key={index}>
                <div className="card">
                  <div className="card-body">
                    <div className="d-grid align-items-center justify-content-center">
                      <img
                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                        alt=""
                        style={{ width: "200px", height: "200px" }}
                        className=""
                      />
                      <div className="">
                        <p className="fw-bold mb-1">{item.name}</p>
                        <p className="text-muted mb-0">{item.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {androidData.length > 3 && (
          <div className="text-center">
            <button className="btn btn-primary" onClick={toggleShowAllWeb}>
              {showAllAndroid ? "See Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PublicProject;
