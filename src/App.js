import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Field from "./Components/Fields/Field";

class App extends Component {
  state = {
    products: [

    ],
    name: "Potato",
    price: 0,
    total: 0,
    note: '',

    accordionActive: false
  };

  addItem = async () => {
    let products = [...this.state.products];

    let name = this.state.name;
    let price = this.state.price;
    let note = this.state.note;

    if (name === '' || price === 0) {
      alert('Not allow emty fields or 0 price');
      return;
    }
    
    if (products[0] && products[0].toRemove === true) {
      products.pop();
    }
    
    let product = {
      name: name,
      price: price,
      count: 1,
      note: note,
      id: 1 + this.getLastChild(products),
    }

    for (let i = 0; i < products.length; i++) {
      let item = products[i];
      if (item.name === name) {
        item.count += 1;
        item.price = price;
        item.note = note;
        this.setState({ products });
        this.getTotal();
        localStorage.setItem('Products', JSON.stringify(products));
        return;
      }
    }

    products.push(product);

    await this.setState({ products });

    localStorage.setItem('Products', JSON.stringify(products));

    this.getTotal()
  };

  getLastChild  = (arr) => {
    let item;
    if (arr[arr.length - 1] === undefined) {
      item = 0;
    } else {
      item = arr[arr.length - 1].id
    }

    return item
  }

  setName = (event) => {
    let name = event.target.value;
    this.setState({ name });
  };

  setPrice = (event) => {
    let price = +event.target.value;
    this.setState({ price });
  };

  setNote = (event) => {
    let note = event.target.value;
    this.setState({ note });
    console.log(note);
  }

  async componentDidMount() {
    let products = localStorage.getItem('Products');
    if (products) {
      products = JSON.parse(products);
      await this.setState({products})
      this.getTotal()
    }
  }

  removeItem = (event) => {
    let name = event.target.closest('.info__remove').dataset.name;

    let products = [...this.state.products];

    // let reduce = {
    //   // let price = products.reduce( (acc, item) => {
    // //   acc = 0
    // //   console.log(acc);
    // //   if (item.name === name) {
    // //     let tot = item.count * item.price

    // //     console.log(tot, item.count, item.price);

    // //     // // if (index == 0) {
    // //     // //   products.shift()
    // //     // // } else {
    // //     // //   products.splice(index - 1, 1)
    // //     // // }

    // //     // // products.pop()

    // //     // // console.log(acc, item);

    // //     // console.log(products);

    // //     return acc + tot;
    // //   }
    // // }, 0)
    // }

    let toRemove = global.confirm('Вы согласны удалить?')

    if (!toRemove) {
      return;
    }

    let num = 0;
    let price;

    for (let i = 0; i < products.length; i++)  {
      let item = products[i];

      if (item.name === name) {
        let tot = item.count * item.price

        if (i === 0) {
          products.shift()
        } else {
          console.log(i);
          products.splice(i, 1)
        }

        price = num + tot;
      }
    }

    this.setState({total: this.state.total - price, products})
    localStorage.setItem('Products', JSON.stringify(products))
  };

  getTotal = () => {
    let products = [...this.state.products];
    let total = products.reduce((acc, item) => {
      return acc += (item.price * item.count);
    }, 0)

    this.setState({total})
  }

  service = {
    Accordion : () => this.setState({accordionActive: !this.state.accordionActive})
  }

  render() {
    return (
      <>
        <Field
          products={this.state.products}
          addItem={this.addItem}
          setName={this.setName}
          setPrice={this.setPrice}
          removeItem={this.removeItem}
          key="main"
          total={this.state.total}
          name={this.state.name}
          price={this.state.price}
          accordionActive={this.state.accordionActive}
          accordionToggle={this.service.Accordion}
          note={this.state.note}
          setNote={this.setNote}
        ></Field>

        {/* {console.log(this.service.Accordion)} */}
      </>
    );
  }
}

export default App;
