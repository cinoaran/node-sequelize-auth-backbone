const Yup = require('yup');

module.exports = {
  
  validateParamsClient: (schema, name) => {
    return async(req, res, next) => {
      if (!req.value) req.value = {};
      if (!req.value['body']) req.value['body'] = {};
        try {
            const paramValidated = await schema.validate({ param: req['params'][name] }, schema); 
            console.log(paramValidated);
        
        } catch (err) {
            console.log(err);
            return res.status(400).json(err.message);
        }                    
      next();
    };
  },

   validateBodyClient: (schema) => {
    return async (req, res, next) => {
        if (!req.value) req.value = {};
        if (!req.value['body']) req.value['body'] = req.body;
        try {
            const schemaValidated = await schema.validate(req.value['body']);
            console.log(schemaValidated);
        
        } catch (err) {
            console.log(err);
            return res.status(400).json(err.message);
        }
      next();
    };
  }, 

  schemasClient: {
    clientSchemas: Yup.object().shape({
      clientKey: Yup.string().min(3).max(30),
      clientCompany: Yup.string()
        .min(3, 'Company requires min chars 3 max chars 30')
        .max(30, 'Company requires min chars 3 max chars 30')
        .required('Company key is required'),      
      clientEmail: Yup.string()
        .email('You have to enter valid Email address !!!')
        .required('Please provide Email address'),
      clientPhone: Yup.string()
        .min(3, 'Phone requires min chars 3 max chars 30')
        .max(30, 'Phone requires min chars 3 max chars 30')
        .required('Phone key is required'),
      clientFax: Yup.string()
        .min(3, 'Fax requires min chars 3 max chars 30')
        .max(30, 'Fax requires min chars 3 max chars 30')
        .required('Fax number is required'),
      clientMobile: Yup.string()
        .min(3, 'Mobile requires min chars 3 max chars 30')
        .max(30, 'Mobile requires min chars 3 max chars 30')
        .required('Mobile number is required'),
      clientText: Yup.string().max(300, 'Comment charset max 300!')    
      
    }),
    idSchema: Yup.object().shape({
      param: Yup.string().min(1).max(3),
    }),
  },
};
