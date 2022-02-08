import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPokemon}) {
  const [formData, setFormData] = useState({
    name : "",
    hp: "",
    front: "",
    back: "",
  })

  function handleSubmitChange(e) {
    setFormData({
      ...formData, 
      [e.target.name] : e.target.value,
    })
    }

  function handleFormSubmit(e){
    const newItem = {
      name: formData.name,
      hp: formData.hp,
      sprites : {
        frontUrl: formData.frontUrl,
        backUrl: formData.backUrl,
      },
    };
    fetch("http://localhost:3001/pokemon", {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
    .then(r=>r.json())
    .then(newItem => onAddPokemon(newItem))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleFormSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid 
          value={formData.name}
          onChange={handleSubmitChange}
          label="Name" placeholder="Name" name="name" />
          <Form.Input fluid 
          value={formData.hp} 
          onChange={handleSubmitChange}
          label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
            onChange={handleSubmitChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
            onChange={handleSubmitChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
