import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "../../store/songs";
import React, { useState, useEffect } from "react";
import "./songs.css";
import SingleSong from "./SingleSong";
import { NavLink, Link, useHistory } from "react-router-dom";
import AllComments from "../Comments/AllComments";

const SongsList = () => {
  const dispatch = useDispatch();
const history = useHistory()
  //   add code if currUser is truthy
  const currentUser = useSelector((state) => state.session.user);

  const songs = useSelector((state) => state.songs);
  const songsArr = Object.values(songs);


  // const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);

const handleNew = (e) => {
  e.preventDefault()
  if (!currentUser) return window.alert("Please Login");
  history.push(`/songs/new`);
};



  return (
    <div className="song-comments">
      <div className="comments">


        <ul className="song-list">
          {currentUser &&
          <div>
          <div><button onClick={handleNew}>Add Song</button></div>
          <div className="songs">

            {songsArr.map((song) => (
            <SingleSong song={song} key={song.id} currentUser={currentUser} />
          ))}
          </div>
          </div>}
          {!currentUser && <div>Please login before viewing songs</div>}
        </ul>

      </div>

      {/* <Link to="/songs/new">Add Song</Link> */}
    </div>
  );
};

export default SongsList;
