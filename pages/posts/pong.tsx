import { useRef, useEffect, useState } from 'react';

export default function Pong() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const ctxRef = useRef<any>(null);

    const [ctx, setCtx] = useState<CanvasRenderingContext2D>();

    useEffect(() => {
		document.body.className = 'bg-zinc-900';
		if (canvasRef.current) {
			const canvas = canvasRef.current;
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;

			const context = canvas.getContext('2d');
			if (context) {
				context.clearRect(0, 0, canvas.width, canvas.height);
				ctxRef.current = context;
				setCtx(context);
			}
		}
    }, []);

    function drawElement() {
		if (canvasRef.current) {
			const canvas = canvasRef.current;
			let ballX: number = canvas.width / 2;
			let ballY: number = canvas.height / 2;
			if (ctx) {
				ctx.fillStyle = 'white';
				ctx.beginPath();
				ctx.arc(ballX, ballY, 10, 0, Math.PI*2, true);
				ctx.fill();

				ctx.fillRect(0, (canvas.height / 2) - 50 , 10, 100);
				ctx.fillRect(canvas.width - 5, (canvas.height / 2) - 50 , 10, 100);
			}
		}
    }

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div>
                <button
                    id="start"
                    onClick={drawElement}
					className="text-white"
                >
                    Start
                </button>
            </div>
            <canvas ref={canvasRef}></canvas>
        </div>
    );
}
