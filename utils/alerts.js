const swal = require("sweetalert");

const signAlert = (title, body, status) => {
    swal(title, body, status);
}

export { signAlert }