import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import BarChartHierarchy from "./BarChartHierarchy";

const BarchartHierarchyWrapper = props => {
	const targetRef = useRef(null);

	useEffect(() => {
		const bh = BarChartHierarchy(targetRef.current);
		bh.update(props.data);
	});

	return (
		<div className="BarchartHierarchyWrapper">
			<div ref={targetRef}></div>
		</div>
	);
};

BarchartHierarchyWrapper.propTypes = {
	data: PropTypes.object.isRequired
};

export default BarchartHierarchyWrapper;
