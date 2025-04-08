import { useState, useEffect } from "react";

// Components
import Radio from "./components/Radio";
import Input from "./components/Input";
import Button from "./components/Button";
import Textarea from "./components/Textarea";
import NoteCard from "./components/NoteCard";

// Available color options for notes
const colors = ["green", "blue", "yellow", "red", "orange", "pink", "gold"];

const App = () => {
  // Stores all added notes
  const [notes, setNotes] = useState([]);

  // Stores selected color for the note being added
  const [color, setColor] = useState("");

  // Stores the text content of the note being added
  const [noteContent, setNoteContent] = useState("");

  // Stores the list of notes filtered by search query
  const [filteredData, setFilteredData] = useState(notes);

  // Whenever notes are updated, update the filtered list as well
  useEffect(() => {
    setFilteredData(notes);
  }, [notes]);

  // Add new note to the list
  const onAdd = () => {
    // Note Content and Color Validation
    if (noteContent.length == 0 || color.length == 0) {
      alert("Note Content or Color Value cannot be empty!");
      return;
    }

    // Set Notes
    setNotes((prev) => [...prev, { content: noteContent, color: color }]);

    // Clear Note Content
    setNoteContent("");

    // Clear Color
    setColor("");
  };

  // Filter notes based on search input
  const onSearch = (e) => {
    // Value from input
    const { value } = e.target;

    // Cleaned and lowercase version of search text
    const searchValue = value.toLowerCase().trim();

    if (searchValue.length == 0) {
      // Reset to full list if input is empty
      setFilteredData(notes);
    } else {
      // Filter notes that contain the search text
      setFilteredData(
        notes.filter((item) => {
          // Item Value
          const itemValue = item.content.toLowerCase();

          // Check
          if (itemValue.indexOf(searchValue) != -1) return item;
        })
      );
    }
  };

  return (
    <div className="w-full h-[100vh] gap-5 flex justify-center items-center px-20">
      {/* LEFT */}
      <div className="w-[50%] flex flex-col justify-center items-center gap-5">
        {/* TITLE */}
        <h1 className="text-3xl font-bold underline">Note App</h1>

        {/* SEARCH */}
        <div className="w-[50%]">
          <Input placeholder="Search..." onChange={onSearch} />
        </div>

        {/* NOTE CONTENT */}
        <div className="bg-white w-[80%]">
          {/* TEXT AREA */}
          <Textarea
            value={noteContent}
            placeholder="Enter your note"
            onChange={(e) => setNoteContent(e.target.value)}
          />

          <div className="flex justify-between items-center p-3 border-t border-gray-100">
            {/* COLOR SELECTOR */}
            <div className="flex gap-2">
              {colors.map((color, i) => (
                <Radio
                  key={i}
                  value={color}
                  name="color"
                  color={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              ))}
            </div>

            {/* BTN */}
            <Button title={"ADD"} onClick={onAdd} />
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="bg-gray-100 w-[50%] p-5 rounded-md h-[700px] overflow-auto flex flex-wrap justify-start items-start">
        {filteredData.length > 0 ? (
          filteredData.map((note, i) => (
            <div key={i} className="w-[50%] p-2">
              <NoteCard color={note.color} content={note.content} />
            </div>
          ))
        ) : (
          <div className="bg-orange-50 text-orange-600 font-bold p-3 px-10 w-full text-center">
            Not found anything data!
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
