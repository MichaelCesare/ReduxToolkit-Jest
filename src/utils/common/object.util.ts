/**
 * IsEmpty check for Array, string, undefined, null, and Object.
 * Not suitable for numeric values.
 * A String having whiteSpace is considered as empty too.
 * @param prop The value to test against
 * @returns value is empty or not.
 */
export const isEmpty = (
  prop: Array<any> | string | object | undefined | null
) => {
  let result = true; // Undefined and null handled by default
  if (prop && prop !== undefined) {
    if (prop.constructor === Array) {
      result = prop.length === 0;
    } else if (prop.constructor === String || typeof prop === "string") {
      result = prop.trim().length === 0;
    } else if (prop.constructor === Object) {
      result = Object.keys(prop).length === 0;
    }
  }

  return result;
};
