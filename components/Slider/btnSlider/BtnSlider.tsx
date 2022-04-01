import s from "./BtnSlider.module.css";

interface BtnSliderProps {
  moveSlide: () => void;
  direction: "next" | "prev";
}

function BtnSlider({ moveSlide, direction }: BtnSliderProps) {
  return (
    <button
      className={
        direction === "next"
          ? `${s.btnSlide} ${s.next}`
          : `${s.btnSlide} ${s.prev}`
      }
      onClick={moveSlide}
    >
      <img
        src={direction === "next" ? "/rightArrow.svg" : "/leftArrow.svg"}
        alt="right arrow"
        className={s.rightArrow}
      />
    </button>
  );
}

export default BtnSlider;
