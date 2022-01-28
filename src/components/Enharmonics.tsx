import React, { FC, useState } from 'react';
import { Note } from '../assets/types';
import { keys } from '../assets/keys';

function Enharmonics(): JSX.Element {
  const [notes, setNotes] = useState(keys)
  return(
    <div className="enharmonics">
      {notes.map((note: Note) => {
        if(note.enharmonic) {
          return(
            <div>
              <p>{note.enharmonic}/{note.name}</p>
            </div>
          )
        }
      })}
    </div>
  )
}

export default Enharmonics;
