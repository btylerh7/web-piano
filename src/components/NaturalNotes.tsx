import React, { FC, useState } from 'react';
import { keys } from '../assets/keys';
import { Note } from '../assets/types'
import '../styles/Notes.css'

function NaturalNotes(): JSX.Element {
  const [notes, setNotes] = useState(keys);
  return (
    <div className="naturals">
      {notes.map((note: Note) =>{
        if(!note.enharmonic) {
          return(
            <div>
              <p>{note.name}</p>
            </div>
          )
        }
      })}
    </div>
  );
}

export default NaturalNotes;
