# ESP32 HiFi Bluetooth Speaker PCB Board

This project showcases the design and assembly of a **HiFi Bluetooth speaker PCB board** based on the ESP32.  
It includes PCB layer visualization, the assembled board, and BLE schematics for reference.

## 📐 PCB Layers
![PCB Layers](PCB-layers.png)

## 🔧 Assembled PCB
![Assembled PCB](assembled-pcb-2.png)

## 📊 Schematics (BLE)
![Schematics BLE](BLUETOOTH_SPEAKER_scematic.jpg)

## tscircuit project

The tscircuit source follows the same structure as the blue-boorter reference:

- `index.circuit.tsx` contains the complete board, schematic placement, PCB
  placement, component values, and electrical connections as direct JSX.
- Native tscircuit primitives are used directly for resistors, capacitors,
  inductors, LEDs, the Schottky diode, BJTs, MOSFET, fuse, and mounting pads.
- Standard package geometry is written directly with proper
  [Footprinter](https://github.com/tscircuit/footprinter) package families.
  Where the checked-in land pattern differs from a Footprinter default, the
  full metric package name carries the exact dimensions (for example,
  `led_metric3225_...` is the 1210 LED package). There are no local footprint
  or schematic-symbol factory functions.
- The five WE-PD 1260 inductors and Schurter fuse holder use their official
  KiCad-library footprints directly through `kicad:` references.
- `imports/` contains only the eight ICs and exact connector packages (USB-C
  and the reusable JST XH/PH parts) that do not have equivalent native tscircuit
  components. Each is a flat JLCPCB component file with its LCSC number, exact
  footprint, and remote OBJ/STEP model.
- No generated component table, Circuit JSON runtime import, KiCad converter,
  or source-generation script is used by the tscircuit implementation.

The board has 115 explicit component declarations: 111 populated BOM parts and
four mounting pads. Ten functional schematic sheets keep the complete circuit
readable. Its dimensions, four-layer stack, reference designators, values,
connections, and component coordinates follow the checked-in KiCad reference.

```bash
bun install
bun run typecheck
bun run dev
bun run build
bun run snapshot
```

The original KiCad files and fabrication outputs remain checked in alongside
the tscircuit implementation for comparison and manufacturing review.
