import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({id, name, hp, sprites }) {
  const [isFront, setFront] = useState(true)

  function handleToggle(){
    setFront(isFront => !isFront)
  }

  return (
    <Card>
      <div>
        <div onClick={handleToggle} className="image">
          <img src={isFront ? sprites.front : sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
