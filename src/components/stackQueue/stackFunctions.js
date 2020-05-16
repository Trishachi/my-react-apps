const StackQueueList = {
  fifo: (myList) => {
    myList.shift();
    return myList;
  },

  lifo: (myList) => {
    myList.pop();
    return myList;
  },
};

export default StackQueueList;
