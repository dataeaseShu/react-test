import React from "react";
interface AppProps {
  message: string,
  children?: React.ReactNode
}
const App: React.FC<AppProps> = ({ message, children }) => (
  <div>
    {message}
    123
    {children}
  </div>
)

export default App

