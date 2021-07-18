<template>
  <section id="contact">
    <div class="contact-wrap">
      <div class="contact-title">
        <h2>Contact Us</h2>
        <h3>
          Thanks for visiting my Website.<br />
          Copyright ⓒ 2021. Dahye Kim All rights reserved.
        </h3>
      </div>

      <form class="contact-form" @submit.prevent="sendEmail">
        <div class="user-info">
          <div>
            <label>NAME</label>
            <input type="text" name="user_name" autocomplete="off" />
          </div>
          <div>
            <label>EMAIL</label>
            <input type="email" name="user_email" autocomplete="off" />
          </div>
        </div>

        <div class="message-wrap">
          <label>MESSAGE</label>
          <textarea name="message"></textarea>
          <input class="submit-btn" type="submit" value="SEND" />
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  name: "MainContact",
  methods: {
    // Contact
    sendEmail: e => {
      emailjs
        .sendForm(
          "service_j74oskd",
          "template_0p8u0re",
          e.target,
          "user_dorbJpVbU55goBZYnr3rQ"
        )
        .then(
          result => {
            console.log("SUCCESS!", result.status, result.text);
            alert("메세지가 발송되었습니다.");
          },
          error => {
            console.log("FAILED...", error);
            alert("메세지 발송에 실패했습니다.");
          }
        );
    }
  }
};
</script>

<style lang="scss" scoped>
#contact {
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 0 6rem;
}

.contact-wrap {
  width: 80vw;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: space-around;
}

.contact-title {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 0.8rem;
    line-height: 1.5rem;
    font-weight: 300;
  }
}

.contact-form {
  align-self: flex-end;
  font-family: "Syncopate", sans-serif;
  color: #fff;
  min-width: 30vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 3rem;

  input,
  textarea {
    color: #fff;
    font-size: 1rem;
    letter-spacing: 0.25rem;
    background: none;
    outline: none;
    border: none;
  }

  label {
    font-size: 1rem;
  }
}

.user-info {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;

  input {
    height: 3rem;
    border-bottom: 1px solid #fff;
  }

  div {
    width: 40%;
    display: flex;
    flex-direction: column;
  }
}

.message-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  label {
    margin-bottom: 0.5rem;
  }

  textarea {
    font-family: "Arial", sans-serif;
    width: 100%;
    height: 8rem;
    resize: none;
    border-bottom: 1px solid #fff;
    margin-bottom: 2rem;
  }

  .submit-btn {
    cursor: pointer;
    width: 40%;
    height: 3rem;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    align-self: flex-end;
    background-color: transparent;
    border: 1px solid #fff;
    transition: all 0.5s;

    &:hover {
      background: #fff;
      color: #000;
    }
  }
}

// tablet
@media screen and (max-width: 1024px) {
  #contact {
    height: auto;
    padding: 5rem 0 6rem;
  }

  .contact-wrap {
    width: 80vw;
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }

  .contact-title {
    justify-content: center;
    margin-bottom: 5rem;

    h2 {
      font-size: 3.5rem;
    }

    h3 {
      display: none;
    }
  }

  .contact-form {
    min-width: 50vw;
    align-self: center;
    padding-bottom: 0;
  }

  .user-info {
    div {
      width: 45%;
    }
  }

  .message-wrap {
    label {
      margin-bottom: 1rem;
    }

    textarea {
      height: 10rem;
    }

    .submit-btn {
      width: 100%;
      height: 3.5rem;
      align-self: center;
      background-color: #fff;
      color: #000;
    }
  }
}

// mobile
@media screen and (max-width: 768px) {
  #contact {
    width: 100%;
    padding: 7rem 0 4rem;
  }

  .contact-wrap {
    width: 90vw;
  }

  .contact-title {
    margin-bottom: 3rem;

    h2 {
      font-size: 2.5rem;
    }
  }

  .contact-form {
    min-width: 100%;
  }

  .user-info {
    flex-direction: column;
    margin-bottom: 2rem;
    div {
      width: 100%;
      margin-bottom: 2rem;
    }
  }

  .message-wrap {
    textarea {
      height: 6.5rem;
    }
  }
}
</style>
