const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product],
  })
  .then((data) => res.json(data))
  .catch(err => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id)
  include: [Product]
})
  .then((data) => res.json(data))
  .catch(err => {
    console.log(err);
    res.status(500)
  });
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then(data => res.status(200).json(data))
  .catch(err => 
    console.log(err);
    res.status(400).json(err))
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then(data => res.status(200).json(data))
  .catch(err => {
    console.log(err);
    res.status(400).json(err)
  })
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    }
  )
  // delete a category by its `id` value
});

module.exports = router;
