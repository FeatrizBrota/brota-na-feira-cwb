<template>
  <div class="container">
    <div class="title">
      <h1>Abriu Achou Brotou</h1>
      <p>
        Encontrar feiras nunca foi tão fácil! <br />
        Crie uma conta e compartilhe suas experiências, avalie feiras e desfrute
        de uma experiência personalizada.
      </p>
      <div class="btn-google-box">
        <!-- <div class="btn-google">
          <i class="fa-brands fa-google"></i>
					<span>Faça Parte</span>
				</div> -->
        <div id="buttonDiv"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  methods: {},
  created: () => {
    const head = document.querySelector("head");
    const scriptGoogleClient = document.createElement("script");
    const scriptJWTDecode = document.createElement("script");
    scriptJWTDecode.setAttribute(
      "src",
      "https://unpkg.com/jwt-decode/build/jwt-decode.js"
    );
    scriptGoogleClient.setAttribute(
      "src",
      "https://accounts.google.com/gsi/client"
    );
    scriptGoogleClient.setAttribute("async", true);
    scriptGoogleClient.setAttribute("defer", true);
    head.appendChild(scriptJWTDecode);
    head.appendChild(scriptGoogleClient);

    const scriptContent = `
    setTimeout(() => {
      async function handleCredentialResponse(response) {
            const res = await fetch('http://localhost:3000/login', {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({token: response.credential})
            })
            const user = await res.json();
            
            console.log("@UserData", user);
          }
            google.accounts.id.initialize({
              client_id: "731557760931-c769sqtnrim11g8142ldpiisvb7035me.apps.googleusercontent.com",
              callback: handleCredentialResponse
            });
            google.accounts.id.renderButton(
              document.getElementById("buttonDiv"),
              { theme: "outline", size: "large" }
            );
            google.accounts.id.prompt();
    }, 500);
		`;

    eval(scriptContent);
  },
};
</script>

<style scoped>
.container {
  padding: 40px 15px;
  /* min-height: 100vh; */
  background-color: #F8F3F3;
  position: relative;
  overflow: hidden;
}

.btn-google-box {
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;
}

.btn-google {
  display: inline-block;
  background-color: #1b3c1d;
  padding: 20px 50px;
  border-radius: 15px;
  user-select: none;
  font-size: 1rem !important;
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  color: #fcf3e6;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

i {
  margin-right: 10px;
}

.btn-google:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
}

.btn-google:active {
  transform: scale(0.95);
  box-shadow: none;
}

.btn-google span {
  font-size: 1rem;
}

.title {
  color: #1b3c1d;
  margin: 50px 30px 50px 20px;
  text-align: start;
}

h1 {
  font-size: 4rem !important;
  font-weight: bold;
  text-transform: uppercase;
}

p {
  font-size: 1rem !important;
}

.container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1b3c1d 0%, #2b5832 100%);
  z-index: -1;
  animation: backgroundAnimation 15s linear infinite;
}

@keyframes backgroundAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
