const rp = require('request-promise')
const query = {}

const options = {
  uri: "https://www.swiggy.com/dapi/order/all",
  method: 'GET',
  qs: query,
  headers: {
    cookie: "swiggy cookie goes here",
    "content-type":"application/json",
    "host": "www.swiggy.com",
    connection: "keep-alive",
    "user-agent": "PostmanRuntime/7.28.4",
    gzip: true
  },
  json: true
}

const doTotal = async () => {
  console.time("Time taken for execution:")
  let total = 0.0
  let results = []
  do {
    for (const order of results) {
      if (order.order_status === "Delivered") {
        const price = order.order_total
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
    results = res.data.orders
    query.order_id = results.length ? results[results.length-1].order_id : undefined
  } while (results.length)
  console.log("Total Swiggy spends:", total)
  console.timeEnd("Time taken for execution")
}

doTotal()