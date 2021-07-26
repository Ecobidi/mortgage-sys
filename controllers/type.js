const MortgageTypeService = require('../services/type')

class MortgageTypeController {

  static async getAllMortageTypes(req, res) {
    let types
    if (req.query.search && req.query.search.length > 1) {
      types = await MortgageTypeService.findByName(req.query.search) 
    } else {
      types = await MortgageTypeService.findAll()
    }
    res.render('types', { types })
  }

  static async createType(req, res) {
    try {
      await MortgageTypeService.save(req.body)
      req.flash('success_msg', 'Type Added')
      res.redirect('/types')
    } catch (error) {
      console.log(error)
      req.flash('error_msg', 'Error adding type')
      req.redirect('/types')      
    }
  }

  static async removeType(req, res) {
    try {
      await MortgageTypeService.removeOne(req.params.type_id)
      res.redirect('/types')
    } catch (err) {
      console.log(err)
      req.flash('error_msg', 'Last Operation Failed')
      res.redirect('/types')
    }
  }

}

module.exports = MortgageTypeController