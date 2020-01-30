const enum Orientation {
    landscape ='landscape',
    portrait = 'portrait',
    unknown = 'unknown',
}

const enum DeviceType {
    mobile = 'mobile',
    tablet = 'tablet',
    desktop = 'desktop',
    unknown = 'unknown',
}

const enum OS {
    ios = 'ios' ,
    iphone = 'iphone' ,
    ipad = 'ipad' ,
    ipod = 'ipod' ,
    android = 'android' ,
    blackberry = 'blackberry' ,
    windows =  'windows' ,
    macos = 'macos' ,
    fxos = 'fxos' ,
    meego = 'meego' ,
    television = 'television' ,
    unknown = 'unknown',
}

interface device {
    mobile(): boolean;
    tablet(): boolean;
    desktop(): boolean;
    ios(): boolean;
    ipad(): boolean;
    iphone(): boolean;
    ipod(): boolean;
    android(): boolean;
    androidPhone(): boolean;
    androidTablet(): boolean;
    blackberry(): boolean;
    blackberryPhone(): boolean;
    blackberryTablet(): boolean;
    windows(): boolean;
    windowsPhone(): boolean;
    windowsTablet(): boolean;
    fxos(): boolean;
    fxosPhone(): boolean;
    fxosTablet(): boolean;
    meego(): boolean;
    television(): boolean;

    landscape(): boolean;
    portrait(): boolean;

    /**
     * This event is triggered whenever the device's orientation changes.
     * @param callback It will be called every time the orientation changes,
     *                 it is passed the `newOrientation` as a string. 
     */
    onChangeOrientation(callback: (newOrientation: Orientation) => void): void;

    type: DeviceType;
    orientation: Orientation;
    os: OS;
}

const obj: device;

declare module 'current-device' {
    export default obj;
}