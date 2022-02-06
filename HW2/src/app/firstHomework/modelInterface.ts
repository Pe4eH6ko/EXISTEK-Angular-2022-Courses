import Firm from "./Firm";
import item from "./itemInterface";

export default interface model extends item {
    firm: Firm;
    weight: number;
    color: string;
    memorySize: string;
    screenInches: number;
    readonly screenResolution: string;
    nfc: boolean;
    camera: boolean;
    cameraMP: number;
}