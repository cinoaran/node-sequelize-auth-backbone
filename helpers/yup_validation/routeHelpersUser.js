const Yup = require('yup');

module.exports = {
  
  validateParamsUser: (schema, name) => {
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

   validateBodyUser: (schema) => {
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
  authSchemas: {
    userSchema: Yup.object().shape({  
      userEmail: Yup.string()
        .email('You have to enter valid Email address.')
        .required('Please enter valid email address'),        
      userPassword: Yup.string()
        .min(3, 'Password requires min chars 3 max chars 30')
        .max(30, 'Password requires min chars 3 max chars 30')
        .required('Password key is required'),
      userPerson: Yup.string()
        .min(3, 'Person name requires min chars 3 max chars 30')
        .max(30, 'Person name requires min chars 3 max chars 30')
        .required('Person name key is required'),
    }),
    idSchema: Yup.object().shape({
      param: Yup.string().min(1).max(3),
    }),
  },
};
