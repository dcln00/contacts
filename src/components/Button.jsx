export default function Button({ children, onClick, customClass}) {
	return <button className={customClass} onClick={onClick}>{children}</button>;
}
