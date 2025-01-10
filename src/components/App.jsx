import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [addNotes, setAddNotes] = useState([]);

  function handleAddNotes(newNote){
    setAddNotes((prevNotes) => {
      return [...prevNotes, newNote]
    });
  }

  function handleDeleteNote(id){
    const delNote = addNotes.filter((item, index) => index !== id);
    setAddNotes(delNote);
  }

  return (
    <div>
      <Header />
      <CreateArea addNewNote={handleAddNotes} />

      {addNotes.map((note, index) => (
        <Note 
        key={index} 
        id={index} 
        title={note.title} 
        content={note.content}
        deleteNote={handleDeleteNote} 
        />
        ))}
      
      <Footer />
    </div>
  );
}

export default App;
