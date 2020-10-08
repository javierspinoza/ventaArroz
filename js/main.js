var app = new Vue({
  el: '#app',
  data: {
    arrayDatos: [],


    medida: 0,
    msj: "",
    msj1: "",
    cant: null,
    arroz1: 100000,
    sw: 0,


    arrayFact: [],
    bodega: 0,
    medida: 0,
    cant: null,
    msj2: "",
    msjM2: "",
    arroz2: 230000,

    arrayControl: [],
    control1: 0,
    control2: 0,

  },

  methods: {

    procesar: function () {
      //CONVERSIONES
      this.kilo = this.cant * 1;
      this.libra = this.cant / 2;
      this.gramo = this.cant / 1000;

      //VALIDACION CANTIDAD NO NEGATIVA
      if (this.cant <= 0) {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: "cantidad negativa",
          showConfirmButton: false,
          timer: 1500
        })
      }
      //VALIDACION CANTIDAD TOTAL ARROZ

      //BODEGA 1 ....KILO
      else if (this.bodega == "1") {
        this.msj = "Bodega 1";
        if (this.medida == "1") {
          this.msj1 = "kilo";
          if (this.kilo <= this.arroz1) {
            this.arroz1 = this.arroz1 - parseInt(this.kilo);
            this.arrayDatos.push({ ubi: this.msj, uni: this.msj1, can: this.cant, res: this.arroz1 });
            this.validar();
          } else {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Cantidad de arroz agotado',
              showConfirmButton: false,
              timer: 1000
            })
          }

        }
        //LIBRA
        else if (this.medida == "2") {
          this.msj1 = "Libra";
          if (this.libra <= this.arroz1) {
            this.arroz1 = this.arroz1 - parseInt(this.libra);
            this.arrayDatos.push({ ubi: this.msj, uni: this.msj1, can: this.cant, res: this.arroz1 });
          } else {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Cantidad de arroz agotado',
              showConfirmButton: false,
              timer: 1000
            })
          }

        }
        //GRAMO            
        else if (this.medida == "3") {
          this.msj1 = "Gramo";
          if (this.gramo <= this.arroz1) {
            this.arroz1 = this.arroz1 - parseInt(this.gramo);
            this.arrayDatos.push({ ubi: this.msj, uni: this.msj1, can: this.cant, res: this.arroz1 });
          } else {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Cantidad de arroz agotado',
              showConfirmButton: false,
              timer: 1000
            })
          }

        }
        this.control1 ++;

      }else{
        this.msj = "Bodega 2";
        if (this.medida == "1") {
          this.msj1 = "kilo";
          if (this.kilo <= this.arroz2) {
            this.arroz2 = this.arroz2 - parseInt(this.kilo);
            this.arrayDatos.push({ ubi: this.msj, uni: this.msj1, can: this.cant, res: this.arroz2 });
            this.validar();
          } else {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Cantidad de arroz agotado',
              showConfirmButton: false,
              timer: 1000
            })
          }

        }
        //LIBRA
        else if (this.medida == "2") {
          this.msj1 = "Libra";
          if (this.libra <= this.arroz2) {
            this.arroz2 = this.arroz2 - parseInt(this.libra);
            this.arrayDatos.push({ ubi: this.msj, uni: this.msj1, can: this.cant, res: this.arroz2 });
          } else {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Cantidad de arroz agotado',
              showConfirmButton: false,
              timer: 1000
            })
          }

        }
        //GRAMO            
        else if (this.medida == "3") {
          this.msj1 = "Gramo";
          if (this.gramo <= this.arroz2) {
            this.arroz2 = this.arroz2 - parseInt(this.gramo);
            this.arrayDatos.push({ ubi: this.msj, uni: this.msj1, can: this.cant, res: this.arroz2 });
          } else {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Cantidad de arroz agotado',
              showConfirmButton: false,
              timer: 1000
            })
          }

        }

        this.control2 ++;
      }
      
  

      //   this.arrayDatos.push({ubi:this.msj, uni:this.msj1, can:this.cant, res:this.arroz1});
    },
  validar:function() {
    if(this.arroz1 > 15000 && this.arroz1 <=50000 && this.sw==0){
      this.mensaje("Esta por debajo del 50%");
      this.sw=1;
    }    
    //VALIDACION 10%
    else if (this.arroz1 >= 1 && this.arroz1 <= 15000) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Estas cerca al 10%',
        showConfirmButton: false,
        timer: 1500
      })
    }
    else {
      // this.mensaje("Esta menos del 50%");
    }
  },
  mensaje: function (msj) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: msj,
      showConfirmButton: false,
      timer: 1500
    })


  }
}
})
