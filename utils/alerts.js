import Swal from "sweetalert2";
const swal = require("sweetalert");

const signAlert = (title, body, status) => {
    swal(title, body, status);
}

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

const toastAlert = (icon, title) => {
    Toast.fire({
        icon,
        title
    })
}

export { signAlert, toastAlert }