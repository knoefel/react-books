import { useResource } from "rest-hooks";
import BookResource from "../resources/BookResource";

export const useGetAllBooks = () => {
  const books = useResource(BookResource.listShape(), {});

  return books;
};
