/* eslint-disable @typescript-eslint/no-shadow */
import axios from "axios";
import React, { ChangeEvent, FC, useCallback, useState } from "react";
import nextId from "react-id-generator";
import styled from "styled-components";
import FavoriteService from "../../services/FavoriteServices";
import { Movies, Note } from "../startPage/StartPage";
import { Input, Button } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import NotesMovies from "../../components/notesActors/NotesMovies";

const SERVER_URL = "http://localhost:3333/";
const BASE_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = "?api_key=cc05b5a727e14d0c6339bc25125883bd";

const MovieCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 0 30px 0;
  width: 100%;
  @media (max-width: 430px) {
    width: 80%;
  }
`;

const MovieCardContent = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: space-around;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ImgAndNameMovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 485px) {
    width: 100%;
    margin-right: 0;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  transition: all 0.3s;
  &:hover .closeIcon {
    display: block;
  }
`;

const Header = styled.div`
  color: #002640;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  font-size: 17px;
  height: 50px;
`;

const Img = styled.img`
  border-radius: 15px;
  transition: all 0.3s;
  :hover {
    transition: 0.3s;
    transform: scale(1.03);
  }
`;

const Description = styled.div`
  display: flex;
  font-size: 16px;
  justify-content: center;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  height: 150px;
  margin-top: 45px;
  padding: 0 10px 0 10px;
  opacity: 0.6;
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  font-size: 17px;
  margin-top: 15px;
`;

const DescriptionRatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  @media (max-width: 430px) {
    width: 360px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

const CircleOutlined = styled(CloseCircleOutlined)`
  color: #f32c2cc7;
  font-size: 34px;
  position: absolute;
  right: 8px;
  top: 8px;
  display: none;
`;

const FavoriteMovieCard: FC<Movies> = ({
  title,
  popularity,
  poster_path,
  overview,
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

    const addNotes = async () => {
      const response = await axios.post(SERVER_URL + "addNoteMovie", {
        newNote,
        parentId: id,
        type: "movies",
      });

      setNoteList([...noteList, response.data]);
      setNote("");
    };
    addNotes();
  };

  const deleteNote = (currentNote: Note): void => {
    const deleteNote = async () => {
      const response = await axios.post(SERVER_URL + "deleteNoteMovie", {
        currentNote,
        parentId: id,
        type: "movies",
      });

      setNoteList(response.data);
    };
    deleteNote();
  };

  const deleteCard = useCallback(async () => {
    await FavoriteService.addFavoriteElement(
      { title, popularity, id, overview, poster_path },
      "movies"
    );
    if (deleteFavoriteElement) {
      deleteFavoriteElement();
    }
  }, [title, popularity, id, overview, poster_path, deleteFavoriteElement]);

  return (
    <>
      <MovieCardWrapper>
        <MovieCardContent>
          <ImgAndNameMovieWrapper>
            <Header>{title}</Header>
            <ImgContainer>
              <Img
                src={BASE_URL + poster_path + API_KEY}
                width={160}
                height={240}
              />
              <CircleOutlined className="closeIcon" onClick={deleteCard} />
            </ImgContainer>
          </ImgAndNameMovieWrapper>
          <DescriptionRatingContainer>
            <Description>
              <p>{overview}</p>
            </Description>
            <Rating>
              <h4>Rating {popularity}</h4>
            </Rating>
          </DescriptionRatingContainer>
        </MovieCardContent>
        <div>
          {noteList.map((note: Note) => {
            return (
              <NotesMovies key={note.id} note={note} deleteNote={deleteNote} />
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
      </MovieCardWrapper>
    </>
  );
};

export default FavoriteMovieCard;
