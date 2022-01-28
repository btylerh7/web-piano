import { useState } from 'react';
import { keys } from '../assets/keys';
import { playNote, playPressedNote } from '../assets/synth';
import '../styles/Piano.css';
import { Note } from '../assets/types';

function Piano ():JSX.Element {
    const [ notes, setNotes ] = useState(keys);
    return (
        <>
            {notes.map((note: Note) => {
                return (
                    <div 
                        onKeyDown={(e) => playPressedNote(e.key, note.name, note.octave, note.key)}
                        onClick={() => playNote(note.name, note.octave)}
                        className={note.name.length === 1 ? "white" : "black"}>
                    </div>
                )
            })}
        </>
    )
}
export default Piano;
