import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["MODSEL"],
	pin2: ["SDZ"],
	pin3: ["FAULTZ"],
	pin4: ["RINP"],
	pin5: ["RINN"],
	pin6: ["PLIMIT"],
	pin7: ["GVDD"],
	pin8: ["pin8"],
	pin9: ["GND1"],
	pin10: ["LINP"],
	pin11: ["LINN"],
	pin12: ["MUTE"],
	pin13: ["AM2"],
	pin14: ["AM1"],
	pin15: ["AM0"],
	pin16: ["SYNC"],
	pin17: ["AVCC"],
	pin18: ["PVCC4"],
	pin19: ["PVCC3"],
	pin20: ["BSNL"],
	pin21: ["OUTNL"],
	pin22: ["GND4"],
	pin23: ["OUTPL"],
	pin24: ["BSPL"],
	pin25: ["GND3"],
	pin26: ["BSNR"],
	pin27: ["OUTNR"],
	pin28: ["GND2"],
	pin29: ["OUTPR"],
	pin30: ["BSPR"],
	pin31: ["PVCC2"],
	pin32: ["PVCC1"],
	pin33: ["POWERPAD", "EP"],
} as const;

export const TPA3116D2DAD = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			schWidth={2.2}
			schHeight={3.4}
			schPinArrangement={{
				leftSide: {
					direction: "top-to-bottom",
					pins: [
						"MODSEL",
						"SDZ",
						"FAULTZ",
						"RINP",
						"RINN",
						"PLIMIT",
						"GVDD",
						"pin8",
						"GND1",
						"LINP",
						"LINN",
						"MUTE",
						"AM2",
						"AM1",
						"AM0",
						"SYNC",
					],
				},
				rightSide: {
					direction: "top-to-bottom",
					pins: [
						"PVCC1",
						"PVCC2",
						"BSPR",
						"OUTPR",
						"GND2",
						"OUTNR",
						"BSNR",
						"GND3",
						"BSPL",
						"OUTPL",
						"GND4",
						"OUTNL",
						"BSNL",
						"PVCC3",
						"PVCC4",
						"AVCC",
						"POWERPAD",
					],
				},
			}}
			pinLabels={pinLabels}
			supplierPartNumbers={{
				jlcpcb: ["C2865736"],
			}}
			manufacturerPartNumber="TPA3116D2DAD"
		footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-4.875022mm" pcbY="-3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin2"]} pcbX="-4.225036mm" pcbY="-3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin3"]} pcbX="-3.57505mm" pcbY="-3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin4"]} pcbX="-2.925064mm" pcbY="-3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="-2.275078mm" pcbY="-3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin6"]} pcbX="-1.625092mm" pcbY="-3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin7"]} pcbX="-0.975106mm" pcbY="-3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin8"]} pcbX="-0.324866mm" pcbY="-3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin9"]} pcbX="0.32512mm" pcbY="-3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin10"]} pcbX="0.975106mm" pcbY="-3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin11"]} pcbX="1.625092mm" pcbY="-3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin12"]} pcbX="2.275078mm" pcbY="-3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin13"]} pcbX="2.925064mm" pcbY="-3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin14"]} pcbX="3.57505mm" pcbY="-3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin15"]} pcbX="4.225036mm" pcbY="-3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin16"]} pcbX="4.875022mm" pcbY="-3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin32"]} pcbX="-4.875022mm" pcbY="3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin31"]} pcbX="-4.225036mm" pcbY="3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin30"]} pcbX="-3.57505mm" pcbY="3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin29"]} pcbX="-2.925064mm" pcbY="3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin28"]} pcbX="-2.275078mm" pcbY="3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin27"]} pcbX="-1.625092mm" pcbY="3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin26"]} pcbX="-0.975106mm" pcbY="3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin25"]} pcbX="-0.324866mm" pcbY="3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin24"]} pcbX="0.32512mm" pcbY="3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin23"]} pcbX="0.975106mm" pcbY="3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin22"]} pcbX="1.625092mm" pcbY="3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin21"]} pcbX="2.275078mm" pcbY="3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin20"]} pcbX="2.925064mm" pcbY="3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin19"]} pcbX="3.57505mm" pcbY="3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin18"]} pcbX="4.225036mm" pcbY="3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<smtpad portHints={["pin17"]} pcbX="4.875022mm" pcbY="3.723259mm" width="0.3430016mm" height="1.746504mm" radius="0.1715008mm" shape="pill" />
