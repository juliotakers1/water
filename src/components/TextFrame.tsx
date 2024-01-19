import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./TextFrame.css";

type TextFrameType = {
  clientesNuevos?: string;
  danielaIcon?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
};

const TextFrame: FunctionComponent<TextFrameType> = ({
  clientesNuevos,
  danielaIcon,
  propFlex,
  propMinWidth,
  propAlignSelf,
  propBackgroundColor,
  propColor,
}) => {
  const textFrameStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const borderFrameStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const moneySymbolFrameStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="text-frame1" style={textFrameStyle}>
      <div className="text-frame-child" />
      <div className="clientes-nuevos">{clientesNuevos}</div>
      <div className="daniela-icon-parent" style={frameDivStyle}>
        <div className="daniela-icon">{danielaIcon}</div>
        <div className="border-frame-parent">
          <button className="border-frame" style={borderFrameStyle}>
            <div className="money-symbol-frame" style={moneySymbolFrameStyle}>
              +8.2%
            </div>
          </button>
          <div className="en-el-ltimo1">En el último mes</div>
        </div>
      </div>
    </div>
  );
};

export default TextFrame;
