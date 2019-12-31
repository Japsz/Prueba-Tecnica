var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
const axios = require('axios')

router.post('/getLogin', function (req, res) {
  if(typeof req.body == 'object' && req.body.username && req.body.password){
    axios.get(`${process.env.JSON_SERVER}/profile?username=${req.body.username}&password=${req.body.password}`).then(result => {
      if(result.data.length){
        let token = jwt.sign({...result.data[0], exp: Math.floor(Date.now() / 1000) + (30 * 60),}, req.app.get('secretToken')) //firmar token con 30 minutos de vida
        res.json({
          err: false,
          token: token,
        })
      } else {
        res.json({
          err: true,
          msg: 'Usuario y/o Contraseña Incorrectos',
        })
      }
    }).catch(e => res.sendStatus(500))
  } else res.sendStatus(406)
})

router.options('/checkToken', function(req,res) {
  res.sendStatus(200)
})

router.post('/checkToken', function (req, res) {
  if (typeof req.body.token == 'string') {
    try{
      const decoded = jwt.verify(req.body.token, req.app.get('secretToken'))
      res.header('status', '200').send(decoded)
    } catch(e){
      switch(e.name){
        case 'TokenExpiredError':
          res.header('status', '401').send(e)
          break;
        case 'JsonWebTokenError':
          res.header('status', '409').send(e)
          break;
        default:
          res.header('status', '403').send(e)
          break;
      }
    }
  } else {
    res.header('status', '401').send({err: true, error: 'Token Invalido'})
  }
})

module.exports = router;
