import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PlaylistDetail = () => {
  const playlistDetail = useSelector((state) => state.playlistDetail);
  const navigate = useNavigate();
  return (
    <div className="container">
      <h3 className="title">Courses Detail</h3>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {playlistDetail?.map((data, index) => (
          <div className="detail-card-xl">
            <img src={data?.url} />
            <p>{data?.title}</p>
            <p>{data?.description}</p>
            <button
              className="btn"
              onClick={() => {
                navigate("/playlist");
              }}
            >
              Playlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistDetail;
