
import React from "react";

import ConnectionAwareImage from '../ConnectionAwareImage/ConnectionAwareImage';
import "./Actor.css";

const Actor = ({ actor }) => {
  return (
    <div className="rmdb-actor">
      <ConnectionAwareImage path={actor.profile_path} alt="actorthumb" />
      <span className="rmdb-actor-name">{actor.name}</span>
      <span className="rmdb-actor-character">{actor.character}</span>
    </div>
  );
};

export default Actor;
