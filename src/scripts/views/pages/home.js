import RestoSource from '../../data/resto-source';
import { createHomePageContent } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="hero">
    <div class="hero__inner">
      <h1 class="hero__title">PergiKuliner</h1>
      <p class="hero__tagline">Bingung Mau Makan Dimana? PergiKuliner Ajaa</p>
    </div>
  </div>
      <section id="content" class="headline">
        <h1 class="headline_tagline">Explore Restaurant</h1>
        <div class="form"> 
          <div class="list">
            <div class="menu" id="restaurant"> </div>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestoSource.home();
    const restaurantList = document.querySelector('#restaurant');
    restaurants.forEach((restaurant) => {
      restaurantList.innerHTML += createHomePageContent(restaurant);
    });
  },
};

export default Home;
