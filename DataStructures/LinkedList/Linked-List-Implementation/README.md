# Linked List Challenge - JavaScript

## Overview
This project implements a **singly linked list** in JavaScript, demonstrating fundamental data structure operations. The code is structured to provide clear, reusable methods for managing nodes in a linked list.  

The project also includes **unit tests** using **Jest** to verify correct functionality of each method.

---

## Code Functionality
The linked list implementation provides the following features:

1. **Add Node (`add(value)`)**  
   - Adds a new node with the specified value at the **end** of the list.  
   - If the list is empty, the new node becomes the head.

2. **Remove Node (`remove(value)`)**  
   - Removes the **first occurrence** of a node with the specified value.  
   - Handles removal of the **head node** and non-existent values gracefully.

3. **Insert Node at Index (`insertAt(value, index)`)**  
   - Inserts a new node with the given value at the specified position.  
   - Index `0` inserts at the head.  
   - If the index is greater than the length, an error message `"Index out of bounds"` is printed.

4. **Check Value (`includes(value)`)**  
   - Traverses the list to determine whether a node with the specified value exists.  
   - Returns `true` if found, otherwise `false`.

5. **Print List (`printList()`)**  
   - Prints the current state of the list in the format:  
     `Head -> value1 -> value2 -> ... -> Null`.

6. **Error Handling**  
   - All methods use `try-catch` blocks to handle potential runtime errors gracefully.  
