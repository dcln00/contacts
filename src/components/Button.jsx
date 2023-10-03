export default function Button({ children, onClick, customClass, customStyle}) {
	return <button className={customClass} onClick={onClick} style={customStyle}>{children}</button>;
}
