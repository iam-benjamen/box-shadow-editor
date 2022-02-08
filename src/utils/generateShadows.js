import hexToRGB from "./hexToRGB";

export default function generateShadows(hoffset, voffset, blur, spread, color, opac, inset) {
    return `${hoffset}px ${voffset}px ${blur}px ${spread}px ${hexToRGB(`${color}`, opac)} ${inset ? " inset" : ""};`;
}
