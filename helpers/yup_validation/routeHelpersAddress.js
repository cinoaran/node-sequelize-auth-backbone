const Yup = require('yup');

module.exports = {

  validateParamsAddress: (schema, name) => {
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

   validateBodyAddress: (schema) => {
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
  schemasAddress: {
    addressSchemas: Yup.object().shape({
      addressStreet: Yup.string()
      .min(3, 'Address requires min chars 3 max chars 30')
      .max(30, 'Address requires min chars 3 max chars 30')
      .required('Address key is required'),
      addressZip: Yup.string()
      .min(3, 'Zip requires min chars 3 max chars 30')
      .max(30, 'Zip requires min chars 3 max chars 30')
      .required('Zip key is required'),
      addressCity: Yup.string()
      .min(3, 'City requires min chars 3 max chars 30')
      .max(30, 'City requires min chars 3 max chars 30')
      .required('City key is required'),
      addressCountry: Yup.string()
      .min(3, 'Country requires min chars 3 max chars 30')
      .max(30, 'Country requires min chars 3 max chars 30')
      .required('Country key is required'),
    }),
    
    idSchemaAddress: Yup.object().shape({
      param: Yup.string().min(1).max(3),
    }),
  },
};
