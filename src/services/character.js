import noImage from "assets/images/no-image.jpeg";
import api from "./api";

const buildRequest = ({ data, included }) => {
  const {
    id,
    attributes: { name, description, image },
  } = data;
  const { original } = image || { original: noImage };

  const filteredMedia = included
    .filter(item => item.type !== "mediaCharacters")
    .map(item => {
      const {
        attributes: {
          canonicalTitle,
          ratingRank,
          favoritesCount,
          userCount,
          averageRating,
          synopsis,
          posterImage,
        },
      } = item;
      const { original: mediaImage } = posterImage || { original: noImage };
      return {
        id: item.id,
        title: canonicalTitle,
        img: mediaImage,
        ranking: ratingRank,
        favorites: favoritesCount,
        views: userCount,
        averageRating,
        description: synopsis,
      };
    });

  return {
    id,
    img: original,
    name,
    description,
    media: filteredMedia,
  };
};

const getCharacter = async id => {
  const { data } = await api.get(
    `edge/characters/${id}?include=mediaCharacters.media`
  );
  return buildRequest(data);
};

export { getCharacter };
