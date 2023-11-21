import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer EvC2Dc5ql2SZwUIfnKlbTE5HvO8Ui7YEVNAelCgJCHyAQjR39DGewMz-OE3yVaICtU1BN2N1QqYk8UOvmyPwXMsEfXQ0hidWGr_i5-DDMBBlwMX6p6wLR1rWb2VbZXYx",
  },
});
