import logoCentral from "../../atoms/logo-central.svg"
import "./logoCentral.scss"


export const LogoCentral = () => {

	return (
		<div className="logo">
			<img src={logoCentral} alt="logoCentral" />
		</div>
	)
}