# Technical Interview One-Shot Notes
## DSA | OOPs | DBMS | OS | CN

---

## ðŸ“š **DATA STRUCTURES AND ALGORITHMS (DSA)**

### **Core Data Structures**

#### **1. Arrays**
- **Definition**: Collection of elements stored in contiguous memory locations
- **Time Complexity**: Access O(1), Search O(n), Insert/Delete O(n)
- **Example**: Finding maximum subarray (Kadane's Algorithm)
```python
def max_subarray(arr):
    max_so_far = max_ending_here = arr[0]
    for i in range(1, len(arr)):
        max_ending_here = max(arr[i], max_ending_here + arr[i])
        max_so_far = max(max_so_far, max_ending_here)
    return max_so_far
```

#### **2. Linked Lists**
- **Definition**: Linear data structure where elements are stored in nodes
- **Types**: Singly, Doubly, Circular
- **Time Complexity**: Insert/Delete O(1), Search O(n)
- **Key Operations**: Reverse, Detect cycle, Merge sorted lists

#### **3. Stacks and Queues**
- **Stack**: LIFO (Last In First Out) - Operations: push, pop, top
- **Queue**: FIFO (First In First Out) - Operations: enqueue, dequeue, front
- **Applications**: Expression evaluation, BFS/DFS, function calls

#### **4. Trees**
- **Binary Tree**: Each node has at most 2 children
- **Binary Search Tree**: Left < Root < Right
- **Traversals**: 
  - Inorder (Left, Root, Right)
  - Preorder (Root, Left, Right) 
  - Postorder (Left, Right, Root)
- **Time Complexity**: Search/Insert/Delete O(log n) average, O(n) worst

#### **5. Graphs**
- **Representation**: Adjacency Matrix, Adjacency List
- **Traversal**: BFS (level-wise), DFS (depth-wise)
- **Algorithms**: Dijkstra's shortest path, Topological sort
- **Applications**: Social networks, GPS navigation

### **Algorithm Paradigms**

#### **1. Recursion**
- **Principle**: Function calls itself with smaller subproblems
- **Base Case**: Stopping condition to prevent infinite recursion
- **Example**: Fibonacci, Tree traversal, Factorial

#### **2. Dynamic Programming**
- **Concept**: Store results of subproblems to avoid recomputation
- **Approaches**: 
  - **Memoization** (Top-down): Recursive with caching
  - **Tabulation** (Bottom-up): Iterative table filling
- **Examples**: Knapsack problem, Longest common subsequence

#### **3. Greedy Algorithms**
- **Strategy**: Make locally optimal choices
- **Examples**: Activity selection, Huffman coding, Minimum spanning tree

### **Sorting Algorithms**

| Algorithm | Best Case | Average Case | Worst Case | Space | Stable |
|-----------|-----------|--------------|------------|-------|--------|
| Bubble Sort | O(n) | O(nÂ²) | O(nÂ²) | O(1) | Yes |
| Selection Sort | O(nÂ²) | O(nÂ²) | O(nÂ²) | O(1) | No |
| Insertion Sort | O(n) | O(nÂ²) | O(nÂ²) | O(1) | Yes |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes |
| Quick Sort | O(n log n) | O(n log n) | O(nÂ²) | O(log n) | No |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) | No |

### **Searching Algorithms**
- **Linear Search**: O(n) - Check each element sequentially
- **Binary Search**: O(log n) - Divide and conquer on sorted array
- **Hashing**: O(1) average - Direct access using hash function

---

## ðŸŽ¯ **OBJECT-ORIENTED PROGRAMMING (OOPs)**

### **Core Principles**

#### **1. Encapsulation**
- **Definition**: Bundling data and methods that operate on data within a single unit
- **Benefits**: Data hiding, modularity, security
- **Example**: Private variables with getter/setter methods
```java
class BankAccount {
    private double balance;
    
    public void deposit(double amount) {
        if(amount > 0) balance += amount;
    }
    
    public double getBalance() {
        return balance;
    }
}
```

