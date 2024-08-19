import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCourseDetail } from "../redux/slice/courseDetailSlice";
import { setPlaylistDetail } from "../redux/slice/playlistDetailSlice";

const Playlists = () => {
  const playlists = useSelector((state) => state.playlists);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCourseDetail = (data) => {
    dispatch(setPlaylistDetail(data?.courses));
    navigate("/playlistDetail");
  };
  return (
    <>
      <div className="container">
        <h3 className="title">Playlists</h3>
        <div className="flex-wrap">
          {playlists.map((item, index) => (
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
                  Playlist
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Playlists;
