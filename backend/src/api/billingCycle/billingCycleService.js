/*
*    NOTA: O web service rest pega os serviços do http(get, post, put...) e 
*    aplica uma semantica a partir de uma url e para cada metodo http
*    ele aplica uma determinada ação.
*/

//Modulo BillingCycle exportado
const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})

BillingCycle.route('count', (req, res, next) =>{
    BillingCycle.count((error, value) =>{
        if(error){
            res.status(500).json({errors:[error]})
        }else{
            res.json({value})
        }
    })
})

BillingCycle.route('summary', (req, res, next) =>{
    BillingCycle.aggregate({
        $project:{creditProjection: {$sum: '$credits.value'}, debtProjection: {$sum:'$debts.value'}}
    },{
        $group:{_id: null, credit: {$sum: '$creditProjection'}, debt: {$sum: '$debtProjection'}}
    },{
        $project: {_id: 0, credit: 1, debt: 1}
    },(error, result) =>{
        if(error){
            res.status(500).json({errors:[error]})
        }else{
            res.json(result[0] || {credit: 0, debt: 0})
        }
    })
})

module.exports = BillingCycle