#### **2. Inheritance**
- **Definition**: Creating new classes based on existing classes
- **Types**: Single, Multiple, Multilevel, Hierarchical, Hybrid
- **Benefits**: Code reusability, method overriding
- **Keywords**: extends, super, parent class, child class

#### **3. Polymorphism**
- **Runtime Polymorphism**: Method overriding - same method name, different implementations
- **Compile-time Polymorphism**: Method overloading - same method name, different parameters
- **Example**: Different animals making different sounds (Dog barks, Cat meows)

#### **4. Abstraction**
- **Definition**: Hiding implementation details, showing only essential features
- **Abstract Classes**: Cannot be instantiated, can have abstract and concrete methods
- **Interfaces**: Contract defining what a class must implement

### **Key OOP Concepts**

#### **Class vs Object**
- **Class**: Blueprint/template for creating objects
- **Object**: Instance of a class with actual values

#### **Constructor vs Destructor**
- **Constructor**: Special method called when object is created
- **Destructor**: Special method called when object is destroyed

#### **Access Modifiers**
- **Public**: Accessible everywhere
- **Private**: Accessible only within the same class
- **Protected**: Accessible within package and subclasses
- **Default**: Accessible within the same package

### **Advanced Concepts**
- **Composition vs Inheritance**: "Has-a" vs "Is-a" relationship
- **Method Overriding vs Overloading**: Runtime vs Compile-time
- **Static vs Instance**: Class-level vs Object-level
- **Final Keyword**: Prevents inheritance, method overriding, variable modification

---

## ðŸ’¾ **DATABASE MANAGEMENT SYSTEMS (DBMS)**

### **Database Fundamentals**

#### **What is DBMS?**
- **Definition**: Software system for storing, retrieving, and managing data
- **Examples**: MySQL, PostgreSQL, Oracle, MongoDB
- **Advantages**: Data integrity, security, concurrent access, backup/recovery

#### **RDBMS vs DBMS**
- **RDBMS**: Data stored in tables with relationships
- **DBMS**: Data stored as files
- **RDBMS Examples**: MySQL, Oracle, SQL Server

### **Database Design & Normalization**

#### **Normal Forms**
- **1NF**: Atomic values, no repeating groups
- **2NF**: 1NF + no partial dependency
- **3NF**: 2NF + no transitive dependency  
- **BCNF**: 3NF + every determinant is a candidate key

#### **Keys**
- **Primary Key**: Unique identifier for table records
- **Foreign Key**: References primary key of another table
- **Candidate Key**: Attributes that can uniquely identify records
- **Super Key**: Set of attributes that can uniquely identify records

### **SQL Operations**

#### **SQL Joins**
- **INNER JOIN**: Returns matching records from both tables
- **LEFT JOIN**: All records from left table + matching from right
- **RIGHT JOIN**: All records from right table + matching from left  
- **FULL JOIN**: All records from both tables

```sql
-- INNER JOIN Example
SELECT s.name, c.course_name 
FROM students s 
INNER JOIN courses c ON s.student_id = c.student_id;
```

#### **SQL Commands**
- **DDL**: CREATE, ALTER, DROP, TRUNCATE
- **DML**: INSERT, UPDATE, DELETE, SELECT
- **DCL**: GRANT, REVOKE
- **TCL**: COMMIT, ROLLBACK, SAVEPOINT

### **Transaction Management**

#### **ACID Properties**
- **Atomicity**: All operations complete or none (all-or-nothing)
- **Consistency**: Database moves from one valid state to another
- **Isolation**: Concurrent transactions don't interfere
- **Durability**: Committed changes are permanent

#### **Concurrency Control**
- **Locking**: Prevents concurrent access conflicts
- **Two-Phase Locking**: Growing phase (acquire locks) + Shrinking phase (release locks)
- **Deadlock**: Circular wait between transactions
- **MVCC**: Multi-Version Concurrency Control for non-blocking reads

### **Database Architecture**
- **3-Tier Architecture**: Presentation â†’ Application â†’ Database
- **Indexing**: B-trees, Hash indexes for fast data retrieval
- **Query Optimization**: Cost-based optimization, execution plans

---

