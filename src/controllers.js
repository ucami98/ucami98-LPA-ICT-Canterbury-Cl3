users = require('./models')

newUserController.create = async(req, res) =>{
    const { firstName, lastName, user, email, password, phone, DoB } = req.body
    const newUser = new users({
      firstName: firstName,
      lastName: lastName,
      user: user,
      email: email,
      password: password,
      phone: phone,
      DoB: DoB
    })
    await newUser.save()
    res.json(users)
  }
  
