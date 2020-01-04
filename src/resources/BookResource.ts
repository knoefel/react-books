import { CamelCaseResource } from "./CamelResource";

export default class BookResource extends CamelCaseResource {
  readonly id: number | undefined = undefined;
  readonly title: string = "";
  readonly author: string = "";
  readonly totalAmount: number = 0;
  readonly pages: number = 0;
  readonly isbn: string = "";

  pk() {
    return this.id;
  }

  static urlRoot = "https://5c6eb0534fa1c9001424240b.mockapi.io/api/v1/books";
}
