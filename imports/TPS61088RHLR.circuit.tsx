import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["VCC"],
	pin2: ["EN"],
	pin3: ["FSW"],
	pin4: ["SW1"],
	pin5: ["SW2"],
	pin6: ["SW3"],
	pin7: ["SW4"],
	pin8: ["BOOT"],
	pin9: ["VIN"],
	pin10: ["SS"],
	pin11: ["NC1"],
	pin12: ["NC2"],
	pin13: ["MODE"],
	pin14: ["VOUT1"],
	pin15: ["VOUT2"],
	pin16: ["VOUT3"],
	pin17: ["FB"],
	pin18: ["COMP"],
	pin19: ["ILIM"],
	pin20: ["AGND"],
	pin21: ["PGND"],
} as const;

export const TPS61088RHLR = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			schWidth={2}
			schHeight={2.2}
			schPinArrangement={{
				leftSide: {
					direction: "top-to-bottom",
					pins: [
						"VIN",
						"EN",
						"FSW",
						"MODE",
						"BOOT",
						"VCC",
						"AGND",
						"PGND",
						"NC1",
						"NC2",
					],
				},
				rightSide: {
					direction: "top-to-bottom",
					pins: [
						"VOUT1",
						"VOUT2",
						"VOUT3",
						"FB",
						"COMP",
						"ILIM",
						"SS",
						"SW1",
						"SW2",
						"SW3",
						"SW4",
					],
				},
			}}
			pinLabels={pinLabels}
			supplierPartNumbers={{
				jlcpcb: ["C87357"],
			}}
			manufacturerPartNumber="TPS61088RHLR"
			footprint={
				<footprint>
					<smtpad
						portHints={["pin2"]}
						pcbX="-1.7480026mm"
						pcbY="-1.7272mm"
						width="0.24384mm"
						height="0.6999986mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin3"]}
						pcbX="-1.2480036mm"
						pcbY="-1.7272mm"
						width="0.24384mm"
						height="0.6999986mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin4"]}
						pcbX="-0.7480046mm"
						pcbY="-1.7272mm"
						width="0.24384mm"
						height="0.6999986mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin5"]}
						pcbX="-0.2480056mm"
						pcbY="-1.7272mm"
						width="0.24384mm"
						height="0.6999986mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin6"]}
						pcbX="0.251968mm"
						pcbY="-1.7272mm"
						width="0.24384mm"
						height="0.6999986mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin10"]}
						pcbX="2.1849842mm"
						pcbY="-0.7500112mm"
						width="0.6999986mm"
						height="0.24384mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin11"]}
						pcbX="2.1849842mm"
						pcbY="0.7499858mm"
						width="0.6999986mm"
						height="0.24384mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin12"]}
						pcbX="1.7519904mm"
						pcbY="1.7272mm"
						width="0.24384mm"
						height="0.6999986mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin13"]}
						pcbX="1.2519914mm"
						pcbY="1.7272mm"
						width="0.24384mm"
						height="0.6999986mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin14"]}
						pcbX="0.7519924mm"
						pcbY="1.7272mm"
						width="0.24384mm"
						height="0.6999986mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin15"]}
						pcbX="0.251968mm"
						pcbY="1.7272mm"
						width="0.24384mm"
						height="0.6999986mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin16"]}
						pcbX="-0.2480056mm"
						pcbY="1.7272mm"
						width="0.24384mm"
						height="0.6999986mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin20"]}
						pcbX="-2.1849842mm"
						pcbY="0.7499858mm"
						width="0.6999986mm"
						height="0.24384mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin1"]}
						pcbX="-2.1849842mm"
						pcbY="-0.7500112mm"
						width="0.6999986mm"
						height="0.24384mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin7"]}
						pcbX="0.751967mm"
						pcbY="-1.7272mm"
						width="0.24384mm"
						height="0.6999986mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin17"]}
						pcbX="-0.7480046mm"
						pcbY="1.7272mm"
						width="0.24384mm"
						height="0.6999986mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin8"]}
						pcbX="1.251966mm"
						pcbY="-1.7272mm"
						width="0.24384mm"
						height="0.6999986mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin9"]}
						pcbX="1.751965mm"
						pcbY="-1.7272mm"
						width="0.24384mm"
						height="0.6999986mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin18"]}
						pcbX="-1.2480036mm"
						pcbY="1.7272mm"
						width="0.24384mm"
						height="0.6999986mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin19"]}
						pcbX="-1.7480026mm"
						pcbY="1.7272mm"
						width="0.24384mm"
						height="0.6999986mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin21"]}
						points={[
							{ x: "-1.621028mm", y: "0.143002mm" },
							{ x: "-2.485009mm", y: "0.1459992mm" },
							{ x: "-2.485009mm", y: "0.3759962mm" },
							{ x: "-1.621028mm", y: "0.3800094mm" },
							{ x: "-1.6180054mm", y: "0.5649976mm" },
							{ x: "-1.5220188mm", y: "0.5659882mm" },
							{ x: "-1.5210282mm", y: "1.016mm" },
							{ x: "1.5259812mm", y: "1.016mm" },
							{ x: "1.522984mm", y: "0.570992mm" },
							{ x: "1.6209772mm", y: "0.570992mm" },
							{ x: "1.6239744mm", y: "0.381mm" },
							{ x: "2.4849836mm", y: "0.381mm" },
							{ x: "2.4849836mm", y: "0.1469898mm" },
							{ x: "1.6209772mm", y: "0.1469898mm" },
							{ x: "1.6239744mm", y: "-0.1370076mm" },
							{ x: "2.4849836mm", y: "-0.1370076mm" },
							{ x: "2.4849836mm", y: "-0.3709924mm" },
							{ x: "1.6209772mm", y: "-0.3709924mm" },
							{ x: "1.6239744mm", y: "-0.5610098mm" },
							{ x: "1.5259812mm", y: "-0.5610098mm" },
							{ x: "1.5259812mm", y: "-1.0139934mm" },
							{ x: "-1.5220188mm", y: "-1.016mm" },
							{ x: "-1.5220188mm", y: "-0.5670042mm" },
							{ x: "-1.620012mm", y: "-0.5670042mm" },
							{ x: "-1.6190214mm", y: "-0.3739896mm" },
							{ x: "-2.4810212mm", y: "-0.3739896mm" },
							{ x: "-2.4800052mm", y: "-0.143002mm" },
							{ x: "-1.6180054mm", y: "-0.1439926mm" },
							{ x: "-1.6190214mm", y: "0.1450086mm" },
						]}
						shape="polygon"
					/>
					<via
						pcbX="0.5269992mm"
						pcbY="-0mm"
						outerDiameter="0.3999992mm"
						holeDiameter="0.1999996mm"
						layers={["top", "bottom"]}
						connectsTo="net.GND"
					/>
					<via
						pcbX="-0.5230368mm"
						pcbY="-0mm"
						outerDiameter="0.3999992mm"
						holeDiameter="0.1999996mm"
						layers={["top", "bottom"]}
						connectsTo="net.GND"
					/>
					<via
						pcbX="1.2770612mm"
						pcbY="-0mm"
						outerDiameter="0.3999992mm"
						holeDiameter="0.1999996mm"
						layers={["top", "bottom"]}
						connectsTo="net.GND"
					/>
					<via
						pcbX="-1.2730988mm"
						pcbY="-0mm"
						outerDiameter="0.3999992mm"
						holeDiameter="0.1999996mm"
						layers={["top", "bottom"]}
						connectsTo="net.GND"
					/>
					<via
						pcbX="0.5269992mm"
						pcbY="0.774954mm"
						outerDiameter="0.3999992mm"
						holeDiameter="0.1999996mm"
						layers={["top", "bottom"]}
						connectsTo="net.GND"
					/>
					<via
						pcbX="-0.5230368mm"
						pcbY="0.774954mm"
						outerDiameter="0.3999992mm"
						holeDiameter="0.1999996mm"
						layers={["top", "bottom"]}
						connectsTo="net.GND"
					/>
					<via
						pcbX="0.5269992mm"
						pcbY="-0.774954mm"
						outerDiameter="0.3999992mm"
						holeDiameter="0.1999996mm"
						layers={["top", "bottom"]}
						connectsTo="net.GND"
					/>
					<via
						pcbX="-0.5230368mm"
						pcbY="-0.774954mm"
						outerDiameter="0.3999992mm"
						holeDiameter="0.1999996mm"
						layers={["top", "bottom"]}
						connectsTo="net.GND"
					/>
					<silkscreenpath
						route={[
							{ x: -2.2980141999999972, y: 1.7999963999999835 },
							{ x: -2.129078800000002, y: 1.7999963999999835 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 2.133041199999994, y: 1.7999963999999835 },
							{ x: 2.301976599999989, y: 1.7999963999999835 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -2.2980141999999972, y: -1.7999963999999977 },
							{ x: -2.129078800000002, y: -1.7999963999999977 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 2.133041199999994, y: -1.7999963999999977 },
							{ x: 2.301976599999989, y: -1.7999963999999977 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -2.2980141999999972, y: 1.7999963999999835 },
							{ x: -2.2980141999999972, y: 1.1150599999999855 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -2.2980141999999972, y: -1.1150599999999997 },
							{ x: -2.2980141999999972, y: -1.7999963999999977 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 2.301976599999989, y: 1.7999963999999835 },
							{ x: 2.301976599999989, y: 1.1150599999999855 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 2.301976599999989, y: -1.1150599999999997 },
							{ x: 2.301976599999989, y: -1.7999963999999977 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -2.593898799999991, y: -1.1998960000000096 },
							{ x: -2.5974472844502685, y: -1.2268494153569804 },
							{ x: -2.607850914449898, y: -1.251965999999996 },
							{ x: -2.6244006998072393, y: -1.2735341001927765 },
							{ x: -2.64596880000002, y: -1.2900838855501178 },
							{ x: -2.6710853846430354, y: -1.3004875155497473 },
							{ x: -2.698038800000006, y: -1.3040360000000106 },
							{ x: -2.724992215356963, y: -1.3004875155497473 },
							{ x: -2.7501088000000067, y: -1.2900838855501178 },
							{ x: -2.7716769001927872, y: -1.2735341001927765 },
							{ x: -2.7882266855501143, y: -1.251965999999996 },
							{ x: -2.798630315549758, y: -1.2268494153569804 },
							{ x: -2.802178800000007, y: -1.1998960000000096 },
							{ x: -2.798630315549758, y: -1.1729425846430388 },
							{ x: -2.7882266855501143, y: -1.1478260000000091 },
							{ x: -2.7716769001927872, y: -1.1262578998072286 },
							{ x: -2.7501088000000067, y: -1.1097081144499015 },
							{ x: -2.724992215356963, y: -1.099304484450272 },
							{ x: -2.698038800000006, y: -1.0957559999999944 },
							{ x: -2.6710853846430354, y: -1.099304484450272 },
							{ x: -2.64596880000002, y: -1.1097081144499015 },
							{ x: -2.6244006998072393, y: -1.1262578998072286 },
							{ x: -2.607850914449898, y: -1.1478260000000091 },
							{ x: -2.5974472844502685, y: -1.1729425846430388 },
							{ x: -2.593898799999991, y: -1.1998960000000096 },
						]}
					/>
					<silkscreentext
						text="{NAME}"
						pcbX="-0.2520188mm"
						pcbY="3.0828mm"
						anchorAlignment="center"
						fontSize="1mm"
					/>
					<courtyardoutline
						outline={[
							{ x: -3.296018800000013, y: 2.3327999999999918 },
							{ x: 2.791981199999995, y: 2.3327999999999918 },
							{ x: 2.791981199999995, y: -2.332800000000006 },
							{ x: -3.296018800000013, y: -2.332800000000006 },
							{ x: -3.296018800000013, y: 2.3327999999999918 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C87357.obj?uuid=c41c844f797843e499dfeaa14311e796",
				stepUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C87357.step?uuid=c41c844f797843e499dfeaa14311e796",
				pcbRotationOffset: 0,
				modelOriginPosition: { x: -0.001981199999988803, y: 0, z: -0.02 },
			}}
			{...props}
		/>
	);
};
