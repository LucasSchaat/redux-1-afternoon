import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./../RecipeCard/RecipeCard";
import store from './../../store'
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    const reduxStore = store.getState()
    this.state = {
      recipes: reduxStore.recipes
    };
  }

  componentDidMount () {
    store.subscribe( () => {
      const reduxStore = store.getState()
      this.setState({ recipes: reduxStore.recipes })
    })
  }

  render() {
    const recipes = this.state.recipes.map((recipe, index) => {
      return (
        <RecipeCard
          recipes={this.state.recipes}
          index={index}
          name={recipe.recipeName}
          category={recipe.recipeCategory}
          authorFirst={recipe.authorFirst}
          authorLast={recipe.authorLast}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;
