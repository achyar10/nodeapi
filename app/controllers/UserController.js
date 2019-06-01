import user from '../../app/models/User'

export const getUsers = (req, res) => {
  user.find().exec((error, users) => {
    if (error) {
      return res.json({
        'success': false,
        'message': 'Gagal mengambil users!',
        error
      })
    }
    return res.json({
      'success': true,
      'message': 'Berhasil mengambil users!',
      users
    })
  })
}

export const addUsers = (req, res) => {
  const data = {
    username: req.body.username,
    email: req.body.email,
    fullName: req.body.fullName
  }
  const newAdd = new user(data)
  newAdd.save((error, users) => {
    if(error){
      return res.json({
        'success': false,
        'message': 'Gagal menambah data',
        error
      })
    }
    return res.json({
      'success': true,
      'message': 'Berhasil menambah data',
      users
    })
  })
}

export const getUser = (req, res) => {
  user.find({ _id: req.params.id }).exec((error, user) => {
    if (error) {
      return res.json({
        'success': false,
        'message': 'Gagal mengambil users!',
        error
      })
    }
    return res.json({
      'success': true,
      'message': 'Berhasil mengambil users!',
      user
    })
  })
}

export const updateUser = (req, res) => {
  user.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (error, user) => {
    if(error){
      return res.json({
        'success': false,
        'message': 'Gagal update data',
        error
      })
    }
    return res.json({
      'success': true,
      'message': 'Berhasil update data',
      user
    })
  })
}

export const deleteUser = (req, res) => {
  user.findByIdAndRemove({ _id: req.params.id }).exec((error, user) => {
    if (error) {
      return res.json({
        'success': false,
        'message': 'Terjadi error!',
        error
      })
    }
    return res.json({
      'success': true,
      'message': 'Data berhasil dihapus',
    })
  })
}