<silkscreenpath route={[{"x":-5.576188999999999,"y":-2.6212799999998424},{"x":-5.576188999999999,"y":2.621533999999997},{"x":5.576188999999999,"y":2.621533999999997},{"x":5.576188999999999,"y":-2.6212799999998424},{"x":-5.576188999999999,"y":-2.6212799999998424}]} />
<silkscreenpath route={[{"x":-4.724908000000141,"y":-1.8688050000000658},{"x":-4.730023010512582,"y":-1.9076573621364332},{"x":-4.7450194625364475,"y":-1.9438619999999673},{"x":-4.768875372649063,"y":-1.9749516273510608},{"x":-4.799965000000043,"y":-1.9988075374636765},{"x":-4.836169637863577,"y":-2.013803989487542},{"x":-4.875022000000172,"y":-2.018918999999869},{"x":-4.913874362136653,"y":-2.013803989487542},{"x":-4.950079000000073,"y":-1.9988075374636765},{"x":-4.9811686273512805,"y":-1.9749516273510608},{"x":-5.005024537463896,"y":-1.9438619999999673},{"x":-5.020020989487534,"y":-1.9076573621364332},{"x":-5.025136000000089,"y":-1.8688050000000658},{"x":-5.020020989487534,"y":-1.8299526378633573},{"x":-5.005024537463896,"y":-1.7937479999999368},{"x":-4.9811686273512805,"y":-1.762658372648957},{"x":-4.950079000000073,"y":-1.7388024625363414},{"x":-4.913874362136653,"y":-1.723806010512476},{"x":-4.875022000000172,"y":-1.7186909999999216},{"x":-4.836169637863577,"y":-1.723806010512476},{"x":-4.799965000000043,"y":-1.7388024625363414},{"x":-4.768875372649063,"y":-1.762658372648957},{"x":-4.7450194625364475,"y":-1.7937479999999368},{"x":-4.730023010512582,"y":-1.8299526378633573},{"x":-4.724908000000141,"y":-1.8688050000000658}]} />
<silkscreenpath route={[{"x":-5.348731999999927,"y":-3.723258999999871},{"x":-5.353847010512482,"y":-3.7621113621365794},{"x":-5.368843462536347,"y":-3.798316},{"x":-5.392699372648963,"y":-3.8294056273509796},{"x":-5.4237889999999425,"y":-3.8532615374635952},{"x":-5.459993637863363,"y":-3.8682579894874607},{"x":-5.498846000000071,"y":-3.873373000000015},{"x":-5.5376983621365525,"y":-3.8682579894874607},{"x":-5.573902999999973,"y":-3.8532615374635952},{"x":-5.604992627351066,"y":-3.8294056273509796},{"x":-5.628848537463682,"y":-3.798316},{"x":-5.643844989487434,"y":-3.7621113621365794},{"x":-5.648959999999988,"y":-3.723258999999871},{"x":-5.643844989487434,"y":-3.6844066378635034},{"x":-5.628848537463682,"y":-3.6482019999999693},{"x":-5.604992627351066,"y":-3.617112372648876},{"x":-5.573902999999973,"y":-3.59325646253626},{"x":-5.5376983621365525,"y":-3.5782600105125084},{"x":-5.498846000000071,"y":-3.5731450000000677},{"x":-5.459993637863363,"y":-3.5782600105125084},{"x":-5.4237889999999425,"y":-3.59325646253626},{"x":-5.392699372648963,"y":-3.617112372648876},{"x":-5.368843462536347,"y":-3.6482019999999693},{"x":-5.353847010512482,"y":-3.6844066378635034},{"x":-5.348731999999927,"y":-3.723258999999871}]} />
<silkscreentext text="{NAME}" pcbX="-0.0254mm" pcbY="5.419727mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.88880000000006,"y":4.66972700000008},{"x":5.837999999999965,"y":4.66972700000008},{"x":5.837999999999965,"y":-4.669472999999925},{"x":-5.88880000000006,"y":-4.669472999999925},{"x":-5.88880000000006,"y":4.66972700000008}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2865736.obj?uuid=01398eb211cd42de99baf7928a6338ec",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2865736.step?uuid=01398eb211cd42de99baf7928a6338ec",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.00012700000002041634, y: 0, z: -0.099083 },
      }}
			{...props}
		/>
	);
};
