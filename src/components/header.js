import React from "react"

export default function Header(props) {
	return <h1 className={props.className}>{props.headerText}</h1>
}
