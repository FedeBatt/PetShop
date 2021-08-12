const app = Vue.createApp({
    data() {
        return {
            copyApi: api.response,
            farmacia: [],
            juguete: [],
            cart: 0,
            carrito: [],
            // init: {
            //     method: 'GET',
            //     headers: {
            //         "X-API-Key": "9TpSPs9WWEJazoq0YrySUhmSOrnlhRA9jR4XlnSz"
            //     }
            // },
        }
    },
    created() {
        this.farmacia = this.copyApi.filter(prod => prod.tipo == "Medicamento")
        this.juguete = this.copyApi.filter(prod => prod.tipo == "Juguete")
        this.carrito.push(this.arreglo)
        // console.log(this.carrito)
        // this.cart = localStorage.getItem("cart")
    },
    methods: {
        mialerta() {
            event.preventDefault()
            swal("¡Tu consulta ha sido enviada! ", { icon: "success" })
        },
        cartCounter() {
            let arreglito = [this.copyApi].filter(prod => {
                if (prod.nombre == prod.nombre) {
                    this.cart++
                    localStorage.setItem("cart", JSON.stringify(this.cart))
                }
            })
            console.log(this.cart)
        },
        // let seleccionados = this.copyApi.filter(prod => {
        //     let arreglo = []
        //     if (prod.tipo == prod.tipo) {
        //         arreglo.push(prod.precio)
        //         console.log(this.carrito)
        //     }
        // })
    },
    computed: {
    }
})
app.mount("#app")
