import { defineStore } from "pinia";
import Swal from "sweetalert2";

export const useFoodStore = defineStore("food", {
  state: () => ({
    userId: localStorage.userId || "",
    isLogin: localStorage.isLogin || false,
    username: localStorage.username || "",
   
    menus: [
      {
        name: "Pizza Paperoni",
        image: "https://drive.google.com/uc?id=1-ok6shyIeHEe60EZpkvQm23xbccqLK4-",
        category: "Pizza",
        rating: 4,
        color: "#E6F3F5",
      },
      {
        name: "Pizza Meat",
        image: "https://drive.google.com/uc?id=1vAkE1RvWM3aJYRdoeaDN0DOGvScZxZXU",
        category: "Pizza",
        rating: 3,
        color: "#E6F3F5",
      },
      {
        name: "Doner Kebab",
        image: "https://drive.google.com/uc?id=1DxUshS-uQgN5vTf4HhwnKv1YZvqf3UUW",
        category: "Kebab",
        rating: 5,
        color: "#E6F3F5",
      },
      {
        name: "Salmon Roll",
        image: "https://drive.google.com/uc?id=1xMhJDjemdCl7aLoX8ZQs99BjrbmSSF_I",
        category: "Salmon",
        rating: 4,
        color: "#F9EEF3",
      },
      {
        name: "Cupcake Choco",
        image: "https://drive.google.com/uc?id=1lOMroOhhBQNEuUY2DRMxF2EV42BNRm8R",
        category: "Cupcake",
        rating: 4,
        color: "#F0FEEB",
      },
      {
        name: "Doughnut Milk",
        image: "https://drive.google.com/uc?id=1PyCUZ3jNcEemsb75iGhhZhlu-McVZTls",
        category: "Doughnut",
        rating: 5,
        color: "#F3F7D9",
      },
      {
        name: "Doughnut Unicorn",
        image: "https://drive.google.com/uc?id=1-i-wmEu5_Ddqp7E1L0Jh78vs7xdlDcbE",
        category: "Doughnut",
        rating: 4,
        color: "#F3F7D9",
      },
      {
        name: "Kathi Kebab",
        image: "https://drive.google.com/uc?id=1kvZ9gMxti8nFtGs_9hgmuTdM3VpuNy7D",
        category: "Kebab",
        rating: 4,
        color: "#E6F3F5",
      },
    ],
  }),

  actions: {
    swalSuccess(title, message) {
      Swal.fire(title, message, "success");
    },
    swalNotification(title) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title,
      });
    },

    async loginHandler() {
        localStorage.setItem("access_token", "TOKEN_DUMMY");
        localStorage.setItem("userId", 1);
        localStorage.setItem("isLogin", "true");
        localStorage.setItem("username", "GUEST");
        this.isLogin = true;
        this.userId = 1;
        this.username = "GUEST";
        this.swalSuccess("Login Success", "Please Enjoy");
        this.router.push("/");
      
    },
    async registerHandler() {
        this.swalSuccess(
          "Sign Up Success",
          "You can now log in with your account"
        );
        this.router.push("/login");
   
    },
    async logoutHandler() {
      Swal.fire({
        title: "Are you sure?",
        text: "If You Log Out You Have No Access To Our best Features",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Log out now!",
      }).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear();
            this.swalSuccess(
              "Logout Success",
              "See You, Thanks for entrusting us "
            );
            this.router.push("/");
            this.isLogin = false;
        
        }
      });
    },
  },
});
