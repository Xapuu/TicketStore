const Event = require('mongoose').model('Event')
const Box = require('mongoose').model('Box')


module.exports = {
  index: (req, res) => {
    Event.find({approved:true})
      .sort({ eventDate: -1 })
      .limit(12)
      .populate('author')
      .then(elems => {
        let auth = false
        if (req.user) {
          elems.map(x => (x.user = true))
        }
        res.render('home/index', { elems, auth })
      })
  },
  profileView: (req, res) => {
    let currentUserId = req.user.id
    let atend = req.user.cart

    Event.find({ author: currentUserId }).sort({ eventDate: -1 }).then(elems =>
      Event.find({ _id: { $in: atend } }).then(myEvents => {
        {
          res.render('user/myProfile', { elems, myEvents })
        }
      })
    )
  },
  myMessagesView:(req,res)=>{
    let currentUserId = req.user.id

    Box.findOne({userId:currentUserId}).populate('notifications.sendFromUser').then(box=>{
      
    let messages = box.notifications.sort((a,b)=>b.dateSend-a.dateSend)
      res.render('user/messages',{messages})
    }).catch(err=>{
      res.render('user/myProfile')
    })
  }
}
