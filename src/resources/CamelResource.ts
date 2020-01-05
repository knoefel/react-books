import { camelCase, mapKeys } from "lodash/fp";
import { Method, Resource } from "rest-hooks";

export abstract class CamelCaseResource extends Resource {
  static async fetch(
    method: Method,
    url: string,
    body?: Readonly<object | string>
  ) {
    //TODO implement the inverse operation for keys (camelCase to snakeCase) when sending data back to the server

    const jsonResponse = await super.fetch(method, url, body);

    return jsonResponse.map(mapKeysToCamelCase);
  }
}

const mapKeysToCamelCase = mapKeys(camelCase);
