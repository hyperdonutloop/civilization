const router = require('express').Router();

let units = [
  {
    id: 1,
    name: 'Warrior',
    type: 'melee',
    attack: 10,
    defense: 20,
  }
];

let nextUnitId = 2;

router.get('/', (req, res) => {
  res.status(200).json(units);
})

router.get('/:id', (req, res) => {
  
})

router.post('/', (req, res) => {
  unitInformation = {id: nextUnitId++, ...req.body };

  units = [ ...units, unitInformation]

  res.status(201).json(unitInformation)
})

router.put('/:id', (req, res) => {
  
})

router.delete('/:id', (req, res) => {
  
})

module.exports = router;