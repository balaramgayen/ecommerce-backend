const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY =
  "sk_test_51KBdvASCPXj2si8Y20Zm5ir1zLSiQDK3Yu5rl9WlD0efnyGebWs7SM8XYNdAMeRF9qk3rpxAEoLWJfrmbdFccNUV00rNfqagqa";
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
