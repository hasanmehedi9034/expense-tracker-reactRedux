import React from "react";
import "./App.css";
import Balance from "./components/Balance";
import Form from "./components/Form";
import Transactions from "./components/Transactions";
import Layout from "./components/mainLayout/Layout";

function App() {
  return (
    <Layout>
      <Balance />
      <Form />
      <Transactions />
    </Layout>
  );
}

export default App;