## âš™ï¸ **OPERATING SYSTEMS (OS)**

### **Operating System Basics**

#### **What is an Operating System?**
- **Definition**: Software that manages computer hardware and software resources
- **Functions**: Memory management, process management, file system, I/O management
- **Examples**: Windows, Linux, macOS, Android

#### **Types of Operating Systems**
- **Batch OS**: Jobs processed in batches
- **Multi-programming OS**: Multiple programs in memory
- **Time-sharing OS**: CPU time shared among users
- **Real-time OS**: Immediate response to inputs

### **Process Management**

#### **Process vs Thread**
- **Process**: Independent program in execution with separate memory space
- **Thread**: Lightweight process sharing memory space with other threads
- **Benefits of Threading**: Parallelism, resource sharing, responsiveness

#### **Process States**
1. **New**: Process being created
2. **Ready**: Waiting for CPU allocation
3. **Running**: Instructions being executed
4. **Waiting**: Waiting for I/O or event
5. **Terminated**: Process completed execution

#### **CPU Scheduling Algorithms**
- **FCFS**: First Come First Served - simple but may cause convoy effect
- **SJF**: Shortest Job First - optimal but requires job length prediction
- **Round Robin**: Time quantum-based - fair but overhead of context switching
- **Priority Scheduling**: Based on process priority - may cause starvation

### **Memory Management**

#### **Memory Allocation**
- **Contiguous**: Single block of memory
- **Non-contiguous**: Scattered blocks (paging, segmentation)
- **Virtual Memory**: Illusion of more memory than physically available

#### **Paging**
- **Concept**: Divide memory into fixed-size pages
- **Benefits**: Eliminates external fragmentation
- **Page Table**: Maps virtual addresses to physical addresses
- **TLB**: Translation Lookaside Buffer for faster address translation

### **Deadlock Management**

#### **Deadlock Conditions (Coffman Conditions)**
1. **Mutual Exclusion**: Resources cannot be shared
2. **Hold and Wait**: Process holds resources while waiting for others
3. **No Preemption**: Resources cannot be forcibly removed
4. **Circular Wait**: Circular chain of waiting processes

#### **Deadlock Prevention**
- **Eliminate Mutual Exclusion**: Use spooling for sharable resources
- **Eliminate Hold and Wait**: Request all resources at once
- **Allow Preemption**: Forcibly remove resources when needed
- **Eliminate Circular Wait**: Order resources and request in sequence

#### **Banker's Algorithm**
- **Purpose**: Deadlock avoidance algorithm
- **Concept**: Check if resource allocation leads to safe state
- **Safe State**: System can allocate resources to all processes without deadlock

### **File Systems**
- **File**: Named collection of data
- **Directory**: Container for files and other directories
- **File Allocation**: Contiguous, Linked, Indexed allocation
- **File System Examples**: NTFS, ext4, FAT32

---

## ðŸŒ **COMPUTER NETWORKS (CN)**

### **Network Fundamentals**

#### **What is Computer Network?**
- **Definition**: Interconnected computers sharing resources and information
- **Components**: Nodes (devices), Links (connections), Protocols (rules)
- **Examples**: Internet, LAN, WAN, MAN

#### **Network Topologies**
- **Bus**: All devices connected to single cable
- **Star**: All devices connected to central hub
- **Ring**: Devices connected in circular fashion
- **Mesh**: Every device connected to every other device
- **Tree**: Hierarchical structure with root node

### **OSI Model (7 Layers)**

1. **Physical Layer**: Electrical signals, cables, hubs
2. **Data Link Layer**: Frame formatting, error detection, MAC addresses
3. **Network Layer**: Routing, IP addresses, packets
4. **Transport Layer**: End-to-end delivery, TCP/UDP, ports
5. **Session Layer**: Session management, authentication
6. **Presentation Layer**: Encryption, compression, data formatting
7. **Application Layer**: User interfaces, HTTP, FTP, SMTP

### **TCP/IP Model (4 Layers)**

