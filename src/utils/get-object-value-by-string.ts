/**
 * @param obj is the object that have your value `e.g. { fruits: { banana: 'banana' } }`
 * @param path is the path to your value `e.g. obj.fruits.banana -> 'banana'`
 * @returns returns your string `value` or the `rest of object`
 */

export function getObjectValueByString<T extends string | Record<any, any> = string>(
  obj: Record<any, any> | undefined,
  path: string,
): T {
  const keys = path.split('.');
  if (keys.length > 1) {
    let value = obj;
    for (const key of keys) {
      if (!value?.[key]) {
        value = undefined;
        break;
      }
      value = value?.[key];
    }
    return value as T;
  }

  return obj?.[keys[0]] as T;
}
