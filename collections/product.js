export default {
  name: "Products",
  label: "Produtos",
  single: "Produto",
  description: "Produtos pra vc coprá",
  
  schema: {
    title: {
      name: "Título",
      type: "shortString"
    },
    price: {
      name: "Preço",
      type: "number"
    },
    code: {
      name: "Código",
      type: "shortString",
    },
    description: {
      name: "Descrição",
      type: "longString"
    }
  },

  default: {
    title: "",
    price: 0,
    code: "",
    description: ""
  }
}