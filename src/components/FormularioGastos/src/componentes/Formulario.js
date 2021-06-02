import moment from "moment";
export default {
  name: "FormularioGastos",
  components: {},
  props: [],
  data() {
    return {
      formData: this.getInicialData(),
      formState: {},
      nombreLengthMin: 3,
      nombreLengthMax: 15,
      numMin: 0,
      gastos: [],
      totalGastos: 0,
      presupuesto: 1000,
    };
  },
  mounted() {},
  methods: {
    getInicialData() {
      return {
        nombre: "",
        desc: "",
        gasto: "",
      };
    },

    enviar() {
      const fechaHoy = moment()
        .locale("es")
        .format("L h:mm:ss");
      const nuevoGasto = {
        ...this.formData,
        fecha: fechaHoy,
      };
      this.gastos = [...this.gastos, nuevoGasto];
      this.totalGastos += nuevoGasto.gasto;

      this.formData = this.getInicialData();
      this.formState._reset();
    },
  },
  computed: {
    getColorTotal() {
      let colorTexto;
      if (this.totalGastos > this.presupuesto) {
        colorTexto = "rojo";
      } else if (this.totalGastos < 1000) {
        colorTexto = "verde";
      } else if (this.totalGastos >= 1000 && this.totalGastos < 5000) {
        colorTexto = "magenta";
      } else {
        colorTexto = "naranja";
      }

      return colorTexto;
    },
  },
};
