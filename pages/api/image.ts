import { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "../../utils/cloudinary";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {img} = req.body
    
    const uploadData = await cloudinary.uploader.upload(img, {
        upload_preset: 'test',

    }, (err: any, result:any)=>{
        if (err) {
            console.log(err)
        }
        console.log(result)
        res.json(result)
    })


   
}