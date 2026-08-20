import type { InductorProps } from "@tscircuit/props";

export const CDRH127NP_1R2NC = (props: Omit<InductorProps, "inductance">) => {
	return (
		<inductor
			inductance="1.2uH"
			supplierPartNumbers={{
				jlcpcb: ["C2998767"],
			}}
			manufacturerPartNumber="CDRH127NP-1R2NC"
			footprint={
				<footprint>
					<smtpad
						portHints={["pin1"]}
						pcbX="-4.99999mm"
						pcbY="0mm"
						width="2.999994mm"
						height="5.499989mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin2"]}
						pcbX="4.99999mm"
						pcbY="0mm"
						width="2.999994mm"
						height="5.499989mm"
						shape="rect"
					/>
					<silkscreenpath
						route={[
							{ x: 0, y: 5.99998800000003 },
							{ x: 5.99998800000003, y: 5.99998800000003 },
							{ x: 5.99998800000003, y: 2.9811217999999826 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 5.99998800000003, y: -2.9811217999999826 },
							{ x: 5.99998800000003, y: -5.99998800000003 },
							{ x: -5.999987999999917, y: -5.99998800000003 },
							{ x: -5.999987999999917, y: -2.9811217999999826 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -5.999987999999917, y: 2.9811217999999826 },
							{ x: -5.999987999999917, y: 5.99998800000003 },
							{ x: 0, y: 5.99998800000003 },
						]}
					/>
					<silkscreentext
						text="{NAME}"
						pcbX="0.00381mm"
						pcbY="6.9944mm"
						anchorAlignment="center"
						fontSize="1mm"
					/>
					<courtyardoutline
						outline={[
							{ x: -6.748589999999922, y: 6.244399999999928 },
							{ x: 6.75621000000001, y: 6.244399999999928 },
							{ x: 6.75621000000001, y: -6.2952000000000226 },
							{ x: -6.748589999999922, y: -6.2952000000000226 },
							{ x: -6.748589999999922, y: 6.244399999999928 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C2998767.obj?uuid=10082cbad93f4f798eb5b1b79ac6a749",
				stepUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C2998767.step?uuid=10082cbad93f4f798eb5b1b79ac6a749",
				pcbRotationOffset: 90,
				modelOriginPosition: { x: 0, y: 0, z: -0.2 },
			}}
			{...props}
		/>
	);
};
