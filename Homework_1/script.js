// 1)
const arr = [1, 5, 7, 9];
const min = Math.min(...arr);

// 2)
function createCounter() {
  let count = 0;

  return {
    increment: function() {
      count++;
    },
    decrement: function() {
      count--;
    },
    getCount: function() {
      return count;
    }
  };
}

// 3)
function findElementByClass(root, className) {
  if (root.classList && root.classList.contains(className)) {
    return root;
  }

  const children = root.children;
  for (let i = 0; i < children.length; i++) {
    const foundElement = findElementByClass(children[i], className);
    if (foundElement) {
      return foundElement;
    }
  }

  return null;
}