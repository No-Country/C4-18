import iconDucha from "./icon-ducha.svg";
import iconDuchaDark from "./icon-ducha-dark.svg";
import iconEstacionamiento from "./icon-estacionamiento.svg";
import iconEstacionamientoDark from "./icon-estacionamiento-dark.svg";
import iconMetros from "./icon-metros.svg";
import iconWifi from "./icon-wifi.svg";
import iconWifiDark from "./icon-wifi-dark.svg";
import iconCamas from "./icon-camas.svg";
import iconCamasDark from "./icon-camas-dark.svg";
import fullStar from "./yellow-star-full.svg";
import halfStar from "./yellow-star-half.svg";
import emptyStar from "./grey-star.svg";
import logoHeader from "./logoHeader2.png";
import shareButton from "./icon-share.svg";
import likeButton from "./icon-like.svg";
import logOut from "./log-out.svg";
import logOutDark from "./log-out-dark.svg";
import Swal from 'sweetalert2'

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

export {
  Swal,
  Toast,
  iconDucha,
  iconDuchaDark,
  iconEstacionamiento,
  iconEstacionamientoDark,
  iconCamas,
  iconCamasDark,
  iconMetros,
  iconWifi,
  iconWifiDark,
  fullStar,
  halfStar,
  emptyStar,
  logoHeader,
  likeButton,
  shareButton,
  logOut,
  logOutDark
};
