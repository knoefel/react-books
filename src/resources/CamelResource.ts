import { camelCase, isArray, mapKeys, snakeCase } from "lodash/fp";
import { Method, Resource } from "rest-hooks";

export abstract class CamelCaseResource extends Resource {
  static async fetch(
    method: Method,
    url: string,
    body?: Readonly<object | string>
  ) {
    if (body) {
      body = applyKeysTransform(body, mapKeysToSnakeCase);
    }

    const jsonResponse = await super.fetch(method, url, body);

    return applyKeysTransform(jsonResponse, mapKeysToCamelCase);
  }
}

const applyKeysTransform = (obj: any | any[], transformFn) =>
  isArray(obj) ? obj.map(transformFn) : transformFn(obj);

const mapKeysToCamelCase = mapKeys(camelCase);
const mapKeysToSnakeCase = mapKeys(snakeCase);
