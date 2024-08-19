import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCourseDetail } from "../redux/slice/courseDetailSlice";

const Home = () => {
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCourseDetail = (data) => {
    dispatch(setCourseDetail(data));
    navigate("/course");
  };
  console.log(courses);
  return (
    <>
      <div className="container">
        <h3 className="title">Courses</h3>
        <div className="flex-wrap">
          {courses.map((item, index) => (
            <div key={index} className="detail-card">
              <img src={item.url} />
              <div>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <button
                  className="btn"
                  onClick={() => {
                    handleCourseDetail(item);
                  }}
                >
                  Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
