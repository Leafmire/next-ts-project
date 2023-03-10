"use client";

import { useRef, useEffect, useState } from 'react';

export default function Pong() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const ctxRef = useRef<any>(null);

    const [ctx, setCtx] = useState<CanvasRenderingContext2D>();

    useEffect(() => {
		document.body.classList.add('bg-zinc-900');
		if (canvasRef.current) {
			const canvas = canvasRef.current;
			canvas.width = 820;
			canvas.height = 590;

			const context = canvas.getContext('2d');
			if (context) {
				context.clearRect(0, 0, canvas.width, canvas.height);
				ctxRef.current = context;
				setCtx(context);
			}
		}
		return () => document.body.classList.remove('bg-zinc-900');
    }, []);

    function drawElement() {
		if (canvasRef.current) {
			const canvas = canvasRef.current;
			let ballX: number = canvas.width / 2;
			let ballY: number = canvas.height / 2;
			if (ctx) {
				ctx.strokeStyle = 'rgb(113 113 122)';
				ctx.strokeRect(0, 0, canvas.width, canvas.height);

				ctx.fillStyle = 'rgb(113 113 122)';
				for (let h: number = 0; h < canvas.height; h += 20)
					ctx.fillRect((canvas.width / 2) - 5, h , 10, 10);

				ctx.fillStyle = 'white';
				ctx.beginPath();
				ctx.arc(ballX, ballY, 10, 0, Math.PI*2, true);
				ctx.fill();

				ctx.fillRect(0, (canvas.height / 2) - 50 , 8, 90);
				ctx.fillRect(canvas.width - 8, (canvas.height / 2) - 50 , 10, 90);
			}
		}
    }

    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
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
