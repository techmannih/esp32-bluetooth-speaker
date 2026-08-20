import type { InductorProps } from "@tscircuit/props";

export const PSPHAQ127_100M = (props: Omit<InductorProps, "inductance">) => {
	return (
		<inductor
			inductance="10uH"
			supplierPartNumbers={{
				jlcpcb: ["C2983061"],
			}}
			manufacturerPartNumber="PSPHAQ127-100M"
			footprint={
				<footprint>
					<smtpad
						portHints={["pin1"]}
						pcbX="4.899914mm"
						pcbY="0mm"
						width="2.7999944mm"
						height="5.3999892mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin2"]}
						pcbX="-4.899914mm"
						pcbY="0mm"
						width="2.7999944mm"
						height="5.3999892mm"
						shape="rect"
					/>
					<silkscreenpath
						route={[
							{ x: -6.096000000000004, y: -2.931134600000064 },
							{ x: -6.096000000000004, y: -6.096000000000004 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 6.096000000000004, y: 2.9311346000001777 },
							{ x: 6.096000000000004, y: 6.096000000000004 },
							{ x: -6.096000000000004, y: 6.096000000000004 },
							{ x: -6.096000000000004, y: 2.9311346000001777 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -6.096000000000004, y: -6.096000000000004 },
							{ x: 6.096000000000004, y: -6.096000000000004 },
							{ x: 6.096000000000004, y: -2.931134600000064 },
						]}
					/>
					<silkscreentext
						text="{NAME}"
						pcbX="0mm"
						pcbY="7.096mm"
						anchorAlignment="center"
						fontSize="1mm"
					/>
					<courtyardoutline
						outline={[
							{ x: -6.549200000000042, y: 6.346000000000004 },
							{ x: 6.549199999999928, y: 6.346000000000004 },
							{ x: 6.549199999999928, y: -6.346000000000004 },
							{ x: -6.549200000000042, y: -6.346000000000004 },
							{ x: -6.549200000000042, y: 6.346000000000004 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C2983061.obj?uuid=bf26f0e78653494eb3c935395f007944",
				stepUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C2983061.step?uuid=bf26f0e78653494eb3c935395f007944",
				pcbRotationOffset: 0,
				modelOriginPosition: { x: 0, y: -0.000012699999956566899, z: 0 },
			}}
			{...props}
		/>
	);
};
