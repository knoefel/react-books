import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import BookList from "../../components/BookList/BookList";
import BookListContainer from "./BookListContainer";

describe("BookListContainer", () => {
  let booklistContainer: ShallowWrapper;

  beforeEach(() => (booklistContainer = shallow(<BookListContainer />)));

  it("should render a <BookList />", () => {
    expect(booklistContainer).toContainReact(
      <BookList updateBook={() => {}} books={[]} />
    );
  });
});
