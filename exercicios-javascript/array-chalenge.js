const elementos = ['1,3,4,7,13', '1,2,4,13,15'];

function array() {
  const elemento1 = elementos[0].split(',');
  const elemento2 = elementos[1].split(',');
  let repetidos = [];

  elemento1.map((itens1) => {
    elemento2.map((itens2) => {
      if (itens1 === itens2 ) {
        repetidos.push(itens1);
      }
    })
  })

  console.log(`${repetidos}`);
};

array();