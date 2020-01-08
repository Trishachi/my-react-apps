import { ListNode, LinkedList } from "./LinkedListFunctions.js";

test("ListNode show function", () => {
  const node = new ListNode("Carrot", 20, null);
  expect(node.show()).toBe("Subject: Carrot and Amount: 20");
});

test("Testing LinkedList Functions", () => {
  const newList = new LinkedList();

  expect(newList.head).toBe(null);
  let node1 = newList.insert("A", 30);
  expect(newList.first()).toBe(node1);
  expect(newList.last()).toBe(node1);
  expect(newList.next()).toBe(`Single Item on the List`);
  expect(newList.previous()).toBe(`Single Item on the List`);
  let node2 = newList.insert("B", 50);
  let node3 = newList.insert("C", 70);
  let node4 = newList.insert("D", 100);
  expect(newList.sumAmounts()).toBe(250);

  newList.previous();
  newList.delete();
});
