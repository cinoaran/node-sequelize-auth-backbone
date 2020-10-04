const Yup = require('yup');

module.exports = {
  validateParamsAddress: (schema, name) => {
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

  validateBodyAddress: (schema) => {
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
  schemasAddress: {
    addressSchemas: Yup.object().shape({
      addressStreet: Yup.string()
        .min(2)
        .max(30)
        .required('Please enter your Street'),
      addressZip: Yup.string()
        .min(2)
        .max(30)
        .required('Please enter your Zip code'),
      addressCity: Yup.string()
        .min(2)
        .max(30)
        .required('Please enter your City'),
      addressCountry: Yup.string()
        .min(2)
        .max(30)
        .required('Please enter your Country'),
    }),
    idSchemaAddress: Yup.object().shape({
      param: Yup.string().min(1).max(3),
    }),
  },
};