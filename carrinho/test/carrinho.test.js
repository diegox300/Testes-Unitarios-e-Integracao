import Item from "../item"
import Carrinho from "../carrinho"

describe("Teste do carrinho", () => {
  it("Deve iniciar vazio", () => {

    const carrinho = new Carrinho()
    expect (carrinho.subtotal).toBeNull()
  })

  it("Deve ter itens", () => {

    const item =  new Item("Banana", 2, 5)
    const item2 = new Item ("Maca", 0.5, 1)

    const carrinho = new Carrinho()
    carrinho.adiciona(item)
    carrinho.adiciona(item2)

    expect(typeof carrinho).toBe("object")
    expect(carrinho.itens[0]).toBe(item)
    expect(carrinho.itens[1]).toBe(item2)
    expect(carrinho.itens).toContain(item)
    expect(carrinho.itens).toContain(item2)

  })

  it("Deve ter a propriedade total na inizializacao", () => {

    const carrinho = new Carrinho()

    expect(carrinho).toHaveProperty("total")

  })

  it("Deve lancar erro ao finalizar compra com carrinho vazio", () => {

    function englobaErroCarinho() {
    
    const carrinho = new Carrinho()
    carrinho.finalizaCompra()

  }

  expect(englobaErroCarinho).toThrowError("Carrinho de compras vazio")

  }) 

  it("Deve adicionar o frete", () =>{

    const carrinho = new Carrinho()
    carrinho.adicionaFrete(10)

    expect(carrinho.frete).toBe(10)

   })

   it("Deve finalizar a compra", () => {

    const item = new Item("Banana", 2, 5)
    const item2 = new Item("Mel", 1, 5)
    
    const carrinho = new Carrinho()

    carrinho.adiciona(item)
    carrinho.adiciona(item2)
    carrinho.adicionaFrete(10)

    expect(carrinho.finalizaCompra()).toStrictEqual({
      subtotal: 15,
      frete: 10,
      total: 25
    })

   })

   // testando uma funcao falsa positiva, que esta dentro da funcao finalizarCompra.

   it("Deve calcular valor total", () => {

    const item = new Item("Banana", 2, 5)
    const item2 = new Item("Mel", 1, 5)
    
    const carrinho = new Carrinho()

    carrinho.adiciona(item)
    carrinho.adiciona(item2)
    carrinho.adicionaFrete(10)

    expect(carrinho.calculaTotal()).toBe(25)

   })
  
})