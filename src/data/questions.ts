import {ReactQuestions} from "../types/page.type";

export const reactQuestion:ReactQuestions[] = [
  {
    id:1,
    question: "What is React primarily used for?",
    options: [
      "Building mobile applications",
      "Creating interactive user interfaces",
      "Managing databases",
      "Styling web applications",
    ],
    correctAnswer: 1,
  },
  {
    id:2,
    question: "Which React hook is used to manage state in functional components?",
    options: [
      "useEffect",
      "useState",
      "useReducer",
      "useContext",
    ],
    correctAnswer: 1,
  },
  {
    id:3,
    question: "What is JSX in React?",
    options: [
      "A syntax extension for JavaScript to write HTML-like code",
      "A templating language for React",
      "A debugging tool for React applications",
      "A state management library",
    ],
    correctAnswer: 0,
  },
  {
    id:4,
    question: "What does the useEffect hook do?",
    options: [
      "Handles state updates",
      "Performs side effects like data fetching",
      "Creates reusable components",
      "Manages routing in the application",
    ],
    correctAnswer: 1,
  },
  {
    id:5,
    question: "What is the purpose of React's virtual DOM?",
    options: [
      "To enhance server-side rendering",
      "To directly manipulate the browser DOM",
      "To improve performance by updating only changed parts of the UI",
      "To create custom hooks",
    ],
    correctAnswer: 2,
  },
  {
    id:6,
    question: "Which of the following is NOT a built-in React hook?",
    options: [
      "useMemo",
      "useCallback",
      "useRouter",
      "useEffect",
    ],
    correctAnswer: 2,
  },
  {
    id:7,
    question: "How do you pass data from a parent component to a child component?",
    options: [
      "Using state",
      "Using props",
      "Using context",
      "Using Redux",
    ],
    correctAnswer: 1,
  },
  {
    id:8,
    question: "What is a key in React, and why is it important?",
    options: [
      "A unique identifier used for DOM elements to optimize rendering",
      "A reference to a child component",
      "A way to pass functions as props",
      "A special property for class components",
    ],
    correctAnswer: 0,
  },
  {
    id:9,
    question: "What is the purpose of React.Fragment?",
    options: [
      "To define state for components",
      "To wrap multiple elements without adding an extra DOM node",
      "To perform side effects in functional components",
      "To memoize expensive calculations",
    ],
    correctAnswer: 1,
  },
  {
    id:10,
    question: "Which of the following best describes React Context?",
    options: [
      "A way to pass data through the component tree without props",
      "A method to fetch data from APIs",
      "A library for routing in React applications",
      "A hook for managing component state",
    ],
    correctAnswer: 0,
  },
];
