import React, { CSSProperties } from 'react';

interface IPropsy {
  sliderActiveCoords: (data: number) => void;
}

interface StateProps {
  gotCapture: boolean;
  circleLeft: number;

  delta: number;
  oneTimeTrip: number;
}
export default class DragItem extends React.Component<IPropsy> {
  state: StateProps = {
    gotCapture: false,
    circleLeft: 5,
    delta: 0,
    oneTimeTrip: 0,
  };
  isDragging = false;
  previousLeft = 0;

  constructor(props: IPropsy) {
    super(props);
  }
  validateTaps = () => {
    this.props.sliderActiveCoords(this.state.oneTimeTrip);
  };
  onDown = (e: any) => {
    this.isDragging = true;
    this.setState(({ oneTimeTrip }: StateProps) => ({
      oneTimeTrip: oneTimeTrip - oneTimeTrip,
    }));
    e.target.setPointerCapture(e.pointerId);
    this.getDelta(e);
  };

  onMove = (e: any) => {
    if (!this.isDragging) {
      return;
    }
    const { left } = this.getDelta(e);
    this.setState(({ circleLeft, oneTimeTrip }: StateProps) => ({
      circleLeft: circleLeft + left,
      oneTimeTrip: oneTimeTrip + left,
    }));
  };

  onUp = () => {
    this.isDragging = false;
    this.validateTaps();
  };
  onGotCapture = () => this.setState({ gotCapture: true });
  onLostCapture = () => {
    this.setState({ gotCapture: false });
  };

  getDelta = (e: any) => {
    const left = -e.pageX;
    const delta = {
      left: left - this.previousLeft,
    };
    this.previousLeft = left;

    return delta;
  };

  render() {
    const sensorPadStyle: CSSProperties = {
      width: '100%',
      height: '100%',
      position: 'absolute',
      touchAction: 'none',
      zIndex: 5,
    };

    return (
      <div
        style={sensorPadStyle}
        onPointerDown={this.onDown}
        onPointerMove={this.onMove}
        onPointerUp={this.onUp}
        onPointerCancel={this.onUp}
        onGotPointerCapture={this.onGotCapture}
        onLostPointerCapture={this.onLostCapture}
      />
    );
  }
}
