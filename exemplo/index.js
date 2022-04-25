// (async () => {
//   console.log('rodou');
// })()

const myFunction = async () => {
  const Produto = require('./produto');
  const database = require('./database');

  await database.sync(); // verifica os models do programa e checa com o banco para "parear"/ sincronizar

  // CREATE 

  const novoProduto = await Produto.create({
    nome: 'Pneu furado',
    preco: 1000,   
    descricao: 'Voce nem tem carro msm, nao é?'
  })
  console.log(novoProduto);

  // READ 

  const produtos = await Produto.findAll();
  console.log(produtos);

  // UPDATE 

  // const produto = await Produto.findByPk(1);

  // console.log(produto.preco);
  
  // produto.preco = 2200.50
  
  // await produto.save();
  await Produto.update(
    {
      preco: 30001.5454545454
    },
    {
      where: {id: 1}
    }
  );

  // Delete

  await Produto.destroy({
    where: {
      id: 3
    }
  })
}

myFunction();