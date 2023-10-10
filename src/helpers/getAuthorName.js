import { mockedAuthorsList } from "../constants";

function getAuthorNames (authorIds) {
    return (
      authorIds.map((authorId) => {
        const author = mockedAuthorsList.find(
          (author) => author.id === authorId
        );
        return author ? author.name : "";
      })
      .join(", ")
    )
  };

export default getAuthorNames;