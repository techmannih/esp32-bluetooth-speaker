import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["pin1"],
	pin2: ["pin2"],
} as const;

export const S2B_XH_A_LF__SN_ = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			pinLabels={pinLabels}
			supplierPartNumbers={{
				jlcpcb: ["C157931"],
			}}
			manufacturerPartNumber="S2B-XH-A(LF)(SN)"
			footprint={
				<footprint>
					{/* Reference PCB land pattern: 2.50 mm pitch, 1.00 mm drills. */}
					<platedhole
						portHints={["pin1"]}
						pcbX={1.25}
						pcbY={0}
						holeDiameter={1}
						rectPadWidth={1.7}
						rectPadHeight={2}
						rectBorderRadius={0.125}
						shape="circular_hole_with_rect_pad"
					/>
					<platedhole
						portHints={["pin2"]}
						pcbX={-1.25}
						pcbY={0}
						outerWidth={1.7}
						outerHeight={2}
						holeWidth={1}
						holeHeight={1}
						shape="pill"
					/>
					<silkscreenpath
						route={[
							{ x: -3.699992600000087, y: -2.3000207999999702 },
							{ x: -3.699992600000087, y: 9.200007000000028 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -3.699992600000087, y: 9.200007000000028 },
							{ x: 3.699992599999973, y: 9.200007000000028 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 3.699992599999973, y: 9.200007000000028 },
							{ x: 3.699992599999973, y: -2.2999953999999434 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -3.699992600000087, y: -2.2999953999999434 },
							{ x: -2.5499821999999313, y: -2.2999953999999434 },
							{ x: -2.5499821999999313, y: 0 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 3.7000179999998863, y: -2.2999953999999434 },
							{ x: 2.549956800000018, y: -2.2999953999999434 },
							{ x: 2.549956800000018, y: 0 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -2.5499821999999313, y: 9.199981600000001 },
							{ x: -2.5499821999999313, y: 6.649974000000043 },
							{ x: -1.54998420000004, y: 6.649974000000043 },
							{ x: -1.54998420000004, y: 9.199981600000001 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 1.5500857999999198, y: 9.174886399999991 },
							{ x: 1.5500857999999198, y: 6.624878800000033 },
							{ x: 2.550083799999811, y: 6.624878800000033 },
							{ x: 2.550083799999811, y: 9.174886399999991 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -3.7007800000001225, y: 0 },
							{ x: -2.3511256000001595, y: 0 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -0.1888490000001184, y: 0 },
							{ x: 0.18887439999991784, y: 0 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 2.351150999999959, y: 0 },
							{ x: 3.699992599999973, y: 0 },
						]}
					/>
					<silkscreentext
						text="{NAME}"
						pcbX="0.0127mm"
						pcbY="10.2202mm"
						anchorAlignment="center"
						fontSize="1mm"
					/>
					<courtyardoutline
						outline={[
							{ x: -3.958400000000097, y: 9.470200000000204 },
							{ x: 3.9838000000000875, y: 9.470200000000204 },
							{ x: 3.9838000000000875, y: -2.5614000000000487 },
							{ x: -3.958400000000097, y: -2.5614000000000487 },
							{ x: -3.958400000000097, y: 9.470200000000204 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C157931.obj?uuid=62676bb5af5f42e6aed373b0523397e0",
				stepUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C157931.step?uuid=62676bb5af5f42e6aed373b0523397e0",
				pcbRotationOffset: 180,
				modelOriginPosition: {
					x: 0.0004999999999999449,
					y: 3.4650045000000773,
					z: -0.000006799999999973494,
				},
			}}
			{...props}
		/>
	);
};
