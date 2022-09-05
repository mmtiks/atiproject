import axios from "axios";

const RENTAL_API_BASE_URL = "http://localhost:8080/api/v1/rentals";
const HISTORY_API_BASE_URL = "http://localhost:8080/api/v1/history";
const ITEMS_API_BASE_URL = "http://localhost:8080/api/v1/items";

class RentalService {
  getRentalByItemCode(code) {
    return axios.get(RENTAL_API_BASE_URL + "/code/" + code);
  }

  getItemById(id) {
    return axios.get(ITEMS_API_BASE_URL + "/" + id);
  }

  saveRental(rental) {
    return axios.post(RENTAL_API_BASE_URL, rental);
  }

  historyRental(rental){
    return axios.post(HISTORY_API_BASE_URL, rental);
  }

  getRentals() {
    return axios.get(RENTAL_API_BASE_URL);
  }

  deleteRental(id) {
    return axios.delete(RENTAL_API_BASE_URL + "/" + id);
  }

  getRentalById(id) {
    return axios.get(RENTAL_API_BASE_URL + "/" + id);
  }

  updateRental(rental, id) {
    return axios.put(RENTAL_API_BASE_URL + "/" + id, rental);
  }
}

export default new RentalService();
