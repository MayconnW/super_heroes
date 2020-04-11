import noImage from "assets/images/no-image.jpeg";

export default data => {
  return data.map(item => {
    const {
      id,
      attributes: { name, description, image },
    } = item;
    const { original } = image || { original: noImage };
    return {
      id,
      name,
      description: description || "Sem descrição",
      image: original,
    };
  });
};
