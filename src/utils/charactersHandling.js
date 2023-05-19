export const handleCharacters = (title) => {
  if (title?.length > 6) {
    const result = title.slice(0, 6) + "...";
    return result;
  } else {
    return title;
  }
};
