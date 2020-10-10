const Yup = require('yup');

module.exports = {
  validateParamsClient: (schema, name) => {
    return (req, res, next) => {
      schema
        .validate({ param: req['params'][name] }, schema)
        .then((result) => {
          if (!req.value) req.value = {};
          if (!req.value['body']) req.value['body'] = {};
          req.value['body'] = result.value;
        })
        .catch((err) => res.status(400).json(err.message));

      next();
    };
  },

  validateBodyClient: (schema) => {
    return (req, res, next) => {
      if (!req.value) req.value = {};
      if (!req.value['body']) req.value['body'] = req.body;
      console.log(req.value['body']);
      schema
        .validate(req.value['body'])
        .then((result) => {          
          req.value['body'] = result.value;
        })
        .catch((err) => res.status(400).json(err.message));
        
      next();
    };
  },
  schemasClient: {
    clientSchemas: Yup.object().shape({
      client_key: Yup.string().min(3).max(30),
      client_company: Yup.string()
        .min(3)
        .max(30)
        .required('Company is required'),
      client_person: Yup.string().min(3).max(30).required('Person is required'),
      client_email: Yup.string()
        .email('You have to enter valid Email address !!!')
        .required('Please provide Email address'),
      client_phone: Yup.string()
        .min(3)
        .max(30)
        .required('Phone key is required'),
      client_fax: Yup.string().min(3).max(30).required('Fax key is required'),
      client_mobile: Yup.string().min(3).max(30),
      client_range: Yup.string().min(3).max(3),
    }),
    idSchema: Yup.object().shape({
      param: Yup.string().min(1).max(3),
    }),
  },
};
