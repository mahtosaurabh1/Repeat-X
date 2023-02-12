let transactionSchema=require('../Model/Transaction');

let getTransactionController=async (req,res)=>{
   try{
    const transactions=await transactionSchema.find();
    return res.status(200).json({
        success:true,
        count:transactions.length,
        data:transactions
    })
   }catch(err){
   return res.send(500).json({
        success:false,
        error:'server error'
    })
   }
}

let addTransactionController=async (req,res)=>{
    try{
        const transaction=await transactionSchema.create(req.body);
         return res.status(200).json({
            success:true,
            data:transaction
        })

    }catch(err){
        return res.status(500);
    }
}

let updateTransactionControler=async (req,res)=>{
    try {
        let result= await transactionSchema.updateOne(
            {_id:req.params.id},
            {
              $set:req.body
            }
        )
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}

let deleteTransactionController=async (req,res)=>{
    try{
        let transaction=await transactionSchema.findById(req.params.id);

        if(!transaction){
            return res.status(400).json({
                success:false,
                error:'Not found'
            })
        }
        await transaction.remove();
        return res.status(200).json({
            success:true,
            data:{}
        })
    }catch(error){
        return res.send(500).json({
            success:false,
            error:'server error'
        })
    }
    
}

module.exports={
    getTransactionController,
    addTransactionController,
    deleteTransactionController,
    updateTransactionControler
}