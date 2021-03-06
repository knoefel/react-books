import { curryRight, uniq } from "lodash/fp";
import { useFetcher, useResource, useSubscription } from "rest-hooks";
import BookResource from "../resources/BookResource";

export const useGetAllBooks = () => {
  const books = useResource(BookResource.listShape(), {});

  return books;
};

export const useCreateBook = () => {
  const createBookCurried = curryRight(useFetcher(BookResource.createShape()));

  return createBookCurried([[BookResource.listShape(), {}, updateBookCache]]);
};

export const useUpdateBook = () => {
  return useFetcher(BookResource.updateShape());
};

export const useDeleteBook = () => {
  return useFetcher(BookResource.deleteShape());
};

export const useBookSubscription = () =>
  useSubscription(BookResource.listShape(), {});

const updateBookCache = (newBookId: string, bookIds: string[] = []) =>
  uniq([...bookIds, newBookId]);
