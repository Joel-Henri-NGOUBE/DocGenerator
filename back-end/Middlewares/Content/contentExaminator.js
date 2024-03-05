// app.use(cookies())

// Données à avoir
/*
  company 
      company.name
      company.siren
      company.street
      company.zipcode
      company.city
      company.country
      company.phone
      company.mail
      company.site
  
  modalities
      performaneTitle
      performaneDescription
      quantity
      unitPrice
      tva

  client
      client.name
      client.street
      client.zipcode
      client.city
      client.phone

  quotation
      // quotation.date
      // quotation.reference
      quotation.validity
      quotation.sender
      quotation.performanceDate

*/

const contentExaminator = (req, res, next) => {
    req.body.company
    req.body.wantsToSign
    // En principe les requêtes arrivent au format JSON
    // Si méthode vaut GET analyser req.query
    // Si méthode vaut POST analyser req.body
  
}

module.exports = { contentExaminator }