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
      clientKey: Yup.string().min(3).max(30).required('Client key is required'),
      clientCompany: Yup.string()
        .min(3)
        .max(30)
        .required('Company is required'),
      clientPerson: Yup.string().min(3).max(30).required('Person is required'),
      clientEmail: Yup.string()
        .email('You have to enter valid Email address !!!')
        .required('Please provide Email address'),
      clientPhone: Yup.string()
        .min(3)
        .max(30)
        .required('Phone key is required'),
      clientFax: Yup.string().min(3).max(30).required('Fax key is required'),
      clientMobile: Yup.string().min(3).max(30),
    }),
    idSchema: Yup.object().shape({
      param: Yup.string().min(1).max(3),
    }),
  },
};
