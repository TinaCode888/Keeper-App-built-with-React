import React, {useState} from "react";
import Zoom from "@mui/material/Zoom";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });

  function expand(){
    setIsExpanded(true);
  }

  function handleChange(event){
    const {name, value} = event.target;

    setNewNote((prev) => {
      return {
        ...prev,
        [name]: value
      }
    });
  }

  function handleSubmit(event){
    props.addNewNote(newNote);
    setNewNote({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        {isExpanded && (
          <input name="title" onChange={handleChange} value={newNote.title} placeholder="Title" /> 
        )}
        <textarea name="content" onChange={handleChange} onClick={expand} value={newNote.content} placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
        <Zoom in={isExpanded}>
          <button onClick={handleSubmit}>
            <AddIcon/>
          </button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
