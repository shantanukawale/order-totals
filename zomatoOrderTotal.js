const rp = require('request-promise')

const query = {
  page: 1
}

const options = {
  uri: "https://www.zomato.com/webroutes/user/orders",
  method: 'GET',
  qs: query,
  headers: {
    cookie: "zomato cookie goes here",
    "content-type":"application/json",
    "host": "www.zomato.com",
    connection: "keep-alive",
    gzip: true
  },
  json: true
}


const doTotal = async () => {
  console.time("Time taken for execution")
  let total = 0.0
  let results = []
  do {
    for (const order of results) {
      if (order.deliveryDetails.deliveryLabel === "Delivered") {
        const price = parseFloat(order.totalCost.split("").slice(1).join``)
        console.log("Order price:", price)
        total += price
      }
    }
    console.log("current total:", total)
    let res
    try {
      res = await rp(options)
    } catch (err) {
      console.log(err)
    }
    // console.log("Response for page:", query.page, res)
    results = Object.values(res.entities.ORDER)
    query.page++
  } while (results.length)
  console.log("Total zomato spends:", total)
  console.timeEnd("Time taken for execution")
}

doTotal()