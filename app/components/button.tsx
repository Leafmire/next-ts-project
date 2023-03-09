"use client";

type ButtonProps = {
	content: string;
  };

const Button: React.FC<ButtonProps> = ({ content }) => {
	return (
		<button
		type="button"
		className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
		>
			{ content }
		</button>
	);
}

export default Button;
