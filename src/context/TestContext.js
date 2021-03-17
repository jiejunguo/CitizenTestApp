import React from "react";
import questions from "../../all_questions.json";

const TestContext = React.createContext();

export const TestProvider = ({ children }) => {
  return <TestContext.Provider value={5}>{children}</TestContext.Provider>;
};

export default TestContext;
