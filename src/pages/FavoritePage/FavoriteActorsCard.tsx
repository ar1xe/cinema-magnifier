/* eslint-disable @typescript-eslint/no-shadow */
import React, { ChangeEvent, FC, useCallback, useState } from "react";
import styled from "styled-components";
import { Note, Peoples } from "../peoplePage/PeoplePage";
import { Input, Button } from "antd";
import { CloseCircleOutlined, UserOutlined } from "@ant-design/icons";
import { AddNoteActorsServices } from "../../services/AddNoteActorsServices";
import NotesActors from "../../components/notesActors/NotesActors";
import axios from "axios";
import nextId from "react-id-generator";
import { relative } from "path/posix";
import FavoriteService from "../../services/FavoriteServices";

const SERVER_URL = "http://localhost:3333/";
const BASE_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = "?api_key=cc05b5a727e14d0c6339bc25125883bd";

const PeopleCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 15px 30px 15px;
  width: 700px;
`;

const PeopleCardContent = styled.div`
  display: flex;
`;

const ImgAndNameActorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  margin-right: 25px;
`;

const ImgAndNameActorContainer = styled.div`
  position: relative;
  transition: all 0.3s;
  &:hover .closeIcon {
    display: block;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 100%;
`;

const FilmContent = styled.div`
  display: flex;
`;

const Film = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-left: 25px; */
`;

const Img = styled.img`
  border-radius: 15px 15px 5px 5px;
`;

const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  color: #002640;
  margin: 10px 0 10px 0;
  font-size: 15px;
`;

const NameFilm = styled.div`
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

const ReleaseFilm = styled.div`
  margin-bottom: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  font-size: 12px;
`;

const ImgFilm = styled.img`
  border-radius: 15px 15px 5px 5px;
  transition: all 0.3s;
  :hover {
    transition: 0.3s;
    transform: scale(1.03);
  }
`;

const InputWrapper = styled.div`
  display: flex;
`;

const CircleOutlined = styled(CloseCircleOutlined)`
  color: #f32c2cc7;
  font-size: 34px;
  position: absolute;
  right: 8px;
  top: 8px;
  display: none;
`;

const FavoriteActorsCard: FC<Peoples> = ({
  name,
  profile_path,
  known_for,
  id,
  notes,
  deleteFavoriteElement,
}) => {
  const [note, setNote] = useState("");
  const [noteList, setNoteList] = useState<Note[]>(notes || []);

  const handlerNote = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "note") {
      setNote(event.target.value);
    }
  };

  const addNote = () => {
    const newNote: Note = { value: note, id: nextId() };
    // setNoteList([...noteList, newNote]);

    const addNotes = async () => {
      const response = await axios.post(SERVER_URL + "addNote", {
        newNote,
        parentId: id,
        type: "actors",
      });

      setNoteList([...noteList, response.data]);
      setNote("");
    };
    addNotes();
  };

  const deleteNote = (currentNote: Note): void => {
    const deleteNote = async () => {
      const response = await axios.post(SERVER_URL + "deleteNote", {
        currentNote,
        parentId: id,
        type: "actors",
      });

      setNoteList(response.data);
    };
    deleteNote();
  };

  const deleteCard = useCallback(async () => {
    await FavoriteService.addFavoriteElement(
      { name, profile_path, id, known_for },
      "actors"
    );
    if (deleteFavoriteElement) {
      deleteFavoriteElement();
    }
  }, [name, profile_path, id, known_for, deleteFavoriteElement]);

  return (
    <>
      <PeopleCardWrapper>
        <PeopleCardContent>
          <ImgAndNameActorWrapper>
            <ImgAndNameActorContainer>
              <Img
                src={BASE_URL + profile_path + API_KEY}
                width={160}
                height={240}
              />
              <CircleOutlined className="closeIcon" onClick={deleteCard} />
            </ImgAndNameActorContainer>

            <NameContainer>{name}</NameContainer>
          </ImgAndNameActorWrapper>
          <DescriptionWrapper>
            <FilmContent>
              {known_for?.map((nameMov) => (
                <Film>
                  <NameFilm> {nameMov.original_title} </NameFilm>
                  <ImgFilm
                    src={BASE_URL + nameMov.poster_path}
                    width={130}
                    height={190}
                    alt="111"
                  />
                  <ReleaseFilm> {nameMov.release_date} </ReleaseFilm>
                </Film>
              ))}
            </FilmContent>
          </DescriptionWrapper>
        </PeopleCardContent>
        <div>
          {noteList.map((note: Note) => {
            return (
              <NotesActors key={note.id} note={note} deleteNote={deleteNote} />
            );
          })}
        </div>
        <InputWrapper>
          <Input.Group compact>
            <Input
              style={{ width: "calc(100% - 110px)" }}
              placeholder="   leave a note..."
              name="note"
              value={note}
              onChange={handlerNote}
            />
            <Button type="primary" onClick={addNote}>
              Add Note
            </Button>
          </Input.Group>
        </InputWrapper>
      </PeopleCardWrapper>
    </>
  );
};

export default FavoriteActorsCard;
