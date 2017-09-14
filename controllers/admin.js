const Rate = require('mongoose').model('Rate')
const Event = require('mongoose').model('Event')
const User = require('mongoose').model('User')
const Box = require('mongoose').model('Box')

module.exports = {
  setPriceRate: (req, res) => {
    let rate = req.body.priceRate

    Rate.create({ rate: rate }).then(x => {
      // TODO send Notification

      res.redirect('/admin')
    })
  },
  getAdminPanel: (req, res) => {
    Event.find({ approved: false, checked: false }).sort({dateSend:-1}).then(elems => {
      res.render('user/admin', { elems })
    })
  },
  getApprovalView: (req, res) => {
    let id = req.params.id

    Event.findOne({ _id: id }).then(event => {
      res.render('user/approval', { event })
    })
  },
  approvalPositive: (req, res) => {
    let id = req.params.id
    let user = req.user._id

    Event.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          approved: true,
          checked: true
        }
      }
    ).then(e => {
      let authorId = e.author
      Box.update(
        { userId: authorId },
        {
          $push: {
            notifications: {
              sendFromUser: user,
              message: `${e.eventTitle} is aprroved.`
            }
          }
        }
      ).then(x => {
        User.update(
          { _id: authorId },
          {
            $set: {
              msgFlag: true
            }
          }
        ).then(x => {
          res.redirect('/admin')
        })
      })
    })
  },
  approvalNegative: (req, res) => {
    let id = req.params.id

    Event.update(
      { _id: id },
      {
        $set: {
          checked: true
        }
      }
    ).then(e => {
      // TODO send Notification

      res.redirect('/admin')
    })
  }
}
