import ProductsManagers from "./managers/ProductsManagers.js";
import express from "express"

const app = express();

app.use(express.json())

const PORT= process.env.PORT || 8080
const Manager = new ProductsManagers

app.listen(PORT,(req,res)=>{
    console.log(`listening on PORT ${PORT}`)
})


app.post(`/api/products`,async (req,res)=>{
    const newproduct= req.body
    if(!newproduct.code || !newproduct.price || !newproduct.stock || !newproduct.title){
        return res.status(400).send({status:"error",error: "incomplete values"})
    }
    const result = await Manager.createProduct(newproduct);
    if(!undefined){
        return res.status(500).send({status: "error ",error: "error al crear el producto"})
        console.log(error);
    }
    res.send({status:"success",mensaje:`producto creado con id ${result}`})
    console.log(`creado correctamente`)
}

)

app.get(`/api/products`,async (req,res)=>{
    const product= await Manager.getProduts();
    if(product == null){
        return res.status(500).send({error:"error"})
    }
    res.send({status:"success",payloads:products})
})

app.get(`/api/products/:pid`,async (req,res)=>{
    const productos= await Manager.getProduts();
    const pid = req.params.pid
    if(isNaN(pid)){
        res.status(400).send({status:"error",error: "debe ser un numero"} )
    }
    if(product == null){
        return res.status(500).send({error:"error"})
    }
    const idNumber=parseInt(pid)
    const product = products.find(p => p.id === idNumber)
    if(product){
        return res.send({status:"success",payloads:product})
    }else{
        return res.status(400).send({status:"error",error:"id no encontrado"})
    }
})

app.put(`api/products/:pid`,(req,res)=>{
    const pid = req.params.pid
    if(isNaN(pid)){
        res.status(400).send(`error: ${error}, debe ser un numero` )}
        const idNumber=parseInt(pid);
    if(idNumber ==0 || idNumber > products.length){
        res.status(400).send(`error: ${error}, el id no fue hallado.`)
        }else{ 
            const product = products.find(p => p.id === idNumber)
            const newProduct ={
                title:req.body.title,
                description:req.body.description,
                code:req.body.code,
                price:req.body.price,
                stock:req.body.stock,
        }    
        }
    }
)
app.delete(`api/products/:pid`,()=>{
    const pid = req.params.pid
    if(isNaN(pid)){
        res.status(400).send(`error: ${error}, no es un numero` );
    }else{
        const idNumber=parseInt(pid)
        const product = products.find(product => product.id === pid)
        if(product){
        res.send(`producto eliminado`)
        }else{
            res.send(`ese producto no existe`)
        }
    }
    products.splice(idNumber -1,1)
})

//carrito
app.post(`carts `,(req,res)=>{


})