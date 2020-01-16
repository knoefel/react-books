import { FetchOptions } from "rest-hooks";
import { CamelCaseResource } from "./CamelResource";

export default class BookResource extends CamelCaseResource {
  readonly id: string | undefined = undefined;
  readonly title: string = "";
  readonly author: string = "";
  readonly totalAmount: number = 0;
  readonly pages: number = 0;
  readonly isbn: string = "";

  pk() {
    return this.id;
  }

  static getFetchOptions(): FetchOptions {
    return {
      pollFrequency: 5000 // every 5 seconds
    };
  }

  static urlRoot = "https://5c6eb0534fa1c9001424240b.mockapi.io/api/v1/books";
}
