import RestoIdb from '../../data/resto-idb';
import { createHomePageContent } from '../templates/template-creator';

const Favorit = {
  async render() {
    return `
        <div class="hero">
        <div class="hero__iner">
          <h1 class="hero__title">PergiKuliner</h1>
          <p class="hero__tagline">Bingung Mau Makan Dimana? PergiKuliner Ajaa</p>
        </div>
      </div>
      <section id="content" class="headline">
        <h1 class="headline_tagline">Favorite Restaurant</h1>
        <div class="form">
          <div class="list">
            <div class="menu" id="restaurant"> </div>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestoIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurant');

    try {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML
          += createHomePageContent(restaurant);
      });
      if (restaurants.length === 0) {
        restaurantsContainer.innerHTML += `
            <div class="notfound">
              <p>Restaurant Favorit not found</p>
            </div>
        `;
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default Favorit;
