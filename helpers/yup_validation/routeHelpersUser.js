const Yup = require('yup');

module.exports = {
  validateParamsUser: (schema, name) => {
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

  validateBodyUser: (schema) => {   
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
  schemasUser: {
    userSchema: Yup.object().shape({
      clientKey: Yup.string().min(3).max(30).required('Client key is required'),
      userName: Yup.string().min(3).max(30).required('Username is obligatory'),
      userEmail: Yup.string()
        .email('You have to enter valid Email address !!!')
        .required('Please provide Email address'),
      userPassword: Yup.string()
        .min(3)
        .max(30)
        .required(
          'Username is obligatory min 3 characters and max 30 characters'
        ),
    }),
    idSchema: Yup.object().shape({
      param: Yup.string().min(1).max(3),
    }),
  },
};
