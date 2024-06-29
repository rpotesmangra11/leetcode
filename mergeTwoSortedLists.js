/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2.val;
      list2 = list2.next;
    }
    current = current.next;
  }
  // At least one of list1 and list2 can still have nodes at this point, so connect
  // the non-null list to the end of the merged list
  current.next = list1 === null ? list2 : list1;

  return dummyHead.next; // The merged list is next to the dummy head
};

// A dummyHead node is used to simplify the edge case handling at the start of the merged list.
// A current pointer is used to keep track of the last node in the merged list as it's being constructed.
// The while loop continues until either list1 or list2 has been fully merged into the new list.
// After the loop, one of the lists might still have remaining nodes (if the lists were of unequal lengths), so the remaining part of that list is appended to the end of the merged list.
// Finally, dummyHead.next is returned as the head of the merged list, skipping over the dummy head node.
// This approach efficiently merges two sorted linked lists into a single sorted list by directly manipulating the next pointers of the nodes involved.

// The lines of code you've provided are part of a common technique used in linked list manipulation, especially in operations like merging two sorted lists. Here's a breakdown of what these lines do:

// Creating a Dummy Head Node: let dummyHead = new ListNode(0);

// This line creates a new ListNode with a value of 0. This node is referred to as a "dummy head" because it serves as a placeholder at the beginning of the new linked list being formed. The use of a dummy head simplifies the logic for handling edge cases, especially at the start of the list, by providing a non-null object to reference as the previous node before any real data nodes are added to the list.
// Initializing a Current Pointer: let current = dummyHead;

// This line initializes a pointer named current and sets it to point to the dummy head node. The current pointer is used to keep track of the last node in the new linked list as it is being constructed. As new nodes are added to the list, the current pointer is updated to always point to the latest node added. This allows for efficient appending of nodes to the end of the list without needing to traverse the list each time to find the end.
// Together, these lines set up the initial structure for building a new linked list. The dummy head node acts as a starting point, and the current pointer is used to add new nodes to the list. After all operations are complete, the list can be accessed starting from dummyHead.next, because dummyHead itself is not part of the actual data in the list; it was just a placeholder to facilitate operations.

// The code snippet you've provided is part of an algorithm to merge two sorted linked lists. This specific part of the code handles the case where the current node in list1 has a value less than the current node in list2. Here's the breakdown of what's happening and why list1 = list1.next is necessary:

// Condition Check: if (list1.val < list2.val) {

// This checks if the current node in list1 has a value less than the current node in list2. If true, it means the list1 node should come before the list2 node in the merged list.
// Appending to Merged List: current.next = list1

// This line sets the next pointer of the current node in the merged list to point to the current node in list1. This effectively appends the list1 node to the merged list.
// Advancing list1 Pointer: list1 = list1.next

// After appending the list1 node to the merged list, this line advances the list1 pointer to its next node. This is crucial because it updates list1 to refer to the next node that needs to be considered for merging. Without this step, the algorithm would keep comparing the same list1 node to list2 nodes indefinitely, resulting in an infinite loop.
// The purpose of assigning list1.next to list1 is to move the pointer forward in list1, ensuring that the algorithm progresses through all nodes in both lists. This step is essential for iterating through the linked list and gradually building the merged list by comparing and appending nodes from both list1 and list2 based on their values.

// Yes, that's correct. In the context of linked lists, especially when merging two sorted lists into a single sorted list, you need to manually traverse the nodes by updating the pointers. The code snippet you've provided is part of a loop that iterates through two linked lists (list1 and list2). It compares the current values of the nodes in each list and advances the pointer (next) of the current node (current) to the node with the smaller value. After linking current to the smaller node, it then advances the pointer of the list from which the node was taken (list1 = list1.next in this case) to continue the merge process. This manual traversal and updating of pointers are necessary because linked lists do not have a built-in mechanism to automatically advance through their nodes.
