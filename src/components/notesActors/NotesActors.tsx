import React, { FC } from "react";
import { Note } from "../../pages/peoplePage/PeoplePage";
import { Button } from "antd";
import styled from "styled-components";

const NoteContainer = styled.div`
  width: 96.5%;
  display: flex;
  margin: 5px 0 5px 0;
`;

const ButtonNote = styled(Button)`
  margin-left: 0%;
`;

interface Props {
  note: Note;
  deleteNote(currentNote: Note): void;
}

const NotesActors: FC<Props> = ({ note, deleteNote }) => {
  return (
    <>
      <NoteContainer>
        <span style={{ width: "calc(100%)" }}>{note.value}</span>
        <ButtonNote
          danger
          onClick={() => {
            deleteNote(note);
          }}
        >
          Delete Note
        </ButtonNote>
      </NoteContainer>
    </>
  );
};

export default NotesActors;
