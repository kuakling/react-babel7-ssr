import express from 'express'
import products from './products.json'
const router = express.Router()

// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })
// define the home page route
router.get('/', (req, res) => {
  res.send(products)
})
// define the about route
router.get('/:ProductId', (req, res) => {
  const picked = products.find(o => o.ProductId === req.params.ProductId);
  if (picked) {
    res.send(picked)
  } else {
    res.status(404).send({})
  }
})

router.post('/', (req, res) => {
  res.send({
    "ProductId": req.body.ProductId,
    "Category": req.body.Category,
    "MainCategory": req.body.MainCategory,
  })
})

router.put('/:ProductId', (req, res) => {
  const picked = products.find(o => o.ProductId === req.params.ProductId);
  if (picked) {
    picked.Category = req.body.Category
    picked.MainCategory = req.body.MainCategory
    res.send(picked)
  } else {
    res.status(404).send({})
  }
})

router.delete('/:ProductId', (req, res) => {
  const picked = products.find(o => o.ProductId === req.params.ProductId);
  if (picked) {
    res.send({message: `${req.params.ProductId} Deleted.`})
  } else {
    res.status(404).send({})
  }
})

module.exports = router