import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["GND1"],
	pin2: ["3V3"],
	pin3: ["EN"],
	pin4: ["SENSOR_VP"],
	pin5: ["SENSOR_VN"],
	pin6: ["IO34"],
	pin7: ["IO35"],
	pin8: ["IO32"],
	pin9: ["IO33"],
	pin10: ["IO25"],
	pin11: ["IO26"],
	pin12: ["IO27"],
	pin13: ["IO14"],
	pin14: ["IO12"],
	pin15: ["GND2"],
	pin16: ["IO13"],
	pin17: ["pin17"],
	pin18: ["pin18"],
	pin19: ["pin19"],
	pin20: ["pin20"],
	pin21: ["pin21"],
	pin22: ["pin22"],
	pin23: ["IO15"],
	pin24: ["IO2"],
	pin25: ["IO0"],
	pin26: ["IO4"],
	pin27: ["IO16"],
	pin28: ["IO17"],
	pin29: ["IO5"],
	pin30: ["IO18"],
	pin31: ["IO19"],
	pin32: ["NC"],
	pin33: ["IO21"],
	pin34: ["RXD0"],
	pin35: ["TXD0"],
	pin36: ["IO22"],
	pin37: ["IO23"],
	pin38: ["GND3"],
	pin39: ["GND4"],
} as const;

