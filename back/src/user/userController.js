var userService = require("./userService");

var createUserControllerFn = async (req, res) => {
  try {
    console.log("hi hello before going to userservice");
    var status = await userService.createUserDBService(req.body);
    console.log(status + " at line 7 in usercontroller");
    if (status) {
      res.send({ status: true, message: "User created successfully" });
    } else {
      res.send({ status: false, message: "Error creating user" });
    }
  } catch (error) {
    console.log(error);
  }
};

var loginUserControllerFn = async (req, res) => {
  var result = null;
  console.log("code works till 22");
  try {
    result = await userService.loginUserDBService(req.body);
    console.log("code not  working post result assignment in try block");
    console.log("collection " + result.status);
    if (result) {
      res.send({ status: true, message: result.msg });
    } else {
      res.send({ status: false, message: result.msg });
    }
  } catch (error) {
    console.log("error after line 31");
    console.log(error);
    res.send({ status: false, message: error.msg });
  }
  //   try {
  //     console.log("hi hello before going to userservice");
  //     console.log(req.body);
  //     var status = await userService.loginUserDBService(req.body);
  //     console.log(status);
  //     console.log("hi hello after going to userservice");
  //     if (status) {
  //       res.send({ status: true, message: "User created successfully" });
  //     } else {
  //       res.send({ status: false, message: "Error creating user" });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
};

module.exports = { createUserControllerFn, loginUserControllerFn };
