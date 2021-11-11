import React, { FC } from "react";

interface Tprops {
  id: string;
  nameMovie: string;
}

const PeopleMoviePictures: FC<Tprops> = ({ nameMovie }) => {
  return (
    <div>
      <span>{nameMovie}</span>
    </div>
  );
};

export default PeopleMoviePictures;
