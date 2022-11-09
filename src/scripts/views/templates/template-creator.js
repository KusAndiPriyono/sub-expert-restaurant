import API_ENDPOINT from "../../globals/api-endpoint";

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${
    API_ENDPOINT.RESTAURANT_IMAGE + restaurant.pictureId
  }" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Categories</h4>
    <p>${restaurant.categories}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Overview</h3>
    <p>${restaurant.description}</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
  <div class="restaurant-item__header">
    <img class="restaurant-item__header__poster" src="${
      API_ENDPOINT.RESTAURANT_IMAGE + restaurant.pictureId
    }" alt="${restaurant.name}" title="${restaurant.name}">
    <div class="city">${restaurant.city}</div>
    <div class="restaurant-item__header__rating">
      <p>Rating: <span class="restaurant-item__rating__score">${
        restaurant.rating
      }</span></p>
    </div>
  </div>
  <div class="restaurant-item__content">
    <h3><a href=${`/detail/${restaurant.id}`}>${restaurant.name}</a></h3>
    <p>${restaurant.description.substring(0, 100)}</p>
  </div>
  </div> 
`;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