export const ESP32_WROOM_32_N4 = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			schWidth={2.4}
			schHeight={4}
			schPinArrangement={{
				leftSide: {
					direction: "top-to-bottom",
					pins: [
						"EN",
						"SENSOR_VP",
						"SENSOR_VN",
						"pin17",
						"pin18",
						"pin19",
						"pin20",
						"pin21",
						"pin22",
						"3V3",
						"GND1",
						"GND2",
						"GND3",
						"GND4",
						"NC",
						"IO32",
						"IO33",
						"IO34",
						"IO35",
					],
				},
				rightSide: {
					direction: "top-to-bottom",
					pins: [
						"IO0",
						"TXD0",
						"IO2",
						"RXD0",
						"IO4",
						"IO5",
						"IO12",
						"IO13",
						"IO14",
						"IO15",
						"IO16",
						"IO17",
						"IO18",
						"IO19",
						"IO21",
						"IO22",
						"IO23",
						"IO25",
						"IO26",
						"IO27",
					],
				},
			}}
			pinLabels={pinLabels}
			supplierPartNumbers={{
				jlcpcb: ["C82899"],
			}}
			manufacturerPartNumber="ESP32-WROOM-32-N4"
			footprint={
				<footprint>
					<smtpad
						portHints={["pin1"]}
						pcbX="-8.999982mm"
						pcbY="9.28006145mm"
						width="1.999996mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin2"]}
						pcbX="-8.999982mm"
						pcbY="8.01006145mm"
						width="1.999996mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin3"]}
						pcbX="-8.999982mm"
						pcbY="6.74006145mm"
						width="1.999996mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin4"]}
						pcbX="-8.999982mm"
						pcbY="5.47006145mm"
						width="1.999996mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin5"]}
						pcbX="-8.999982mm"
						pcbY="4.20006145mm"
						width="1.999996mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin6"]}
						pcbX="-8.999982mm"
						pcbY="2.93006145mm"
						width="1.999996mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin7"]}
						pcbX="-8.999982mm"
						pcbY="1.66006145mm"
						width="1.999996mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin8"]}
						pcbX="-8.999982mm"
						pcbY="0.39006145mm"
						width="1.999996mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin9"]}
						pcbX="-8.999982mm"
						pcbY="-0.87993855mm"
						width="1.999996mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin10"]}
						pcbX="-8.999982mm"
						pcbY="-2.14993855mm"
						width="1.999996mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin11"]}
						pcbX="-8.999982mm"
						pcbY="-3.41993855mm"
						width="1.999996mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin12"]}
						pcbX="-8.999982mm"
						pcbY="-4.68993855mm"
						width="1.999996mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin13"]}
						pcbX="-8.999982mm"
						pcbY="-5.95993855mm"
						width="1.999996mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin14"]}
						pcbX="-8.999982mm"
						pcbY="-7.22993855mm"
						width="1.999996mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin15"]}
						pcbX="-5.715mm"
						pcbY="-8.73006255mm"
						width="0.8999982mm"
						height="1.999996mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin16"]}
						pcbX="-4.445mm"
						pcbY="-8.73006255mm"
						width="0.8999982mm"
						height="1.999996mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin17"]}
						pcbX="-3.175mm"
						pcbY="-8.73006255mm"
						width="0.8999982mm"
						height="1.999996mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin18"]}
						pcbX="-1.905mm"
						pcbY="-8.73006255mm"
						width="0.8999982mm"
						height="1.999996mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin19"]}
						pcbX="-0.635mm"
						pcbY="-8.73006255mm"
						width="0.8999982mm"
						height="1.999996mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin20"]}
						pcbX="0.635mm"
						pcbY="-8.73006255mm"
						width="0.8999982mm"
						height="1.999996mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin21"]}
						pcbX="1.905mm"
						pcbY="-8.73006255mm"
						width="0.8999982mm"
						height="1.999996mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin22"]}
						pcbX="3.175mm"
						pcbY="-8.73006255mm"
						width="0.8999982mm"
						height="1.999996mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin23"]}
						pcbX="4.445mm"
						pcbY="-8.73006255mm"
						width="0.8999982mm"
						height="1.999996mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin24"]}
						pcbX="5.715mm"
						pcbY="-8.73006255mm"
						width="0.8999982mm"
						height="1.999996mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin25"]}
						pcbX="8.999982mm"
						pcbY="-7.22993855mm"
						width="1.999996mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin26"]}
						pcbX="8.999982mm"
						pcbY="-5.95993855mm"
						width="1.999996mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin27"]}
						pcbX="8.999982mm"
						pcbY="-4.68993855mm"
						width="1.999996mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin28"]}
						pcbX="8.999982mm"
						pcbY="-3.41993855mm"
						width="1.999996mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin29"]}
						pcbX="8.999982mm"
						pcbY="-2.14993855mm"
						width="1.999996mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin30"]}
						pcbX="8.999982mm"
						pcbY="-0.87993855mm"
						width="1.999996mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin31"]}
						pcbX="8.999982mm"
						pcbY="0.39006145mm"
						width="1.999996mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin32"]}
						pcbX="8.999982mm"
						pcbY="1.66006145mm"
						width="1.999996mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin33"]}
						pcbX="8.999982mm"
						pcbY="2.93006145mm"
						width="1.999996mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin34"]}
						pcbX="8.999982mm"
						pcbY="4.20006145mm"
						width="1.999996mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin35"]}
						pcbX="8.999982mm"
						pcbY="5.47006145mm"
						width="1.999996mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin36"]}
						pcbX="8.999982mm"
						pcbY="6.74006145mm"
						width="1.999996mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin37"]}
						pcbX="8.999982mm"
						pcbY="8.01006145mm"
						width="1.999996mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin38"]}
						pcbX="8.999982mm"
						pcbY="9.28006145mm"
						width="1.999996mm"
						height="0.8999982mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin39"]}
						pcbX="-0.679958mm"
						pcbY="1.93971545mm"
						width="4.0999918mm"
						height="4.0999918mm"
						shape="rect"
					/>
					<silkscreenpath
						route={[
							{ x: -9.016999999999939, y: 16.3440300499999 },
							{ x: -9.016999999999939, y: 16.809967649999862 },
							{ x: 9.019997200000034, y: 16.809967649999862 },
							{ x: 9.019997200000034, y: 16.344004649999988 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 6.649542200000155, y: 12.211958049999907 },
							{ x: 6.649542200000155, y: 15.57895665000001 },
							{ x: 3.1494729999999436, y: 15.57895665000001 },
							{ x: 3.1494729999999436, y: 12.579140450000068 },
							{ x: 0.6500368000000663, y: 12.579140450000068 },
							{ x: 0.6500368000000663, y: 15.57895665000001 },
							{ x: -1.8493485999998711, y: 15.57895665000001 },
							{ x: -1.8493485999998711, y: 12.579140450000068 },
							{ x: -4.351273999999876, y: 12.579140450000068 },
							{ x: -4.351273999999876, y: 15.57895665000001 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 5.080025400000068, y: 15.57895665000001 },
							{ x: 5.080025400000068, y: 12.211958049999907 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -4.350334199999793, y: 15.57956624999997 },
							{ x: -6.850405399999886, y: 15.57956624999997 },
							{ x: -6.850405399999886, y: 12.079573249999953 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 9.017000000000053, y: 16.344004649999988 },
							{ x: 9.017000000000053, y: 9.96116244999996 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -9.016999999999939, y: 16.3440300499999 },
							{ x: -9.016999999999939, y: 9.96116244999996 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -9.016974599999912, y: 11.44401444999994 },
							{ x: 9.017025400000193, y: 11.44401444999994 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -9.016974599999912, y: -7.911115750000022 },
							{ x: -9.016974599999912, y: -8.855995750000034 },
							{ x: -6.396100999999817, y: -8.856097350000027 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 6.396151800000098, y: -8.855995750000034 },
							{ x: 9.017025400000193, y: -8.855995750000034 },
							{ x: 9.017025400000193, y: -7.911115750000022 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -9.72794599999986, y: 10.401979449999999 },
							{ x: -9.739604069645111, y: 10.313427619546701 },
							{ x: -9.77378380039977, y: 10.23091045000001 },
							{ x: -9.828155900098409, y: 10.160051350098456 },
							{ x: -9.89901499999985, y: 10.10567925039993 },
							{ x: -9.981532169546654, y: 10.071499519645158 },
							{ x: -10.070083999999952, y: 10.059841450000022 },
							{ x: -10.158635830453136, y: 10.071499519645158 },
							{ x: -10.24115299999994, y: 10.10567925039993 },
							{ x: -10.312012099901494, y: 10.160051350098456 },
							{ x: -10.36638419960002, y: 10.23091045000001 },
							{ x: -10.400563930354679, y: 10.313427619546701 },
							{ x: -10.412221999999929, y: 10.401979449999999 },
							{ x: -10.400563930354679, y: 10.490531280453297 },
							{ x: -10.36638419960002, y: 10.573048449999874 },
							{ x: -10.312012099901494, y: 10.643907549901542 },
							{ x: -10.24115299999994, y: 10.698279649599954 },
							{ x: -10.158635830453136, y: 10.73245938035484 },
							{ x: -10.070083999999952, y: 10.74411745000009 },
							{ x: -9.981532169546654, y: 10.73245938035484 },
							{ x: -9.89901499999985, y: 10.698279649599954 },
							{ x: -9.828155900098409, y: 10.643907549901542 },
							{ x: -9.77378380039977, y: 10.573048449999874 },
							{ x: -9.739604069645111, y: 10.490531280453297 },
							{ x: -9.72794599999986, y: 10.401979449999999 },
						]}
					/>
					<silkscreentext
						text="{NAME}"
						pcbX="-0.209042mm"
						pcbY="17.81878145mm"
						anchorAlignment="center"
						fontSize="1mm"
					/>
					<courtyardoutline
						outline={[
							{ x: -10.669841999999903, y: 17.06878144999996 },
							{ x: 10.251758000000109, y: 17.06878144999996 },
							{ x: 10.251758000000109, y: -9.974218550000046 },
							{ x: -10.669841999999903, y: -9.974218550000046 },
							{ x: -10.669841999999903, y: 17.06878144999996 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C82899.obj?uuid=e65bc1dcd76b475a8d6f51629d907f8a",
				stepUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C82899.step?uuid=e65bc1dcd76b475a8d6f51629d907f8a",
				pcbRotationOffset: 0,
				modelOriginPosition: {
					x: -0.000025400000026820635,
					y: -4.018430750000005,
					z: -0.01,
				},
			}}
			{...props}
		/>
	);
};
