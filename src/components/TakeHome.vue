<template>
  <main class="wrapper">
    <header>
      <h1 class="title">Jeopardy!</h1>
      <div class="score">
        score: <span class="number">${{ totalScore }}</span>
      </div>
    </header>
    <div class="container">
      <Category
        class="category"
        v-for="(category, index) in categories"
        :key="index"
        :name="category"
        :items="getQuestionByCategory(category)"
        @openQuestion="openQuestion"
      >
      </Category>
    </div>

    <div class="question-board" :class="{ isQuestionOpen: isQuestionOpen }">
      <div class="question-box">
        <h2 class="question">{{ question }}</h2>
        <div class="answers">
          <label
            v-for="(answer, index) in answers"
            :key="index"
            class="answer-option"
          >
            <input
              type="radio"
              :id="answer"
              :value="answer"
              v-model="preAnswer"
            />
            <span class="container">{{ answer }}</span>
            <span class="checkmark"></span>
          </label>
          <button @click="submitAnswer()">Answer</button>
        </div>
      </div>
    </div>

    <div class="result-board" :class="{ isResultOpen: isResultOpen }">
      <div class="info">
        <div class="status" :class="{ pass: valid }">
          <i class="far fa-smile"></i>
          <h3>Good Job!</h3>
        </div>
        <div class="status" :class="{ fail: !valid }">
          <i class="far fa-frown"></i>
          <h3>Incorrect</h3>
        </div>
        <div class="question">{{ this.question }}</div>
        <div class="answer">
          Answer is: <span class="hightlight">{{ this.answer }}</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import JeopardyGame from "../mixins/Jeopardy";
import Category from "./Category.vue";

export default {
  name: "TakeHome",
  mixins: [JeopardyGame],
  components: { Category },
  data() {
    return {
      data: [],
      isQuestionOpen: false,
      question: "",
      preAnswer: "",
      answers: [],
      answer: "",
      valid: false,
      isResultOpen: false,
      totalScore: 0,
      score: "",
    };
  },
  created() {
    this.fetchQuestions().then((data) => {
      this.data = data.map((d) => ({ ...d, flag: false }));
    });
  },
  methods: {
    getQuestionByCategory(name) {
      return this.data.filter((data) => data.category === name);
    },
    openQuestion(item) {
      this.isQuestionOpen = true;
      this.question = item.question;
      this.score = item.value;
      this.answers = item.answers; // answer options
      const ans = this.answers;
      this.answer = ans[ans.length - 1]; //correct answer
      item.flag = true;
    },
    submitAnswer() {
      const getNumber = this.score.substring(1);
      const numberScore = parseInt(getNumber);
      this.isQuestionOpen = false;
      this.isResultOpen = true;

      if (this.preAnswer === this.answer) {
        this.valid = true;
        this.totalScore += numberScore;
      } else {
        this.valid = false;
        this.totalScore -= numberScore;
        if (this.totalScore <= 0) {
          this.totalScore = 0;
        }
      }

      this.closeResult();
      this.preAnswer = "";
    },
    closeResult() {
      setTimeout(() => {
        this.isResultOpen = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_var.scss";

.wrapper {
  @include size(100%);
  background-color: $dark;
  padding: 20px;
  @include gridRows(auto calc(100vh - 160px), 20px);
  box-sizing: border-box;
  header {
    height: 100px;
    color: $white;
    position: relative;
    @include flexCenter;
    .title {
      @include fontStyle(60px, 400, 1.4);
      text-transform: uppercase;
      animation: glow 1s ease-in-out infinite alternate;
    }
    .score {
      position: absolute;
      right: 10px;
      justify-self: end;
      font-size: 20px;
      .number {
        display: inline-block;
        @include fontStyle(50px, 400, 1);
        padding: 0 10px;
        color: $secondary;
      }
    }
  }
  .container {
    @include size(100%);
    @include grid(repeat(5, 1fr), 10px);
  }
  .question-board,
  .result-board {
    @include size(100%);
    @include fixPosition(0, 0);
    @include flexCenter;
    pointer-events: none;
    opacity: 0;
    overflow: auto;
  }
  .question-board {
    background-color: $primary;
    &.isQuestionOpen {
      opacity: 1;
      pointer-events: initial;
    }
    .question-box {
      max-width: 1000px;
      .question {
        color: $white;
        @include fontStyle(45px, 400, 1.2);
        margin-bottom: 40px;
        letter-spacing: 1px;
      }
      .answers {
        .answer-option,
        button {
          @include size(100%, 60px);
          @include fontStyle(28px, 400, 60px);
          letter-spacing: 1px;
          border-radius: 10px;
          text-align: center;
          @include flexCenter;
        }
        label.answer-option {
          color: $white;
          display: block;
          margin-bottom: 20px;
          background-color: rgba($primary-900, 0.5);
          transition: all 0.5s;
          cursor: pointer;
          position: relative;

          &:hover {
            background-color: $primary-900;
          }
          input {
            @include size(100%);
            opacity: 0;
            position: absolute;
            &:checked {
              & ~ .checkmark {
                border: 4px solid $secondary;
              }
              & ~ .container {
                color: $secondary;
                &:before {
                  display: block;
                }
              }
            }
          }
          .container {
            @include size(auto, 100%);
            display: inline-block;
            position: relative;
            &:before {
              display: block;
              position: absolute;
              font-family: "Font Awesome 5 Free";
              font-weight: 900;
              content: "\f00c";
              display: none;
              color: $secondary;
              left: -40px;
            }
          }
          .checkmark {
            @include size(100%);
            position: absolute;
            top: 0;
            left: 0;
            transition: all 0.2s;
            border-radius: 10px;
          }
        }
        button {
          border: 0;
          background-color: $secondary;
          margin-top: 50px;
          font-family: "Passion One", cursive;
        }
      }
    }
  }
  .result-board {
    background-color: $dark;
    &:before {
      display: block;
      content: "";
      @include fixPosition(0, 0);
      @include size(100%);
      background: radial-gradient(
        rgba(#000, 0.2) 20%,
        rgba(rgb(38, 42, 54), 0.2) 20%
      );
      background-size: 10px 10px;
      animation: bscale 100s infinite linear;
    }

    &.isResultOpen {
      opacity: 1;
      pointer-events: initial;
    }
    .info {
      max-width: 1000px;
      color: $white;
      .status {
        @include size(100%, auto);
        display: none;
        position: relative;
        text-align: center;
        margin-bottom: 100px;
        &.pass,
        &.fail {
          display: block;
          h3 {
            @include fontStyle(100px, 400, 1);
            letter-spacing: 2px;
          }
          i {
            font-size: 120px;
            margin-bottom: 30px;
          }
        }
        &.pass {
          color: $green;
        }
        &.fail {
          color: $red;
        }
      }
      .question,
      .answer {
        text-align: center;
      }
      .question {
        @include fontStyle(50px, 400, 1.3);
        letter-spacing: 1px;
        margin-bottom: 50px;
      }
      .answer {
        @include fontStyle(70px, 400, 1.3);
        .hightlight {
          color: $green;
        }
      }
    }
  }
}
</style>
