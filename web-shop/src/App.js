import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import products from "./data/products.json";
import Items from "./components/Items";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: products
    }
  }

  render() {
    return (
      <div style={{margin: '20px 120px'}}>
        <Header />

        <Items items={this.state.items} />
  
        <Footer />
      </div>
    );
  }
}

export default App;
