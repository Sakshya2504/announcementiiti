import express from 'express';
import { Club} from "../models/Club.js";


const router = express.Router();

router.get("/:name" , async(req,res) => {
    try {
      const club = await Club.findOne({name:req.params.name});
      if (!club )
        return 
      res.status (404).json({error : "Club not found"});
res.json(club);
    }
    catch(error)
    {
res.status(500).json({error : error.message});
    }
  });
  export default router;