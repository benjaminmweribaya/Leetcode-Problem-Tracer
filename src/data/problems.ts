import { Difficulty } from '@/state/tracker';

export interface ProblemRow {
  id: string;
  title: string;
  difficulty: Difficulty;
  topics: string[];
  url: string;
}

export const PROBLEMS: ProblemRow[] = [
  { id: '1', title: 'Two Sum', difficulty: 'Easy', topics: ['Array', 'Hash Table'], url: 'https://leetcode.com/problems/two-sum' },
  { id: '2', title: 'Add Two Numbers', difficulty: 'Medium', topics: ['Linked List', 'Math'], url: 'https://leetcode.com/problems/add-two-numbers' },
  { id: '3', title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', topics: ['Hash Table', 'String', 'Sliding Window'], url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters' },
  { id: '4', title: 'Median of Two Sorted Arrays', difficulty: 'Hard', topics: ['Array', 'Binary Search'], url: 'https://leetcode.com/problems/median-of-two-sorted-arrays' },
  { id: '5', title: 'Merge Two Sorted Lists', difficulty: 'Easy', topics: ['Linked List'], url: 'https://leetcode.com/problems/merge-two-sorted-lists' },
  { id: '6', title: 'Valid Parentheses', difficulty: 'Easy', topics: ['Stack', 'String'], url: 'https://leetcode.com/problems/valid-parentheses' },
  { id: '7', title: 'Binary Tree Level Order Traversal', difficulty: 'Medium', topics: ['Tree', 'BFS'], url: 'https://leetcode.com/problems/binary-tree-level-order-traversal' },
  { id: '8', title: 'Coin Change', difficulty: 'Medium', topics: ['DP'], url: 'https://leetcode.com/problems/coin-change' },
  { id: '9', title: 'Word Ladder', difficulty: 'Hard', topics: ['BFS'], url: 'https://leetcode.com/problems/word-ladder' },
  { id: '10', title: 'Number of Islands', difficulty: 'Medium', topics: ['DFS', 'BFS'], url: 'https://leetcode.com/problems/number-of-islands' },
  { id: '11', title: 'LRU Cache', difficulty: 'Medium', topics: ['Design', 'Hash Table'], url: 'https://leetcode.com/problems/lru-cache' },
  { id: '12', title: 'Regular Expression Matching', difficulty: 'Hard', topics: ['DP', 'String'], url: 'https://leetcode.com/problems/regular-expression-matching' },
];

export const ALL_TOPICS = Array.from(new Set(PROBLEMS.flatMap(p => p.topics))).sort();
