import React, { useEffect, useState } from "react";
import { getCharacter } from "services/character";

import CharacterComponent from "components/Character";
import { Container } from "./styles";

export default function Character({ match: { params } }) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!params.id) return;

    async function load() {
      const character = await getCharacter(params.id);
      setData(character);
    }

    load();
  }, [params.id]);

  return <CharacterComponent data={data} />;
}
