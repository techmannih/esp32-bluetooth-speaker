import "tscircuit";

import { B2B_PH_K_S_LF__SN_ } from "./imports/B2B_PH_K_S_LF__SN_.circuit";
import { CDRH127NP_1R2NC } from "./imports/CDRH127NP_1R2NC";
import { CH340C } from "./imports/CH340C.circuit";
import { ESP32_WROOM_32_N4 } from "./imports/ESP32_WROOM_32_N4.circuit";
import { MAX17048G_T10 } from "./imports/MAX17048G_T10.circuit";
import { PCM5100APWR } from "./imports/PCM5100APWR.circuit";
import { PSPHAQ127_100M } from "./imports/PSPHAQ127_100M";
import { S2B_XH_A_LF__SN_ } from "./imports/S2B_XH_A_LF__SN_.circuit";
import { TP4056_42_ESOP8 } from "./imports/TP4056_42_ESOP8.circuit";
import { TPA3116D2DAD } from "./imports/TPA3116D2DAD.circuit";
import { TPS61088RHLR } from "./imports/TPS61088RHLR.circuit";
import { TYPE_C_31_M_12 } from "./imports/TYPE_C_31_M_12.circuit";
import { XC6220B331MR } from "./imports/XC6220B331MR.circuit";

/**
 * Native tscircuit reconstruction of the checked-in KiCad reference board.
 *
 * The structure intentionally follows blue-boorter: direct JSX declarations
 * for native components, with local JLCPCB imports only for parts that do not
 * have an equivalent tscircuit primitive.
 */
