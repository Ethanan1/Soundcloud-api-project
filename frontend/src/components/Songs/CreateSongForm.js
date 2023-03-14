import AddSongForm from './addSongForm';

const CreateSongForm = () => {
  const song = {
    title: '',
    description: '',
    urllink: '',
    previewImage: '',
    albumTitle: ''
  };

  return (
    <AddSongForm song={song} formType="New Song" />
  );
}

export default CreateSongForm;
