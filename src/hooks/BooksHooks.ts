import { useFetcher, useResource } from "rest-hooks";
import BookResource from "../resources/BookResource";

export const useGetAllBooks = () => {
  const books = useResource(BookResource.listShape(), {});

  return books;
};

export const useUpdateBook = () => {
  return useFetcher(BookResource.updateShape());
};

export const useDeleteBook = () => {
  return useFetcher(BookResource.deleteShape());
};
