export default {
  name: "Products",
  label: "Produtos",
  single: "Produto",
  
  schema: {
    name: {
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
    name: "",
    price: 0,
    code: "",
    description: ""
  }
}