export const ESP32HiFiBluetoothSpeaker = () => (
	<board
		name="ESP32_HIFI_BLUETOOTH_SPEAKER"
		title="ESP32 HiFi Bluetooth Speaker"
		width="125.78mm"
		height="48.0208mm"
		borderRadius="3.96mm"
		thickness="1.58mm"
		material="fr4"
		layers={4}
		isViaInPadAllowed
		solderMaskColor="#176b43"
	>
		<schematicsheet
			name="amplifier_core"
			displayName="Class-D Amplifier — Core"
			sheetIndex={1}
		/>
		<schematicsheet
			name="amplifier_output"
			displayName="Class-D Amplifier — Output Filters"
			sheetIndex={2}
		/>
		<schematicsheet
			name="dac"
			displayName="PCM5100A Audio DAC"
			sheetIndex={3}
		/>
		<schematicsheet
			name="mcu"
			displayName="ESP32 Controller and Indicators"
			sheetIndex={4}
		/>
		<schematicsheet
			name="usb_uart"
			displayName="USB-C and CH340C Serial Adapter"
			sheetIndex={5}
		/>
		<schematicsheet
			name="charger"
			displayName="Li-ion Charger and Status"
			sheetIndex={6}
		/>
		<schematicsheet
			name="battery_power"
			displayName="Battery Input and 3.3 V LDO"
			sheetIndex={7}
		/>
		<schematicsheet
			name="boost"
			displayName="12 V Boost Converter"
			sheetIndex={8}
		/>
		<schematicsheet
			name="fuel_gauge"
			displayName="MAX17048 Fuel Gauge"
			sheetIndex={9}
		/>
		<schematicsheet
			name="mechanical"
			displayName="Board Mechanical"
			sheetIndex={10}
		/>

		{/* Four plated mounting holes from the reference PCB. */}
		<chip
			manufacturerPartNumber="MountingHole_Pad_2.2mm"
			pinLabels={{ pin1: ["MOUNT"] }}
			footprint="platedhole_d2.2mm_pd4.4mm"
			name="H1"
			pcbX={59.44}
			pcbY={20.4696}
			pcbRotation={0}
			schSheetName="mechanical"
			schX={0}
			schY={2.286}
			connections={{
				pin1: "net.GND",
			}}
		/>
		<chip
			manufacturerPartNumber="MountingHole_Pad_2.2mm"
			pinLabels={{ pin1: ["MOUNT"] }}
			footprint="platedhole_d2.2mm_pd4.4mm"
			name="H2"
			pcbX={59.31}
			pcbY={-20.3704}
			pcbRotation={0}
			schSheetName="mechanical"
			schX={0}
			schY={0.762}
			connections={{
				pin1: "net.GND",
			}}
		/>
		<chip
			manufacturerPartNumber="MountingHole_Pad_2.2mm"
			pinLabels={{ pin1: ["MOUNT"] }}
			footprint="platedhole_d2.2mm_pd4.4mm"
			name="H3"
			pcbX={-59.32}
			pcbY={-20.6804}
			pcbRotation={0}
			schSheetName="mechanical"
			schX={0}
			schY={-0.762}
			connections={{
				pin1: "net.GND",
			}}
		/>
		<chip
			manufacturerPartNumber="MountingHole_Pad_2.2mm"
			pinLabels={{ pin1: ["MOUNT"] }}
			footprint="platedhole_d2.2mm_pd4.4mm"
			name="H4"
			pcbX={-59.59}
			pcbY={20.5096}
			pcbRotation={0}
			schSheetName="mechanical"
			schX={0}
			schY={-2.286}
			connections={{
				pin1: "net.GND",
			}}
		/>

		{/* Class-D stereo amplifier */}
		<TPA3116D2DAD
			name="U1"
			pcbX={-26.547}
			pcbY={-0.0754}
			pcbRotation={270}
			schSheetName="amplifier_core"
			schX={5.4344}
			schY={-2.4452}
			connections={{
				pin1: "net.GND",
				pin2: "net.Net_U1_SDZ",
				pin3: "net.Net_U1_FAULTZ",
				pin4: "net.Net_U1_INPR",
				pin5: "net.Net_U1_INNR",
				pin6: "net.Net_U1_GVDD",
				pin7: "net.Net_U1_GVDD",
				pin8: "net.Net_U1_GAIN_slash_SLV",
				pin9: "net.GND",
				pin10: "net.Net_U1_INPL",
				pin11: "net.Net_U1_INNL",
				pin12: "net.GND",
				pin13: "net.GND",
				pin14: "net.GND",
				pin15: "net.GND",
				pin17: "net.P12V",
				pin18: "net.P12V",
				pin19: "net.P12V",
				pin20: "net.Net_U1_BSNL",
				pin21: "net.Net_U1_OUTNL",
				pin22: "net.GND",
				pin23: "net.Net_U1_OUTPL",
				pin24: "net.Net_U1_BSPL",
				pin25: "net.GND",
				pin26: "net.Net_U1_BSNR",
				pin27: "net.Net_U1_OUTNR",
				pin28: "net.GND",
				pin29: "net.Net_U1_OUTPR",
				pin30: "net.Net_U1_BSPR",
				pin31: "net.P12V",
				pin32: "net.P12V",
				pin33: "net.GND",
			}}
			noConnect={["pin16"]}
		/>
		<S2B_XH_A_LF__SN_
			name="J1"
			pcbX={-22.52}
			pcbY={16.0996}
			pcbRotation={0}
			schSheetName="amplifier_output"
			schX={11.3}
			schY={4.3028}
			connections={{
				pin1: "net.Net_J1_Pin_1",
				pin2: "net.Net_J1_Pin_2",
			}}
		/>
		<S2B_XH_A_LF__SN_
			name="J2"
			pcbX={-22.33}
			pcbY={-15.7304}
			pcbRotation={180}
			schSheetName="amplifier_output"
			schX={11.3}
			schY={-6.0604}
			connections={{
				pin1: "net.Net_J2_Pin_1",
				pin2: "net.Net_J2_Pin_2",
			}}
		/>
		<PSPHAQ127_100M
			name="L1"
			pcbX={-10.745}
			pcbY={9.6246}
			pcbRotation={180}
			schSheetName="amplifier_output"
			schX={-4.2448}
			schY={9.1796}
			schOrientation="horizontal"
			connections={{
				pin1: "net.Net_U1_OUTPR",
				pin2: "net.Net_J1_Pin_1",
			}}
		/>
		<PSPHAQ127_100M
			name="L2"
			pcbX={3.105}
			pcbY={-8.3254}
			pcbRotation={0}
			schSheetName="amplifier_output"
			schX={-4.2448}
			schY={-1.1836}
			schOrientation="horizontal"
			connections={{
				pin1: "net.Net_U1_OUTPL",
				pin2: "net.Net_J2_Pin_1",
			}}
		/>
		<PSPHAQ127_100M
			name="L3"
			pcbX={2.93}
			pcbY={8.6246}
			pcbRotation={180}
			schSheetName="amplifier_output"
			schX={-4.2448}
			schY={3.6932}
			schOrientation="horizontal"
			connections={{
				pin1: "net.Net_U1_OUTNR",
				pin2: "net.Net_J1_Pin_2",
			}}
		/>
		<PSPHAQ127_100M
			name="L4"
			pcbX={-10.62}
			pcbY={-9.8504}
			pcbRotation={0}
			schSheetName="amplifier_output"
			schX={-3.94}
			schY={-6.67}
			schOrientation="horizontal"
			connections={{
				pin1: "net.Net_U1_OUTNL",
				pin2: "net.Net_J2_Pin_2",
			}}
		/>
		<resistor
			resistance="3.3ohm"
			footprint="res0603"
			name="R1"
			pcbX={-7.5375}
			pcbY={18}
			pcbRotation={0}
			schSheetName="amplifier_output"
			schX={5.8136}
			schY={8.2652}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_J1_Pin_1",
				pin2: "net.Net_C19_Pad1",
			}}
		/>
		<resistor
			resistance="3.3ohm"
			footprint="res0603"
			name="R2"
			pcbX={4.625}
			pcbY={16.7996}
			pcbRotation={-180}
			schSheetName="amplifier_output"
			schX={5.8136}
			schY={2.7788}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_C20_Pad2",
				pin2: "net.Net_J1_Pin_2",
			}}
		/>
		<resistor
			resistance="3.3ohm"
			footprint="res0603"
			name="R3"
			pcbX={1.8075}
			pcbY={-16.5004}
			pcbRotation={-180}
			schSheetName="amplifier_output"
			schX={5.8136}
			schY={-2.7076}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_C21_Pad1",
				pin2: "net.Net_J2_Pin_1",
			}}
		/>
		<resistor
			resistance="3.3ohm"
			footprint="res0603"
			name="R4"
			pcbX={-7.58}
			pcbY={-17.8}
			pcbRotation={-180}
			schSheetName="amplifier_output"
			schX={5.8136}
			schY={-7.5844}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_C22_Pad1",
				pin2: "net.Net_J2_Pin_2",
			}}
		/>
		<resistor
			resistance="100k"
			footprint="res1210"
			name="R5"
			pcbX={-32.2085}
			pcbY={8.4796}
			pcbRotation={-90}
			schSheetName="amplifier_core"
			schX={-3.7096}
			schY={4.2604}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_U1_SDZ",
				pin2: "net.P12V",
			}}
		/>
		<resistor
			resistance="100k"
			footprint="res1210"
			name="R6"
			pcbX={-35.8825}
			pcbY={13.6}
			pcbRotation={-90}
			schSheetName="amplifier_core"
			schX={-5.2336}
			schY={4.2604}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_U1_FAULTZ",
				pin2: "net.P12V",
			}}
		/>
		<resistor
			resistance="100k"
			footprint="res0402"
			name="R25"
			pcbX={-33.8}
			pcbY={0.5896}
			pcbRotation={0}
			schSheetName="amplifier_core"
			schX={0.73}
			schY={-1.84}
			schOrientation="horizontal"
			connections={{
				pin1: "net.Net_U1_GAIN_slash_SLV",
				pin2: "net.Net_U1_GVDD",
			}}
		/>
		<resistor
			resistance="20k"
			footprint="res0402"
			name="R26"
			pcbX={-34.768}
			pcbY={7}
			pcbRotation={0}
			schSheetName="amplifier_core"
			schX={-5.68}
			schY={-1.84}
			schOrientation="horizontal"
			connections={{
				pin1: "net.GND",
				pin2: "net.Net_U1_GAIN_slash_SLV",
			}}
		/>
		<resistor
			resistance="1k"
			footprint="res0805"
			name="R27"
			pcbX={-38.463}
			pcbY={15.4696}
			pcbRotation={-90}
			schSheetName="mcu"
			schX={5.4}
			schY={-0.2956}
			schOrientation="horizontal"
			connections={{
				pin1: "net.GND",
				pin2: "net.Net_D4_K",
			}}
		/>
		<resistor
			resistance="1k"
			footprint="res0805"
			name="R28"
			pcbX={-42.0275}
			pcbY={15.4696}
			pcbRotation={-90}
			schSheetName="mcu"
			schX={9.4}
			schY={-3.9532}
			schOrientation="horizontal"
			connections={{
				pin1: "net.GND",
				pin2: "net.Net_D5_K",
			}}
		/>
		<resistor
			resistance="1k"
			footprint="res0805"
			name="R29"
			pcbX={-47.5275}
			pcbY={15.4696}
			pcbRotation={-90}
			schSheetName="mcu"
			schX={6.7}
			schY={-4.5628}
			schOrientation="horizontal"
			connections={{
				pin1: "net.GND",
				pin2: "net.Net_D6_K",
			}}
		/>
		<resistor
			resistance="1k"
			footprint="res0805"
			name="R30"
			pcbX={-53.04}
			pcbY={15.4696}
			pcbRotation={-90}
			schSheetName="mcu"
			schX={2}
			schY={-0.9052}
			schOrientation="horizontal"
			connections={{
				pin1: "net.GND",
				pin2: "net.Net_D7_K",
			}}
		/>
		<capacitor
			capacitance="1nF"
			footprint="cap0603"
			name="C1"
			pcbX={-20.347}
			pcbY={5.1546}
			pcbRotation={0}
			schSheetName="amplifier_output"
			schX={-10.9504}
			schY={8.8748}
			schOrientation="vertical"
			connections={{
				pin1: "net.P12V",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="100nF"
			footprint="cap0805"
			name="C2"
			pcbX={-25.97}
			pcbY={7.3746}
			pcbRotation={-180}
			schSheetName="amplifier_output"
			schX={-9.7312}
			schY={8.8748}
			schOrientation="vertical"
			connections={{
				pin1: "net.P12V",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="220uF"
			footprint="cap1210"
			name="C3"
			pcbX={-22.3925}
			pcbY={8.4646}
			pcbRotation={-90}
			schSheetName="amplifier_output"
			schX={-7.5976}
			schY={8.8748}
			schOrientation="vertical"
			connections={{
				pin1: "net.P12V",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="1nF"
			footprint="cap0603"
			name="C4"
			pcbX={-20.347}
			pcbY={-5.1754}
			pcbRotation={0}
			schSheetName="amplifier_output"
			schX={-11.2552}
			schY={-4.5364}
			schOrientation="vertical"
			connections={{
				pin1: "net.P12V",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="100nF"
			footprint="cap0805"
			name="C5"
			pcbX={-25.9975}
			pcbY={-7.0904}
			pcbRotation={-180}
			schSheetName="amplifier_output"
			schX={-10.036}
			schY={-4.5364}
			schOrientation="vertical"
			connections={{
				pin1: "net.P12V",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="220uF"
			footprint="cap1210"
			name="C6"
			pcbX={-22.43}
			pcbY={-8.6614}
			pcbRotation={90}
			schSheetName="amplifier_output"
			schX={-7.9024}
			schY={-4.5364}
			schOrientation="vertical"
			connections={{
				pin1: "net.P12V",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="220nF"
			footprint="cap0805"
			name="C7"
			pcbX={-18.8}
			pcbY={2.2496}
			pcbRotation={-90}
			schSheetName="amplifier_output"
			schX={-10.6456}
			schY={4.6076}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_U1_BSPR",
				pin2: "net.Net_U1_OUTPR",
			}}
		/>
		<capacitor
			capacitance="220nF"
			footprint="cap0805"
			name="C8"
			pcbX={-20.77}
			pcbY={1.9246}
			pcbRotation={90}
			schSheetName="amplifier_output"
			schX={-10.6456}
			schY={2.1692}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_U1_BSNR",
				pin2: "net.Net_U1_OUTNR",
			}}
		/>
		<capacitor
			capacitance="220nF"
			footprint="cap0805"
			name="C9"
			pcbX={-20.77}
			pcbY={-2.0429}
			pcbRotation={-90}
			schSheetName="amplifier_output"
			schX={-10.6456}
			schY={0.95}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_U1_BSPL",
				pin2: "net.Net_U1_OUTPL",
			}}
		/>
		<capacitor
			capacitance="220nF"
			footprint="cap0805"
			name="C10"
			pcbX={-18.8}
			pcbY={-2.4754}
			pcbRotation={90}
			schSheetName="amplifier_output"
			schX={-10.6456}
			schY={-1.4884}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_U1_BSNL",
				pin2: "net.Net_U1_OUTNL",
			}}
		/>
		<capacitor
			capacitance="680nF"
			footprint="cap0805"
			name="C11"
			pcbX={-10.38}
			pcbY={19.05}
			pcbRotation={-90}
			schSheetName="amplifier_output"
			schX={-2.7208}
			schY={7.6556}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_J1_Pin_1",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="680nF"
			footprint="cap0805"
			name="C12"
			pcbX={1.85}
			pcbY={18.6121}
			pcbRotation={-90}
			schSheetName="amplifier_output"
			schX={-2.7208}
			schY={2.7788}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_J1_Pin_2",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="680nF"
			footprint="cap0805"
			name="C13"
			pcbX={-1.105}
			pcbY={-18.7679}
			pcbRotation={90}
			schSheetName="amplifier_output"
			schX={-2.7208}
			schY={-2.098}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_J2_Pin_1",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="680nF"
			footprint="cap0805"
			name="C14"
			pcbX={-10.58}
			pcbY={-19.25}
			pcbRotation={90}
			schSheetName="amplifier_output"
			schX={-2.7208}
			schY={-8.194}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_J2_Pin_2",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="1nF"
			footprint="cap0603"
			name="C15"
			pcbX={-8.38}
			pcbY={20.3}
			pcbRotation={-90}
			schSheetName="amplifier_output"
			schX={3.3752}
			schY={7.6556}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_J1_Pin_1",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="1nF"
			footprint="cap0603"
			name="C16"
			pcbX={3.825}
			pcbY={19.0601}
			pcbRotation={-90}
			schSheetName="amplifier_output"
			schX={3.3752}
			schY={2.7788}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_J1_Pin_2",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="1nF"
			footprint="cap0603"
			name="C17"
			pcbX={0.895}
			pcbY={-18.9054}
			pcbRotation={90}
			schSheetName="amplifier_output"
			schX={3.3752}
			schY={-2.4028}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_J2_Pin_1",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="1nF"
			footprint="cap0603"
			name="C18"
			pcbX={-8.505}
			pcbY={-20.1}
			pcbRotation={90}
			schSheetName="amplifier_output"
			schX={3.3752}
			schY={-7.8892}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_J2_Pin_2",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="10nF"
			footprint="cap0603"
			name="C19"
			pcbX={-6.58}
			pcbY={20.3}
			pcbRotation={-90}
			schSheetName="amplifier_output"
			schX={5.8136}
			schY={6.4364}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_C19_Pad1",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="10nF"
			footprint="cap0603"
			name="C20"
			pcbX={5.425}
			pcbY={19.0596}
			pcbRotation={90}
			schSheetName="amplifier_output"
			schX={5.8136}
			schY={1.2548}
			schOrientation="vertical"
			connections={{
				pin1: "net.GND",
				pin2: "net.Net_C20_Pad2",
			}}
		/>
		<capacitor
			capacitance="10nF"
			footprint="cap0603"
			name="C21"
			pcbX={2.47}
			pcbY={-18.9054}
			pcbRotation={90}
			schSheetName="amplifier_output"
			schX={5.8136}
			schY={-4.2316}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_C21_Pad1",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="10nF"
			footprint="cap0603"
			name="C22"
			pcbX={-6.655}
			pcbY={-20.1}
			pcbRotation={90}
			schSheetName="amplifier_output"
			schX={5.8136}
			schY={-9.1084}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_C22_Pad1",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="1uF"
			footprint="cap0805"
			name="C23"
			pcbX={-34.196}
			pcbY={4.6896}
			pcbRotation={0}
			schSheetName="amplifier_core"
			schX={-1.86}
			schY={0.6}
			schOrientation="vertical"
			connections={{
				pin1: "net.IN_POSITIVE_RIGHT",
				pin2: "net.Net_U1_INPR",
			}}
		/>
		<capacitor
			capacitance="1uF"
			footprint="cap0805"
			name="C24"
			pcbX={-34.196}
			pcbY={2.5396}
			pcbRotation={0}
			schSheetName="amplifier_core"
			schX={-2.51}
			schY={-0.31}
			schOrientation="vertical"
			connections={{
				pin1: "net.GND",
				pin2: "net.Net_U1_INNR",
			}}
		/>
		<capacitor
			capacitance="1uF"
			footprint="cap0805"
			name="C25"
			pcbX={-34.1965}
			pcbY={-3.4804}
			pcbRotation={0}
			schSheetName="amplifier_core"
			schX={-2.51}
			schY={-3.36}
			schOrientation="vertical"
			connections={{
				pin1: "net.IN_POSITIVE_LEFT",
				pin2: "net.Net_U1_INPL",
			}}
		/>
		<capacitor
			capacitance="1uF"
			footprint="cap0805"
			name="C26"
			pcbX={-34.1965}
			pcbY={-5.5004}
			pcbRotation={0}
			schSheetName="amplifier_core"
			schX={-1.86}
			schY={-4.27}
			schOrientation="vertical"
			connections={{
				pin1: "net.GND",
				pin2: "net.Net_U1_INNL",
			}}
		/>
		<capacitor
			capacitance="1uF"
			footprint="cap1206"
			name="C27"
			pcbX={-33.596}
			pcbY={-1.2404}
			pcbRotation={-180}
			schSheetName="amplifier_core"
			schX={-3.1}
			schY={-1.226}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_U1_GVDD",
				pin2: "net.GND",
			}}
		/>

		{/* PCM audio DAC */}
		<PCM5100APWR
			name="U2"
			pcbX={-41.6575}
			pcbY={-15.4654}
			pcbRotation={-180}
			schSheetName="dac"
			schX={-1.5536}
			schY={-1.5212}
			connections={{
				pin1: "net.P3_3V",
				pin2: "net.Net_U2_CAPP",
				pin3: "net.GND",
				pin4: "net.Net_U2_CAPM",
				pin5: "net.Net_U2_VNEG",
				pin6: "net.Net_U2_OUTL",
				pin7: "net.Net_U2_OUTR",
				pin8: "net.P3_3V",
				pin9: "net.GND",
				pin10: "net.GND",
				pin11: "net.GND",
				pin12: "net.GND",
				pin13: "net.Bit_Clock",
				pin14: "net.Data_Input",
				pin15: "net.Left_slash_Right_Clock",
				pin16: "net.GND",
				pin17: "net.Net_U2_XSMT",
				pin18: "net.Net_U2_LDOO",
				pin19: "net.GND",
				pin20: "net.P3_3V",
			}}
		/>
		<resistor
			resistance="470ohm"
			footprint="res0805"
			name="R7"
			pcbX={-33.3325}
			pcbY={-13.1364}
			pcbRotation={-90}
			schSheetName="dac"
			schX={4.8328}
			schY={0.9172}
			schOrientation="horizontal"
			connections={{
				pin1: "net.Net_U2_OUTL",
				pin2: "net.IN_POSITIVE_LEFT",
			}}
		/>
		<resistor
			resistance="470ohm"
			footprint="res0805"
			name="R8"
			pcbX={-35.5175}
			pcbY={-12.7904}
			pcbRotation={-90}
			schSheetName="dac"
			schX={3.9328}
			schY={0.3076}
			schOrientation="horizontal"
			connections={{
				pin1: "net.Net_U2_OUTR",
				pin2: "net.IN_POSITIVE_RIGHT",
			}}
		/>
		<resistor
			resistance="470ohm"
			footprint="res0805"
			name="R9"
			pcbX={-47.37}
			pcbY={-14.0904}
			pcbRotation={90}
			schSheetName="dac"
			schX={-6.7352}
			schY={-3.35}
			schOrientation="horizontal"
			connections={{
				pin1: "net.P3_3V",
				pin2: "net.Net_U2_XSMT",
			}}
		/>
		<capacitor
			capacitance="0.1uF"
			footprint="cap0805"
			name="C28"
			pcbX={-34.6575}
			pcbY={-20.6004}
			pcbRotation={0}
			schSheetName="dac"
			schX={0.8848}
			schY={4.5748}
			schOrientation="vertical"
			connections={{
				pin1: "net.P3_3V",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="10uF"
			footprint="cap1206"
			name="C29"
			pcbX={-31.7}
			pcbY={-9.1264}
			pcbRotation={-90}
			schSheetName="dac"
			schX={-0.3344}
			schY={4.5748}
			schOrientation="vertical"
			connections={{
				pin1: "net.P3_3V",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="2.2uF"
			footprint="cap0805"
			name="C30"
			pcbX={-34.67}
			pcbY={-18.4404}
			pcbRotation={-180}
			schSheetName="dac"
			schX={2.7136}
			schY={-1.826}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_U2_CAPP",
				pin2: "net.Net_U2_CAPM",
			}}
		/>
		<capacitor
			capacitance="2.2nF"
			footprint="cap0603"
			name="C31"
			pcbX={-33.61}
			pcbY={-9.0654}
			pcbRotation={-90}
			schSheetName="dac"
			schX={6.676}
			schY={0.3076}
			schOrientation="vertical"
			connections={{
				pin1: "net.IN_POSITIVE_LEFT",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="2.2nF"
			footprint="cap0603"
			name="C32"
			pcbX={-35.146}
			pcbY={-9.0654}
			pcbRotation={-90}
			schSheetName="dac"
			schX={5.7616}
			schY={-0.6068}
			schOrientation="vertical"
			connections={{
				pin1: "net.IN_POSITIVE_RIGHT",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="0.1uF"
			footprint="cap0805"
			name="C33"
			pcbX={-47.395}
			pcbY={-18.1154}
			pcbRotation={90}
			schSheetName="dac"
			schX={2.7136}
			schY={-3.9596}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_U2_LDOO",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="2.2uF"
			footprint="cap0805"
			name="C34"
			pcbX={-34.57}
			pcbY={-16.1654}
			pcbRotation={0}
			schSheetName="dac"
			schX={3.628}
			schY={-4.5692}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_U2_VNEG",
				pin2: "net.GND",
			}}
		/>

		{/* ESP32 controller */}
		<ESP32_WROOM_32_N4
			name="U3"
			pcbX={-52.995}
			pcbY={-0.1654}
			pcbRotation={-90}
			schSheetName="mcu"
			schX={-3.0536}
			schY={-5.1724}
			connections={{
				pin1: "net.GND",
				pin2: "net.P3_3V",
				pin3: "net.ESP_EN",
				pin10: "net.Left_slash_Right_Clock",
				pin11: "net.Bit_Clock",
				pin15: "net.GND",
				pin25: "net.ESP_IO0",
				pin26: "net.Net_D4_A",
				pin27: "net.Net_D5_A",
				pin28: "net.Net_D6_A",
				pin29: "net.Net_D7_A",
				pin31: "net.Data_Input",
				pin33: "net.FG_SCL",
				pin34: "net.RXD0",
				pin35: "net.TXD0",
				pin36: "net.FG_SDA",
				pin38: "net.GND",
				pin39: "net.GND",
			}}
			noConnect={[
				"pin4",
				"pin5",
				"pin6",
				"pin7",
				"pin8",
				"pin9",
				"pin12",
				"pin13",
				"pin14",
				"pin16",
				"pin17",
				"pin18",
				"pin19",
				"pin20",
				"pin21",
				"pin22",
				"pin23",
				"pin24",
				"pin30",
				"pin32",
				"pin37",
			]}
		/>
		<resistor
			resistance="10k"
			footprint="res1210"
			name="R10"
			pcbX={-54.9}
			pcbY={-13.2104}
			pcbRotation={-180}
			schSheetName="mcu"
			schX={-9.7592}
			schY={4.2764}
			schOrientation="vertical"
			connections={{
				pin1: "net.ESP_EN",
				pin2: "net.P3_3V",
			}}
		/>
		<capacitor
			capacitance="1nF"
			footprint="cap0603"
			name="C35"
			pcbX={-58.37}
			pcbY={-13.2404}
			pcbRotation={90}
			schSheetName="mcu"
			schX={-0.3104}
			schY={5.4956}
			schOrientation="vertical"
			connections={{
				pin1: "net.P3_3V",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="100nF"
			footprint="cap0805"
			name="C36"
			pcbX={-60.35}
			pcbY={-13.2479}
			pcbRotation={90}
			schSheetName="mcu"
			schX={0.9088}
			schY={5.4956}
			schOrientation="vertical"
			connections={{
				pin1: "net.P3_3V",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="0.1uF"
			footprint="cap0805"
			name="C37"
			pcbX={-51.23}
			pcbY={-12.9304}
			pcbRotation={-90}
			schSheetName="mcu"
			schX={-12.5024}
			schY={2.1428}
			schOrientation="vertical"
			connections={{
				pin1: "net.GND",
				pin2: "net.ESP_EN",
			}}
		/>

		{/* USB-C and serial adapter */}
		<CH340C
			name="U4"
			pcbX={55.14}
			pcbY={4.8221}
			pcbRotation={-90}
			schSheetName="usb_uart"
			schX={1.9392}
			schY={-0.906}
			connections={{
				pin1: "net.GND",
				pin2: "net.RXD0",
				pin3: "net.TXD0",
				pin4: "net.P3_3V",
				pin5: "net.USB_DP",
				pin6: "net.USB_DN",
				pin13: "net.Net_Q1_E",
				pin14: "net.Net_Q2_E",
				pin16: "net.P3_3V",
			}}
			noConnect={["pin7", "pin8", "pin9", "pin10", "pin11", "pin12", "pin15"]}
		/>
		<TYPE_C_31_M_12
			name="J3"
			pcbX={57.5315}
			pcbY={-6.5214}
			pcbRotation={90}
			schSheetName="usb_uart"
			schX={-9.948}
			schY={2.4468}
			connections={{
				pin1: "net.GND",
				pin2: "net.GND",
				pin3: "net.GND",
				pin4: "net.GND",
				pin6: "net.Net_J3_CC1",
				pin7: "net.USB_DN",
				pin8: "net.USB_DP",
				pin9: "net.USB_DN",
				pin10: "net.USB_DP",
				pin12: "net.Net_J3_CC2",
				pin13: "net.GND",

				pin14: "net.GND",
				pin15: "net.V_USB",
				pin16: "net.V_USB",
			}}
			noConnect={["pin5", "pin11"]}
		/>
		<transistor
			type="npn"
			footprint="sot23_3p"
			manufacturerPartNumber="BC817"
			name="Q1"
			pcbX={60.8025}
			pcbY={10.8021}
			pcbRotation={-90}
			schSheetName="usb_uart"
			schX={9.864}
			schY={-1.5156}
			connections={{
				pin1: "net.Net_Q1_B",
				pin2: "net.Net_Q1_E",
				pin3: "net.ESP_IO0",
			}}
		/>
		<transistor
			type="npn"
			footprint="sot23_3p"
			manufacturerPartNumber="BC817"
			name="Q2"
			pcbX={51.22}
			pcbY={12.5061}
			pcbRotation={-90}
			schSheetName="usb_uart"
			schX={8.9496}
			schY={-4.8684}
			connections={{
				pin1: "net.Net_Q2_B",
				pin2: "net.Net_Q2_E",
				pin3: "net.ESP_EN",
			}}
		/>
		<resistor
			resistance="5K1"
			footprint="res0805"
			name="R11"
			pcbX={50.151}
			pcbY={-7.7404}
			pcbRotation={-180}
			schSheetName="usb_uart"
			schX={-5.9712}
			schY={4.8852}
			schOrientation="horizontal"
			connections={{
				pin1: "net.Net_J3_CC1",
				pin2: "net.GND",
			}}
		/>
		<resistor
			resistance="10k"
			footprint="res1210"
			name="R12"
			pcbX={55.6575}
			pcbY={12.0361}
			pcbRotation={0}
			schSheetName="usb_uart"
			schX={7.4256}
			schY={-1.5156}
			schOrientation="horizontal"
			connections={{
				pin1: "net.Net_Q2_E",
				pin2: "net.Net_Q1_B",
			}}
		/>
		<resistor
			resistance="10k"
			footprint="res1210"
			name="R13"
			pcbX={47.8}
			pcbY={6.0121}
			pcbRotation={-90}
			schSheetName="usb_uart"
			schX={7.4256}
			schY={-4.8684}
			schOrientation="horizontal"
			connections={{
				pin1: "net.Net_Q1_E",
				pin2: "net.Net_Q2_B",
			}}
		/>
		<resistor
			resistance="5K1"
			footprint="res0805"
			name="R14"
			pcbX={50.151}
			pcbY={-4.7404}
			pcbRotation={0}
			schSheetName="usb_uart"
			schX={-5.0712}
			schY={4.2756}
			schOrientation="horizontal"
			connections={{
				pin1: "net.GND",
				pin2: "net.Net_J3_CC2",
			}}
		/>
		<capacitor
			capacitance="10uF"
			footprint="cap1210"
			name="C38"
			pcbX={47.96}
			pcbY={-0.5404}
			pcbRotation={-180}
			schSheetName="usb_uart"
			schX={3.4632}
			schY={4.5804}
			schOrientation="vertical"
			connections={{
				pin1: "net.P3_3V",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="0.1uF"
			footprint="cap0805"
			name="C39"
			pcbX={47.55}
			pcbY={2.2321}
			pcbRotation={-180}
			schSheetName="usb_uart"
			schX={4.6824}
			schY={4.5804}
			schOrientation="vertical"
			connections={{
				pin1: "net.P3_3V",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="10uF"
			footprint="cap1210"
			name="C40"
			pcbX={39.9725}
			pcbY={-18.9464}
			pcbRotation={90}
			schSheetName="charger"
			schX={5.348}
			schY={-0.1292}
			schOrientation="vertical"
			connections={{
				pin1: "net.V_BATT",
				pin2: "net.GND",
			}}
		/>

		{/* Li-ion charger and 1210 (metric 3225) status LEDs */}
		<TP4056_42_ESOP8
			name="U6"
			pcbX={34.2775}
			pcbY={-14.0014}
			pcbRotation={0}
			schSheetName="charger"
			schX={1.3856}
			schY={-1.3484}
			connections={{
				pin2: "net.Net_U6_PROG",
				pin3: "net.GND",
				pin4: "net.Net_D2_A",
				pin5: "net.V_BATT",
				pin6: "net.Net_U6_STDBY",
				pin7: "net.Net_U6_CHRG",
				pin8: "net.Net_D2_A",
				pin9: "net.GND",
			}}
			noConnect={["pin1"]}
		/>
		<B2B_PH_K_S_LF__SN_
			name="J4"
			pcbX={46.32}
			pcbY={-20.320437}
			pcbRotation={180}
			schSheetName="battery_power"
			schX={12}
			schY={0}
			connections={{
				pin1: "net.GND",
				pin2: "net.V_BATT",
			}}
		/>
		<led
			color="red"
			footprint="led1210"
			name="D2"
			pcbX={45}
			pcbY={-12.0964}
			pcbRotation={0}
			schSheetName="charger"
			schX={-3}
			schY={-0.1292}
			schOrientation="horizontal"
			connections={{
				pin1: "net.Net_D2_K",
				pin2: "net.Net_D2_A",
			}}
		/>
		<led
			color="red"
			footprint="led1210"
			name="D3"
			pcbX={44.985}
			pcbY={-15.5264}
			pcbRotation={0}
			schSheetName="charger"
			schX={-3}
			schY={1.09}
			schOrientation="horizontal"
			connections={{
				pin1: "net.Net_D3_K",
				pin2: "net.Net_D2_A",
			}}
		/>
		<led
			color="red"
			footprint="led1210"
			name="D4"
			pcbX={-35.04}
			pcbY={19.4696}
			pcbRotation={0}
			schSheetName="mcu"
			schX={6.7}
			schY={-0.2956}
			schOrientation="horizontal"
			connections={{
				pin1: "net.Net_D4_K",
				pin2: "net.Net_D4_A",
			}}
		/>
		<led
			color="red"
			footprint="led1210"
			name="D5"
			pcbX={-40.54}
			pcbY={19.4696}
			pcbRotation={0}
			schSheetName="mcu"
			schX={10.6624}
			schY={-3.9532}
			schOrientation="horizontal"
			connections={{
				pin1: "net.Net_D5_K",
				pin2: "net.Net_D5_A",
			}}
		/>
		<led
			color="red"
			footprint="led1210"
			name="D6"
			pcbX={-46.04}
			pcbY={19.4696}
			pcbRotation={0}
			schSheetName="mcu"
			schX={7.9192}
			schY={-4.5628}
			schOrientation="horizontal"
			connections={{
				pin1: "net.Net_D6_K",
				pin2: "net.Net_D6_A",
			}}
		/>
		<led
			color="red"
			footprint="led1210"
			name="D7"
			pcbX={-51.54}
			pcbY={19.4696}
			pcbRotation={0}
			schSheetName="mcu"
			schX={3.3472}
			schY={-0.9052}
			schOrientation="horizontal"
			connections={{
				pin1: "net.Net_D7_K",
				pin2: "net.Net_D7_A",
			}}
		/>
		<resistor
			resistance="0.4ohm"
			footprint="res0805"
			name="R16"
			pcbX={35.4125}
			pcbY={-19.4864}
			pcbRotation={90}
			schSheetName="charger"
			schX={1.3856}
			schY={3.2236}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_D2_A",
				pin2: "net.V_USB",
			}}
		/>
		<resistor
			resistance="1.2k"
			footprint="res0805"
			name="R17"
			pcbX={28.9225}
			pcbY={-14.3364}
			pcbRotation={-90}
			schSheetName="charger"
			schX={5.0432}
			schY={-3.482}
			schOrientation="vertical"
			connections={{
				pin1: "net.GND",
				pin2: "net.Net_U6_PROG",
			}}
		/>
		<resistor
			resistance="1k"
			footprint="res0805"
			name="R18"
			pcbX={40.2825}
			pcbY={-13.4364}
			pcbRotation={0}
			schSheetName="charger"
			schX={-4.5}
			schY={-0.1292}
			schOrientation="horizontal"
			connections={{
				pin1: "net.Net_U6_CHRG",
				pin2: "net.Net_D2_K",
			}}
		/>
		<resistor
			resistance="1k"
			footprint="res0805"
			name="R19"
			pcbX={40.2725}
			pcbY={-15.4364}
			pcbRotation={0}
			schSheetName="charger"
			schX={-4.5}
			schY={1.09}
			schOrientation="horizontal"
			connections={{
				pin1: "net.Net_U6_STDBY",
				pin2: "net.Net_D3_K",
			}}
		/>
		<capacitor
			capacitance="0.1uF"
			footprint="cap0805"
			name="C41"
			pcbX={33.1425}
			pcbY={-19.4864}
			pcbRotation={90}
			schSheetName="charger"
			schX={-5.0152}
			schY={3.5284}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_D2_A",
				pin2: "net.GND",
			}}
		/>

		{/* USB/battery input and 3.3 V LDO */}
		<XC6220B331MR
			name="U5"
			pcbX={51.6075}
			pcbY={16.3791}
			pcbRotation={0}
			schSheetName="battery_power"
			schX={3.1912}
			schY={-0.1268}
			connections={{
				pin1: "net.Net_D1_K",
				pin2: "net.GND",
				pin3: "net.Net_D1_K",
				pin5: "net.P3_3V",
			}}
			noConnect={["pin4"]}
		/>
		<mosfet
			channelType="p"
			mosfetMode="enhancement"
			footprint="sot23_3p"
			manufacturerPartNumber="DMG2301L-7"
			name="Q3"
			pcbX={47.7775}
			pcbY={18.4796}
			pcbRotation={-90}
			schSheetName="battery_power"
			schX={-4.7336}
			schY={1.702}
			connections={{
				pin1: "net.V_USB",
				pin2: "net.Net_D1_K",
				pin3: "net.V_BATT",
			}}
		/>
		<diode
			schottky
			footprint="sod323"
			name="D1"
			pcbX={45.0975}
			pcbY={18.1396}
			pcbRotation={-90}
			schSheetName="battery_power"
			schX={-5.0384}
			schY={-0.7364}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_D1_K",
				pin2: "net.V_USB",
			}}
		/>
		<resistor
			resistance="5K1"
			footprint="res0805"
			name="R15"
			pcbX={45.1875}
			pcbY={21.5296}
			pcbRotation={0}
			schSheetName="battery_power"
			schX={-8.3912}
			schY={-0.4316}
			schOrientation="vertical"
			connections={{
				pin1: "net.V_USB",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="0.1uF"
			footprint="cap0805"
			name="C42"
			pcbX={51.5175}
			pcbY={19.8081}
			pcbRotation={-90}
			schSheetName="battery_power"
			schX={8.3728}
			schY={-1.6508}
			schOrientation="vertical"
			connections={{
				pin1: "net.P3_3V",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="1uF"
			footprint="cap0805"
			name="C43"
			pcbX={47.02375}
			pcbY={15.4496}
			pcbRotation={-180}
			schSheetName="battery_power"
			schX={-1.3808}
			schY={-1.346}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_D1_K",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="0.1uF"
			footprint="cap0805"
			name="C44"
			pcbX={53.5975}
			pcbY={19.8081}
			pcbRotation={-90}
			schSheetName="battery_power"
			schX={6.2392}
			schY={-1.346}
			schOrientation="vertical"
			connections={{
				pin1: "net.P3_3V",
				pin2: "net.GND",
			}}
		/>

		{/* 12 V boost converter */}
		<TPS61088RHLR
			name="U7"
			pcbX={34.425}
			pcbY={1.4746}
			pcbRotation={90}
			schSheetName="boost"
			schX={2.7472}
			schY={0.9164}
			connections={{
				pin1: "net.Net_U7_VCC",
				pin2: "net.Net_U7_EN",
				pin3: "net.Net_U7_FSW",
				pin4: "net.Net_U7_SW_4",
				pin5: "net.Net_U7_SW_4",
				pin6: "net.Net_U7_SW_4",
				pin7: "net.Net_U7_SW_4",
				pin8: "net.Net_U7_BOOT",
				pin9: "net.Net_U7_EN",
				pin10: "net.Net_U7_SS",
				pin14: "net.P12V",
				pin15: "net.P12V",
				pin16: "net.P12V",
				pin17: "net.Net_U7_FB",
				pin18: "net.Net_U7_COMP",
				pin19: "net.Net_U7_ILIM",
				pin20: "net.GND",
				pin21: "net.GND",
			}}
			noConnect={["pin11", "pin12", "pin13"]}
		/>
		<fuse
			currentRating="15A"
			voltageRating="32V"
			footprint="kicad:Fuse/Fuseholder_Cylinder-6.3x32mm_Schurter_0031-8002_Horizontal_Open"
			cadModel={{
				stepUrl:
					"https://gitlab.com/kicad/libraries/kicad-packages3D/-/raw/master/Fuse.3dshapes/Fuseholder_Cylinder-6.3x32mm_Schurter_0031-8002_Horizontal_Open.step",
				modelOriginPosition: { x: 18.75, y: 0, z: 0 },
			}}
			name="F1"
			pcbX={20.03}
			pcbY={18.9996}
			pcbRotation={-90}
			schSheetName="boost"
			schX={-13.4072}
			schY={1.2212}
			connections={{
				pin1: "net.Net_U7_EN",
				pin2: "net.V_BATT",
			}}
		/>
		<CDRH127NP_1R2NC
			name="L5"
			pcbX={35.63}
			pcbY={16.25}
			pcbRotation={90}
			schSheetName="boost"
			schX={-7.3112}
			schY={2.4404}
			schOrientation="horizontal"
			connections={{
				pin1: "net.Net_U7_EN",
				pin2: "net.Net_U7_SW_4",
			}}
		/>
		<resistor
			resistance="255k"
			footprint="res1210"
			name="R20"
			pcbX={38.8}
			pcbY={6.4}
			pcbRotation={90}
			schSheetName="boost"
			schX={-3.044}
			schY={1.526}
			schOrientation="horizontal"
			connections={{
				pin1: "net.Net_U7_SW_4",
				pin2: "net.Net_U7_FSW",
			}}
		/>
		<resistor
			resistance="100k"
			footprint="res1210"
			name="R21"
			pcbX={42.45}
			pcbY={-3.6904}
			pcbRotation={90}
			schSheetName="boost"
			schX={8.8432}
			schY={0.9164}
			schOrientation="horizontal"
			connections={{
				pin1: "net.Net_U7_ILIM",
				pin2: "net.GND",
			}}
		/>
		<resistor
			resistance="49.9k"
			footprint="res1210"
			name="R22"
			pcbX={42.1}
			pcbY={2.2796}
			pcbRotation={-90}
			schSheetName="boost"
			schX={10.0624}
			schY={2.7452}
			schOrientation="horizontal"
			connections={{
				pin1: "net.Net_U7_COMP",
				pin2: "net.Net_C51_Pad1",
			}}
		/>
		<resistor
			resistance="56k"
			footprint="res1210"
			name="R23"
			pcbX={37.02}
			pcbY={-4.1514}
			pcbRotation={90}
			schSheetName="boost"
			schX={13.4152}
			schY={3.6596}
			schOrientation="horizontal"
			connections={{
				pin1: "net.Net_U7_FB",
				pin2: "net.GND",
			}}
		/>
		<resistor
			resistance="470k"
			footprint="res1210"
			name="R24"
			pcbX={33.52}
			pcbY={-7.4204}
			pcbRotation={-90}
			schSheetName="boost"
			schX={12.5008}
			schY={4.8788}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_U7_FB",
				pin2: "net.P12V",
			}}
		/>
		<capacitor
			capacitance="0.1uF"
			footprint="cap0805"
			name="C45"
			pcbX={29.6525}
			pcbY={8.45}
			pcbRotation={-180}
			schSheetName="boost"
			schX={-10.3592}
			schY={-0.3028}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_U7_EN",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="10uF"
			footprint="cap1210"
			name="C46"
			pcbX={31.4}
			pcbY={5.9}
			pcbRotation={-180}
			schSheetName="boost"
			schX={-8.5304}
			schY={-0.3028}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_U7_EN",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="0.1uF"
			footprint="cap0805"
			name="C47"
			pcbX={35.485}
			pcbY={7.8}
			pcbRotation={-180}
			schSheetName="boost"
			schX={-3.3488}
			schY={-3.046}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_U7_SW_4",
				pin2: "net.Net_U7_BOOT",
			}}
		/>
		<capacitor
			capacitance="3.3uF"
			maxDecouplingTraceLength="5mm"
			footprint="cap0805"
			name="C48"
			pcbX={38.205}
			pcbY={1.8246}
			pcbRotation={-90}
			schSheetName="boost"
			schX={-3.3488}
			schY={-5.1796}
			schOrientation="vertical"
			connections={{
				pin1: "net.GND",
				pin2: "net.Net_U7_VCC",
			}}
		/>
		<capacitor
			capacitance="0.1uF"
			footprint="cap0805"
			name="C49"
			pcbX={30.625}
			pcbY={1.0946}
			pcbRotation={-90}
			schSheetName="boost"
			schX={8.8432}
			schY={-0.3028}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_U7_SS",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="0.1uF"
			footprint="cap0805"
			name="C50"
			pcbX={39.75}
			pcbY={-3.5804}
			pcbRotation={90}
			schSheetName="boost"
			schX={10.0624}
			schY={1.8308}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_U7_COMP",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="0.1uF"
			footprint="cap0805"
			name="C51"
			pcbX={42.52}
			pcbY={7.2796}
			pcbRotation={0}
			schSheetName="boost"
			schX={11.8912}
			schY={2.7452}
			schOrientation="vertical"
			connections={{
				pin1: "net.Net_C51_Pad1",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="0.1uF"
			footprint="cap0805"
			name="C52"
			pcbX={29.708}
			pcbY={-3.8454}
			pcbRotation={-180}
			schSheetName="boost"
			schX={9.7576}
			schY={5.1836}
			schOrientation="vertical"
			connections={{
				pin1: "net.P12V",
				pin2: "net.GND",
			}}
		/>
		<capacitor
			capacitance="0.1uF"
			footprint="cap0805"
			name="C53"
			pcbX={33.1175}
			pcbY={-2.8214}
			pcbRotation={-180}
			schSheetName="boost"
			schX={11.2816}
			schY={5.1836}
			schOrientation="vertical"
			connections={{
				pin1: "net.P12V",
				pin2: "net.GND",
			}}
		/>

		{/* Battery fuel gauge */}
		<MAX17048G_T10
			name="U8"
			pcbX={-58.69}
			pcbY={15.0996}
			pcbRotation={-180}
			schSheetName="fuel_gauge"
			schX={0}
			schY={0}
			connections={{
				pin1: "net.GND",
				pin2: "net.V_BATT",
				pin3: "net.V_BATT",
				pin4: "net.GND",
				pin6: "net.GND",
				pin7: "net.FG_SCL",
				pin8: "net.FG_SDA",
			}}
			noConnect={["pin5"]}
		/>
	</board>
);

export default ESP32HiFiBluetoothSpeaker;
