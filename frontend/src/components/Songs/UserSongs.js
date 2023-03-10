import { useDispatch, useSelector } from "react-redux";
import { getUserSongs } from "../../store/songs";
import { useState } from 'react'
import { useEffect }  from 'react'
import { useHistory } from 'react-router-dom'
import SingleSong from "./SingleSong";

const UserSongs = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const songs = useSelector((state) => state.songs);
  const songsArr = Object.values(songs);
  console.log(songsArr, 'SONGS ARRAY');
  const userSongsArr = songsArr.filter(song => {
    return song.userId === currentUser.id
  })
console.log(userSongsArr, "USERS SONGS ARRAY")

  useEffect(() => {
    dispatch(getUserSongs());
  }, [dispatch]);

  const handleNew = (e) => {
    e.preventDefault()
    if (!currentUser) return window.alert("Please Login");
    history.push(`/songs/new`);
  };

  return (
    <div>
      <h1>My Songs</h1>
      <button onClick={handleNew}>Add Song</button>
      <ul className="song-list">
        {userSongsArr.map((song) => (
          <SingleSong song={song} key={song.id} currentUser={currentUser} />
        ))}
      </ul>
    </div>
  );
};

export default UserSongs
