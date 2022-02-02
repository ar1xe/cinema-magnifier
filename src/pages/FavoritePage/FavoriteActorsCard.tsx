/* eslint-disable @typescript-eslint/no-shadow */
import React, { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";
import { Peoples } from "../peoplePage/PeoplePage";
import { Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { AddNoteActorsServices } from "../../services/AddNoteActorsServices";
import NotesActors from "../../components/notesActors/NotesActors";

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

const ImgAndNameActor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  margin-right: 25px;
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
  transition: all 0.3s;
  :hover {
    transition: 0.3s;
    transform: scale(1.1);
  }
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

export interface INote {
  noteName: string;
}

const FavoriteActorsCard: FC<Peoples> = ({ name, profile_path, known_for }) => {
  const [note, setNote] = useState("");
  const [noteList, setNoteList] = useState<INote[]>([]);

  const handlerNote = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "note") {
      setNote(event.target.value);
    }
  };

  const addNote = (): void => {
    const newNote = { noteName: note };
    setNoteList([...noteList, newNote]);
    setNote("");
  };

  const deleteNote = (noteNameToDelete: string): void => {
    setNoteList(
      // eslint-disable-next-line @typescript-eslint/no-shadow
      noteList.filter((note) => {
        return note.noteName != noteNameToDelete;
      })
    );
  };

  // const addNote = async (value: any) => {
  //   const response = await AddNoteActorsServices().addNoteActor({ ...value });
  // };

  // const [value, setValue] = useState("");

  // const add = () => {
  //   setArr([...arr, value]);
  // };

  // const inputValue = () => {
  //   setValue(event?.target?.value);
  // };

  return (
    <>
      <PeopleCardWrapper>
        <PeopleCardContent>
          <ImgAndNameActor>
            <div>
              <Img
                src={BASE_URL + profile_path + API_KEY}
                width={160}
                height={240}
              />
            </div>

            <NameContainer>{name}</NameContainer>
          </ImgAndNameActor>
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
          {noteList.map((note: INote, key: number) => {
            return (
              <NotesActors key={key} note={note} deleteNote={deleteNote} />
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
