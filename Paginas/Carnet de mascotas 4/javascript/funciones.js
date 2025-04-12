function obtenerformulario() {
    var mascota = document.getElementById("mascota").value
    var vacuna = document.getElementById("vacuna").value
    var fechadevacunacion = document.getElementById("fechadevacunacion").value
    var proximaDosis = document.getElementById("proximaDosis").value
    var correo = document.getElementById("correo").value
    var contraseña = document.getElementById("contraseña").value
    var errores = ""
    if (mascota.length <= 1) {
        errores = errores + " MASCOTA ES CAMPO REQUERIDO O DEBE SER MAYOR A 1 CARACTER\n"
    }
    if (vacuna.length == 0) {
        errores = errores + " VACUNA ES CAMPO REQUERIDO\n"
    }
    if (fechadevacunacion.length == 0) {
        errores = errores + " FECHA DE VACUNACION ES CAMPO REQUERIDO\n"
    }
    if (proximaDosis.length == 0) {
        errores = errores + " PROXIMA DOSIS ES CAMPO REQUERIDO\n"
    }
    if (correo.length == 0) {
        errores = errores + " CORREO ES CAMPO REQUERIDO\n"
    }
    if (contraseña.length == 0) {
        errores = errores + " CONTRASEÑA ES CAMPO REQUERIDO\n"
    }
    if (errores != 0) {
        alert(errores)
    }


    console.log("mascota " + mascota + "vacuna " + vacuna + "fechadevacunacion " + fechadevacunacion + "proximaDosis " + proximaDosis + "correo " + correo + "contraseña " + contraseña)
    console.log("largo mascota " + mascota.length + ", largo vacuna " + vacuna.length + ", largo fechadevacunacion " + fechadevacunacion.length + ", largo proximaDosis " + proximaDosis.length + ", largo correo " + correo.length + ", largo contraseña " + contraseña.length)
    return false
}

function obtenerformularioJquery() {
    var mascota = $("#mascota").val()
    var vacuna = $("#vacuna").val()
    var fechadevacunacion = $("#fechadevacunacion").val()
    var proximaDosis = $("#proximaDosis").val()
    var correo = $("#correo").val()
    var contraseña = $("#contraseña").val()
    var erroCampoRequerido = "<p class='text-danger errorForm'>*CAMPO REQUERIDO</p>"
    var errores = ""
    $(".errorForm").remove()
    if (mascota.length<=1) {
        errores = errores + "<p class='text-danger'>*MASCOTA ES CAMPO REQUERIDO O DEBE SER MAYOR A 1 CARACTER</p>"
        $("#campoNombre").append(erroCampoRequerido)
    }
    if (vacuna.length==0) {
        errores = errores + "<p class='text-danger'>*VACUNA ES CAMPO REQUERIDO</p>"
        $("#campoVacuna").append(erroCampoRequerido)
    }
    if (fechadevacunacion.length==0) {
        errores = errores + "<p class='text-danger'>*FECHA DE VACUNACION ES CAMPO REQUERIDO</p>"
        $("#campoFechaVacunacion").append(erroCampoRequerido)
    }
    if (proximaDosis.length==0) {
        errores = errores + "<p class='text-danger'>*PROXIMA DOSIS ES CAMPO REQUERIDO</p>"
        $("#campoProximadosis").append(erroCampoRequerido)
    }
    if (correo.length==0) {
        errores = errores + "<p class='text-danger'>*CORREO ES CAMPO REQUERIDO</p>"
        $("#campoCorreo").append(erroCampoRequerido)
    }
    if (contraseña.length==0) {
        errores = errores + "<p class='text-danger'>*CONTRASEÑA ES CAMPO REQUERIDO</p>"
        $("#campoContraseña").append(erroCampoRequerido)
    }
    if (errores != "") {
        //alert(errores)
        //$("#errores").html(errores)
        return false
        
    }else{
        $("#errores").empty()
        Swal.fire({
            title: "Confirmacion!",
            text: "Tu informacion a sido enviada exitosamente!",
            icon: "success"
          });
          return false
    }

}