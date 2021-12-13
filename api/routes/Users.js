import express from "express"
import User from "../Models/User.js";
import bcrypt from "bcrypt";

const Router = express.Router();

//update process in put 
//update user
// Router.put("/:id", async (req, res) => {
//     if (req.body.UserId  === req.params.id || req.body.isAdmin) {
//         if (req.body.password) {
//             try {
//                 const salt = await bcrypt.genSalt(10);
//                 req.body.password = await bcrypt.hash(req.body.password, salt)
//             } catch (err) {
//                 res.status(500).json(err)
//             }
//         }else{  try {
//             const user = await User.findByIdAndUpdate(req.params.id ,{
//                 $set:req.body,
//             })
//             res.status(200).json("account has been updated ")
//         } catch (err) {
//             res.status(500).json(err)
//                         }}
      
//     } else {
//         return res.status(403).json("you can updat only your account ")
//            }


// })

Router.put("/:id", async (req, res)=>{
      if(req.body.userId === req.params.id ){
        if(req.body.password){
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password= await bcrypt.hash(req.body.password, salt )

            } catch (err) {
               return res.status(500).json(err)
            }
        }
        try {
             await User.findByIdAndUpdate(req.params.id, {
                $set:req.body,
            })
            res.status(200).json("Account has been updated")
        } catch (err) {
            return res.status(500).json(err)
        }

    }else{
        return res.status(403).json ("you can only update your account ")
    }
})

Router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
      if (req.body.password) {
        try {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(req.body.password, salt);
        } catch (err) {
          return res.status(500).json(err);
        }
      }
      try {
        const user = await User.findByIdAndUpdate(req.params.id, {
          $set: req.body,
        });
        res.status(200).json("Account has been updated");
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(403).json("You can update only your account!");
    }
  });
//delet user 
Router.delete('/delete', async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ email: req.body.email })
        !user && res.status(404).send("user not found ")
        res.status(200).send("user is  delete successfuly")
    } catch (err) {
        res.status(500).json(err)
    }
})
//get user 
//follow user
//unfollow user 

export default Router;
