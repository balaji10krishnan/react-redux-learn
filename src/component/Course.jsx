import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const courseDetail = useSelector((state) => state.courseDetail);
  const navigate = useNavigate();
  return (
    <div className="container">
      <h3 className="title">Courses Detail</h3>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <div className="detail-card-xl">
          <img src={courseDetail?.url} />
          <p>{courseDetail?.title}</p>
          <p>{courseDetail?.description}</p>
          <button
            className="btn"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