1. **Network Access Layer**: Physical + Data Link (OSI Layer 1-2)
2. **Internet Layer**: Network (OSI Layer 3) - IP protocol
3. **Transport Layer**: Transport (OSI Layer 4) - TCP/UDP
4. **Application Layer**: Session + Presentation + Application (OSI Layer 5-7)

### **Important Protocols**

#### **TCP vs UDP**
| Feature | TCP | UDP |
|---------|-----|-----|
| Connection | Connection-oriented | Connectionless |
| Reliability | Reliable, error recovery | Unreliable, no error recovery |
| Speed | Slower due to overhead | Faster, minimal overhead |
| Applications | HTTP, FTP, Email | DNS, Video streaming, Games |

#### **IP Addressing**

**IPv4**: 32-bit addresses (e.g., 192.168.1.1)
- **Classes**: A (1-126), B (128-191), C (192-223)
- **Private IPs**: 10.x.x.x, 172.16-31.x.x, 192.168.x.x

**IPv6**: 128-bit addresses for larger address space

#### **Subnetting**
- **Purpose**: Divide large network into smaller subnetworks
- **Subnet Mask**: Determines network and host portions
- **Example**: 192.168.1.0/24 (24-bit network, 8-bit host)

### **Network Devices**
- **Hub**: Physical layer, broadcasts to all ports (collision domain)
- **Switch**: Data link layer, learns MAC addresses, separate collision domains
- **Router**: Network layer, forwards packets between different networks
- **Gateway**: Application layer, protocol conversion

### **Network Security**
- **Firewall**: Filters network traffic based on rules
- **Encryption**: Protects data confidentiality (AES, RSA)
- **Authentication**: Verifies user identity (passwords, certificates)
- **VPN**: Virtual Private Network for secure remote access

### **Network Performance**
- **Bandwidth**: Maximum data transfer rate
- **Latency**: Time delay in data transmission
- **Throughput**: Actual data transfer rate achieved
- **Packet Loss**: Percentage of packets lost during transmission

---

## ðŸŽ¯ **COMMON INTERVIEW SCENARIOS**

### **Problem-Solving Framework**
1. **Understand the Problem**: Clarify requirements and constraints
2. **Design Approach**: Choose appropriate algorithms/data structures
3. **Code Implementation**: Write clean, optimized code
4. **Test & Debug**: Consider edge cases and error handling
5. **Optimize**: Analyze time/space complexity and improve if needed

### **Key Interview Tips**
- **Think Out Loud**: Explain your thought process
- **Start Simple**: Begin with brute force, then optimize
- **Consider Edge Cases**: Empty inputs, null values, boundary conditions
- **Practice Coding**: Use whiteboard or online platforms
- **Ask Questions**: Clarify ambiguous requirements

### **Common Complexity Patterns**
- **O(1)**: Hash table lookup, array access
- **O(log n)**: Binary search, balanced tree operations
- **O(n)**: Linear search, single loop
- **O(n log n)**: Merge sort, heap sort
- **O(nÂ²)**: Nested loops, bubble sort
- **O(2^n)**: Recursive fibonacci, subset generation

---

## ðŸ“‹ **Quick Reference Checklist**

### **Before Interview**
- [ ] Review core concepts in all subjects
- [ ] Practice coding problems on platforms like LeetCode
- [ ] Understand time/space complexity analysis
- [ ] Prepare examples and real-world applications
- [ ] Mock interview sessions with peers

### **During Interview**
- [ ] Listen carefully to the problem statement
- [ ] Ask clarifying questions
- [ ] Think aloud and communicate your approach
- [ ] Write clean, readable code
- [ ] Test your solution with examples
- [ ] Be prepared to optimize and discuss alternatives

### **Key Concepts to Remember**
- [ ] DSA: Arrays, linked lists, trees, graphs, sorting, searching, DP
- [ ] OOPs: Encapsulation, inheritance, polymorphism, abstraction
- [ ] DBMS: Normalization, SQL joins, ACID properties, indexing
- [ ] OS: Process management, memory management, deadlock, scheduling
- [ ] CN: OSI model, TCP/IP, routing, network security

**Good luck with your technical interview! Remember to stay calm, think clearly, and demonstrate your problem-solving approach.**