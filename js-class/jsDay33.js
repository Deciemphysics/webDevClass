// Tree data structure. There are hundreds of types of tree implementations. 
// We will be looking at one of them.

// We start with a linked list, then have things off it. So nodes can have 0 or more 
// following nodes. We call these children.

// Nodes with no children are considered leaf nodes.

// Also, there is a concept of levels. Please see the image
// https://koenig-media.raywenderfich.com/uploads/2016/06/Tree-2-650x300.png

// Closest analogue is in genealogy 

// The first that you start with is the root. 

// The extends keyword creates a child class
class BinaryTree {
    constructor() {
        this.root = null;
    }
    find(word) {
        return search(this.root, word);

        function search(node, word) {
            if (node == null) {
                return undefined;
            }
            if (lower(node.word) == lower(word)) {
                return node;
            }
            if (lower(word) < lower(node.word)) {
                return search(node.leftChild, word);
            } else {
                return search(node.rightChild, word);
            }
        }

        function lower(str) {
            return str.toLowerCase();
        }
    }
    add(word) {
        if (this.root == null) {
            this.root = new TreeNode(word);
        } else {
            return insert(this.root, null, word);
        }

        function insert(node, prev, word) {
            if (node == null) {
                if (lower(word) < lower(prev.word)) {
                    prev.leftChild = new TreeNode(word);
                } else {
                    prev.rightChild = new TreeNode(word);
                }
            } else {
                if (lower(word) == lower(node.word)) {
                    return;
                } else if (lower(word) < lower(node.word)) {
                    insert(node.leftChild, node, word);
                } else {
                    insert(node.rightChild, node, word);
                }
            }
        }

        function lower(str) {
            return str.toLowerCase();
        }

    }

    remove() {
        if (this.root == null) {
            return false;
        }
        if (this.root.word == word) {
            if (this.root.leftChild == null && this.root.rightChild == null) {
                this.root = null;
            } else if (this.root.leftChild == null) {
                this.root = this.root.rightChild;
            } else if (this.root.rightChild == null) {
                this.root = this.root.leftChild;
            } else {
                let held = findBottom(this.root.leftChild);
                let left = held.rightChild.leftChild;
                held.rightChild.rightChild = this.root.rightChild;
                held.rightChild.leftChild = this.root.leftChild;
                this.root = held.rightChild;
                held.rightChild = left;
            }
        } else {
            return remove(this.root, null, word);
        }

        function findBottom(node) {
            if (node.rightChild.rightChild == null) {
                return node;
            } else {
                return findBottom(node.rightChild);
            }
        }

        function remove(node, prev, word) {
            if (node == null) {
                return undefined;
            }
            if (lower(node.word) == lower(word)) {
                if (node.leftChild == null && node.rightChild == null){
                    
                } else if ( node.leftChild == null){
                    
                } else if ( node.rightChild == null){

                } else {
                    let held = findBottom(node);
                }
            }
            if (lower(word) < lower(node.word)) {
                return remove(node.leftChild, node, word);
            } else {
                return remove(node.rightChild, node, word);
            }
            
            // if (node.leftChild == null && node.rightChild == null) {
            //     return false;
            // }
            // if (node.leftChild != null && node.rightChild != null){

            // }
            // if (node.leftChild != null) {
            //     if (node.leftChild.word == word) {

            //     } else {

            //     }

            // } else {

            // }
            // if (node.rightChild != null) {
            //     if (node.rightChild.word == word) {

            //     } else {

            //     }
            // } else {

            // }


        }

        function lower(str) {
            return str.toLowerCase();
        }
    }
}
class TreeNode {
    constructor(word) {
        this.word = word;
        this.leftChild = null;
        this.rightChild = null;
    }
}