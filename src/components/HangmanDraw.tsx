const body = <div className="body" key="body" />;
const rightHand = <div className="rightHand" key="rightHand" />;
const leftHand = <div className="leftHand" key="leftHand" />;
const rightLeg = <div className="rightLeg" key="rightLeg" />;
const leftLeg = <div className="leftLeg" key="leftLeg" />;

type hangmanDrawProps = {
  incorrectLettersNumber: number;
};

const HangmanDraw = ({ incorrectLettersNumber }: hangmanDrawProps) => {
  const head = (
    <div
      key="head"
      className="head"
      style={{
        borderColor: incorrectLettersNumber === 6 ? "red" : "black",
        backgroundColor: incorrectLettersNumber === 6 ? "red" : "black",
      }}
    />
  );
  const WholeBody = [head, body, rightHand, leftHand, rightLeg, leftLeg];

  return (
    <div className="hangmanDraw">
      {WholeBody.slice(0, incorrectLettersNumber)}
      <div className="ropePart" />
      <div className="topPart" />
      <div className="heightPart" />
      <div className="bottomPart" />
    </div>
  );
};

export default HangmanDraw;
