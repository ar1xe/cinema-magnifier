import React, { FC } from "react";
import { INote } from "../../pages/FavoritePage/FavoriteActorsCard";
import { Button } from "antd";
import { Input } from "antd";
import styled from "styled-components";

const NoteContainer = styled.div`
  width: 680px;
  display: flex;
  margin: 5px 0 5px 0;
`;

const ButtonNote = styled(Button)`
  margin-left: 0%;
`;

interface Props {
  note: INote;
  deleteNote(noteNameToDelete: string): void;
}

const NotesActors: FC<Props> = ({ note, deleteNote }) => {
  return (
    <>
      <NoteContainer>
        <Input.Group compact>
          <Input style={{ width: "calc(100%)" }} defaultValue={note.noteName} />
        </Input.Group>
        <ButtonNote
          danger
          onClick={() => {
            deleteNote(note.noteName);
          }}
        >
          Delete Note
        </ButtonNote>
      </NoteContainer>
    </>
  );
};

export default NotesActors;
