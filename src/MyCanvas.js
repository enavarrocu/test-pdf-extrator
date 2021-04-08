import CanvasDraw from 'react-canvas-draw';
import logo from './logo.svg';

function renderSVG(canvas) {
    var img = new Image();
    img.onload = function () {
        console.log("Drawing");
        canvas.ctx.drawing.drawImage(img, 0,0, 841.9/2, 595.3/2);
    }
    // img.src = "http://upload.wikimedia.org/wikipedia/commons/d/d2/Svg_example_square.svg";
    img.src = logo;
}

export function MyCanvas() {
    var temp;
    return (
        <>
            <CanvasDraw Id="canvas1"
                        hideGrid
                        disabled
                        ref={canvasDraw => (temp = canvasDraw)}
                        imgSrc="https://upload.wikimedia.org/wikipedia/commons/a/a1/Nepalese_Mhapuja_Mandala.jpg"
            />
            <button onClick={() => renderSVG(temp)}>test</button>
        </>
    );
}