import React, { Component } from "react";
import Header from "./Shared/Header";
import CardList from "./CardList";

const Data = [
  {
    Title: "Haley-Toy",
    Body:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
  },
  {
    Title: "Renner Group",
    Body:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
  },
  {
    Title: "Kassulke Group",
    Body:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
  },
  {
    Title: "Buckridge, Dietrich and West",
    Body:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
  },
  {
    Title: "Morar, Bogisich and Will",
    Body:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
  },
  {
    Title: "Greenholt-Hagenes",
    Body:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
  },
  {
    Title: "Flatley-Tremblay",
    Body:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
  },
  {
    Title: "Heaney Group",
    Body:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
  },
  {
    Title: "Kerluke and Sons",
    Body:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
  }
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header dark={true}>Leadstagram</Header>
        <CardList Data={Data} />
      </div>
    );
  }
}

export default App;
