import React, { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
	type?: 'button' | 'submit' | 'delete';
}

export default function Button({ children, onClick }: Props, type = 'button') {
	return (
		<button
			className="bg-blue-500 text-white text-base border-none rounded-xl cursor-pointer w-20 h-10 m-auto my-5"
			onClick={onClick}
		>
			{children}
		</button>
	);
}
