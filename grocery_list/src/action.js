export const CREATE_ITEM = "CREATE_ITEM";

let nextItemId = 1;
export function createItem(data) {
  return {
    type: CREATE_ITEM,
    data: {
      ...data,
      id: nextItemId++
    }
  };
}
