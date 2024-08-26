import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  customClass: {
    popup: "!bg-[var(--secondary-color)] !z-[9999] dark:text-[#fff]",
  },
  showConfirmButton: false,
  timerProgressBar: true,
});

const successfulAlert = (title, text) => {
  Toast.fire({
    icon: "success",
    iconColor: "green",
    timer: 2500,
    title,
    text,
  });
};

const infoAlert = (title, text) => {
  Toast.fire({
    icon: "info",
    timer: 1500,
    title,
    text,
  });
};

export { successfulAlert, infoAlert };
