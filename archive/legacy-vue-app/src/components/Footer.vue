<template>
  <div id="footer-container" class="section">
    <!-- Inspired by the Devfolio template -->
    <div id="footer">
      <h2>- Contact Me On Social Media -</h2>
      <div id="footer-icons-container">
        <div id="footer-icons">
          <a href="https://twitter.com/CodeUhi"
            ><i class="fa fa-twitter"></i
          ></a>
          <!-- <a href="https://www.facebook.com/cody.uhi"
            ><i class="fa fa-facebook"></i
          ></a> -->
          <a href="https://www.linkedin.com/in/codyuhi/"
            ><i class="fa fa-linkedin"></i
          ></a>
          <!-- <a href="https://www.instagram.com/uhicody/"
            ><i class="fa fa-instagram"></i
          ></a> -->
          <a href="https://github.com/codyuhi"><i class="fa fa-github"></i></a>
        </div>
      </div>
      <p>&copy; Copyright Cody Uhi</p>
      <p>2022年3月</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
#footer-container {
  width: 100vw;
  background-color: var(--lightest);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
#footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  color: var(--darkest);
  text-align: center;
}
#footer-icons-container {
  text-align: center;
  margin: 15px;
}
#footer-icons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 15px;
}
#footer-icons > a > i {
  font-size: 20px;
  color: var(--dark);
  margin: 10px;
}
</style>