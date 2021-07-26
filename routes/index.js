const adminRouter = require('express').Router()

const BorrowerRouter = require('./borrower')
const LoanRouter = require('./loan')
const PlanRouter = require('./plan')
const PaymentRouter = require('./payment')
const TypeRouter = require('./type')
const LoginRouter = require('./login')
const UserRouter = require('./user')

const authorization_middleware = (req, res, next) => {
  if (req.session?.user) next()
  else res.redirect('/login')
}

const logout = (req, res) => {
  req.session.user = null
  req.session.loggedIn = false
  res.redirect('/login')
}

// adminRouter.use('/shop', ShopRouter)

adminRouter.use('/login', LoginRouter)

// adminRouter.use(authorization_middleware)

adminRouter.get('/', (req, res) => res.render('dashboard'))

adminRouter.get('/dashboard', (req, res) => res.render('dashboard'))

adminRouter.use('/loans', LoanRouter)

adminRouter.use('/types', TypeRouter)

adminRouter.use('/payments', PaymentRouter)

adminRouter.use('/plans', PlanRouter)

adminRouter.use('/borrowers', BorrowerRouter)

adminRouter.use('/users', UserRouter)

adminRouter.get('/logout', logout)

module.exports = adminRouter