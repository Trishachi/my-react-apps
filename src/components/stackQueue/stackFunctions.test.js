import StackQueueList from "./stackFunctions.js";

test("fifo", () => {
  let myList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  StackQueueList.fifo(myList);
  expect(myList).toEqual([2, 3, 4, 5, 6, 7, 8, 9]);
});

test("lifo", () => {
  let myList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  StackQueueList.lifo(myList);
  expect(myList).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});
