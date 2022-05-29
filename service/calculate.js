const calculate = {
    find:(req,res,next)=>{
        console.error(Number(req.params.num1))
        res.json(Number(req.params.num1)+Number(req.params.num2))
    }
}
module.exports = calculate