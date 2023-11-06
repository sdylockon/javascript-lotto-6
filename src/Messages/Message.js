const Message = Object.freeze({
  INPUT_PURCHASE_PRICE: "구입금액을 입력해 주세요.\n",
  INPUT_WINNING_NUMBER: "당첨 번호를 입력해 주세요.\n",
  INPUT_BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",

  ERROR: {
    PURCHASE_PRICE_INVALID: "[ERROR] 로또 가격은 1000원 단위로 구매가 가능합니다.",
    WINNING_NUMBER_OUT_OF_RANGE: "[ERROR] 당첨 번호는 1부터 45 사이여야 합니다.",
    WINNING_NUMBER_INVALID: "[ERROR] 당첨 번호는 6개가 되어야 합니다.",
    BONUS_NUMBER_INVALID: "[ERROR] 유효한 보너스 번호가 아닙니다.",
    BONUS_NUMBER_OUT_OF_RANGE: "[ERROR] 보너스 번호는 1부터 45 사이여야 합니다.",
  },
});

export default Message;
