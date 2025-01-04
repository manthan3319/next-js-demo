module.exports = async function (req, res, next) {
  try {
    if (!res) {
      throw new Error("Response object is undefined.");
    }

    const {
      body = {},
      user = {},
      query = {},
      params = {},
      files = [],
      file = {},
      headers,
    } = req;
    const { isRequestValidateRequired = false, schemaValidate = {}, modelService } = req;

    // Validate the request body if required
    if (isRequestValidateRequired) {
      const { error } = schemaValidate.validate(body);
      if (error) {
        console.error("Validation error:", error.details[0].message);
        return res
          .status(400)
          .json(
            failAction(
              error.details[0].message.toString().replace(/[\""]+/g, "")
            )
          );
      }
    }

    // Make sure modelService is a function
    if (typeof modelService !== 'function') {
      console.error("modelService is not a function");
      return res.status(400).json(failAction("modelService is not defined correctly"));
    }

    // Call the modelService function
    const success = await modelService({
      body,
      user,
      query,
      params,
      files,
      file,
      headers,
    });
    return res.status(200).json(successAction(success, Message.success));

  } catch (e) {
    console.error("Catch block error=>", e);
    // Check if the response object exists before calling `.status()`
    if (!res) {
      console.error("Response object is undefined.");
      return;
    }
    return res.status(400).json(failAction(Message.systemError));
  }
};
