import { Random } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.numberArray = [];
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  createRandomNumber(inputCount) {
    for (let i = 0; i < inputCount; i++) {
      const RandomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.pushNumber(RandomNumber);
    }
  }

  pushNumber(randomNumber) {
    this.numberArray.push(randomNumber);
    this.numberArray.sort((a, b) => a - b);
  }
}

export default Lotto;
